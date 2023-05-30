const express = require('express')
const http = require('http')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')
const twilio = require('twilio')
const ENV = require('./config')

const app = express()

let connectedUsers = []
let rooms = []

const PORT = ENV.PORT || 8888

//Middleware
app.use(cors())

//Start Server
const server = http.createServer(app)
const io = require('socket.io')(server, {
    cors:{
        origin: '*',
        methods: ['GET', 'POST']
    }
})

io.on('connect', (socket) => {
    console.log('user connected ', socket.id)

    socket.on('create-new-room', (data) => {
        createNewRoomHandler(data, socket)
        
    })
})

//Socket Handler Functions
const createNewRoomHandler = (data, socket) => {
    console.log('new room created')
    console.log(data)

    const roomId = uuidv4()

    const newUser = {
        identity: data.identity,
        id: data.id,
        socketId: socket.id
    }

    connectedUsers = [...connectedUsers, newUser]

    const newRoom = {
        id: roomId,
        connectedUsers: [newUser]
    }

    socket.join(roomId)
    rooms = [...rooms, newRoom]

    socket.emit('room-id', { roomId })
}



//Start server
server.listen(PORT, () => {
    console.log("App listening on port: " + PORT)
})