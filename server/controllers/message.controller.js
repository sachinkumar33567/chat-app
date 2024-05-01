import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
import { getReceiverSocketId, io } from "../socket/socket.js"

export const sendMessage = async (req, res) => {
    const {id: receiverId} = req.params
    const {message} = req.body
    const senderId = req.user._id
    try {
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        })

        if (!conversation) {
            conversation = new Conversation({
                participants: [senderId, receiverId]
            })
        }

        if (newMessage) {
            // await newMessage.save()
            if (conversation) {
                conversation.messages.push(newMessage._id)
                // await conversation.save()
            }
        }

        // This will run in parallel
        await Promise.all([conversation.save(), newMessage.save()])
        
        // SOCKET IO FUNCIONALITY WILL GO HERE
        const receiverSocketId = getReceiverSocketId(receiverId)
        if (receiverSocketId) {
            // io.to(<socket_id>).emit() is used to send events to specific client
            io.to(receiverSocketId).emit('newMessage', newMessage)
        }

        res.status(201).json(newMessage)

    } catch (error) {
        console.log('Error in Send message controller', error.message)
        res.status(500).json({error: 'Internal server error'})
    }
}

export const getMesssages = async (req, res) => {
    const {id: receiverId} = req.params
    const senderId = req.user._id

    try {
        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        }).populate('messages') // It will populate entire messages database, using the messages id
        // we get from the conversation.messages

        if (!conversation) {
            return res.status(200).json([])
        }

        const messages = conversation.messages
        res.status(200).json(messages)
        
    } catch (error) {
        console.log('Error in Get messages', error.message)
        res.status(500).json({error: 'Internal server error'})
    }
}