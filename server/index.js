import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongoDB from './db/mongo.connect.js'

const app = express()
dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

app.listen(3000, (req, res) => {
    connectToMongoDB()
    console.log('Server is running on port 3000')
})