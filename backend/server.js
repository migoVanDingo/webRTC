const express = require('express')
const http = require('http')
const cors = require('cors')
const twilio = require('twilio')
const ENV = require('./config')
const RoomController = require("./api/room/controller/roomRoutes")
const RoomHandler = require('./api/room/handler/roomHandler')
const TeamChatController = require("./api/team-chat/controller/TeamChatController")
const bodyParser = require('body-parser');

const app = express()
const PORT = ENV.PORT || 8888

//Middleware
app.use(cors({origin: "*"}))
app.use(bodyParser.json());


//API
RoomController(app)
TeamChatController(app)


//Init
const server = http.createServer(app)
const io = require('socket.io')(server, {
    cors:{
        origin: '*',
        methods: ['GET', 'POST']
    }
})

//Socket Handler Functions
io.on('connection', (socket) => {
    console.log('user connected -- socket ID: ', socket.id)

    socket.on('create-new-room', (data) => {
        console.log('Connected -- Create new Room Event')
    
        RoomHandler.createNewRoomHandler(data, socket)
    })

    socket.on('join-room', (data) => {
        console.log("Participant joined room")
        RoomHandler.joinRoomHandler(data, socket)
    })

    socket.on('disconnect', () => {
        console.log("USER DISCONNECTED")
        RoomHandler.disconnectHandler(socket)
    })

    socket.on('conn-signal', (data) => {
        RoomHandler.signalHandler(data, socket)
    })

    socket.on('conn-init', (data) => {
        RoomHandler.initializeConnectionHandler(data, socket)
    })
})






//Start server
server.listen(PORT, () => {
    console.log("App listening on port: " + PORT)
})

module.exports = {
    server, 
    io
}