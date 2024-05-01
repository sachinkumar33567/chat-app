import { useState } from "react"
import toast from "react-hot-toast"
import useConversation from "../zustand/useConversation"

const useSendMessage = () => {
    const {selectedConversation, messages, setMessages} = useConversation()

    const sendMessage = async (message) => {
        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({message})
            })
            const data = await res.json()
            if (data.error) throw new Error(data.error)
            setMessages([...messages, data])
        } catch (error) {
            toast.error(error.message)
        }
    }

    return {sendMessage}
}


export default useSendMessage