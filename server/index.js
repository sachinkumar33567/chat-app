import path from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongoDB from './db/mongo.connect.js'
import { app, server } from './socket/socket.js'

const __dirname = path.resolve()
dotenv.config()

app.use(express.json())
app.use(cookieParser())

// app.get('/', (req, res) => {
//     res.send('Server is ready')
// })

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})


server.listen(3000, (req, res) => {
    connectToMongoDB()
    console.log('Server is running on port 3000')
})