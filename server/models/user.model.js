import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female'] // We use enum when we have some certain values
    },
    profilePicture: {
        type: String,
        default: "https://i.pinimg.com/originals/60/13/a3/6013a33f806d8d74f43ee2eb565ff4dc.jpg"
    }
}, {timestamps: true})


const User = mongoose.model('User', userSchema)

export default User