import User from "../models/user.model.js"

export const getUsers = async (req, res) => {
    const userId = req.user._id
    try {
        const users = await User.find({_id: {$ne: userId}}).select('-password')
        res.status(200).json(users)
    } catch (error) {
        console.log('Error in Get users controller', error.message)
        res.status(500).json({error: 'Internal server error'})
    }
}