const { v4: uuidv4 } = require('uuid')
const server = require('../../../server')
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let connectedUsers = []
let rooms = []


const getRoomById = (req, res) => {
    const { roomId } = req.params
    const room = rooms.find(room => room.roomId === roomId)

    if(room){
        if(room.connectedUsers.length > 3){
            return res.send({ roomExists: true, full: true })
        } else {
            return res.send({ roomExists: true, full: false})
        }
    } else {
        return res.status(404).send({ roomExists: false, errorMessage: "Room does not exist"})
    }
}

const joinRoomHandler = (data, socket) => {
    const { username, userId, roomId } = data

    const newUser = {
        userId,
        username,
        roomId, 
        socketId: socket.id
    }

    //Join room 
    const room = rooms.find(room => room.roomId === roomId)

    if(!room.connectedUsers.some(elem => elem.username === newUser.username)){
        room.connectedUsers = [...room.connectedUsers, newUser]
        connectedUsers = room.connectedUsers
    }

    room.connectedUsers.forEach(user => {
        if(user.socketId !== socket.id){
            const data = {
                connUserSocketId: socket.id
            }

            socket.to(user.socketId).emit('conn-prepare', data)
        }
    })

    socket.join(roomId)

    socket.in(roomId).emit("room-update", { connectedUsers: room.connectedUsers })
    socket.emit("room-update", { connectedUsers: room.connectedUsers })
}



const createNewRoomHandler = (data, socket) => {
    console.log('new room created')
    console.log(data)

    const roomId = uuidv4()

    const newUser = {
        userId: data.userId,
        username: data.username,
        socketId: socket.id,
        roomId
    }

    //Push new users to connectedUsers array
    connectedUsers = [...connectedUsers, newUser]

    const newRoom = {
        roomId,
        connectedUsers: [newUser]
    }

    //Join socket.io room
    socket.join(roomId)
    rooms = [...rooms, newRoom]

    //Emit to client which created that roomId
    socket.emit('room-id', { roomId })
    //Emit an event to all users connected

    //To that room about new users which are right in this room
    socket.emit('room-update', { connectedUsers: newRoom.connectedUsers })
    
}

const disconnectHandler = (socket) => {
    const user = connectedUsers.find((user) => user.socketId === socket.id)

    if(user){

        
        //remove user from room
        const room = rooms.find(room => room.roomId === user.roomId)
        room.connectedUsers = room.connectedUsers.filter(user => user.socketId !== socket.id)

        socket.leave(user.roomId)

        //close room if all users leave
        if(room.connectedUsers.length > 0){

            socket.to(room.roomId).emit('user-disconnected', { socketId: socket.id })

            socket.in(room.roomId).emit('room-update', {
                connectedUsers: room.connectedUsers
            })
        } else {
            rooms = rooms.filter(r => r.roomId !== room.roomId)
        }
    }
}


const signalHandler = (data, socket) => {
    const { connUserSocketId, signal } = data
    const signalingData = { signal, connUserSocketId: socket.id }

    socket.to(connUserSocketId).emit('conn-signal', signalingData)
}

const initializeConnectionHandler = (data, socket) => {
    const { connUserSocketId } = data
    
    const initData = { connUserSocketId: socket.id }
    socket.to(connUserSocketId).emit('conn-init', initData)
}

module.exports = {
    getRoomById,
    createNewRoomHandler,
    joinRoomHandler,
    disconnectHandler, 
    signalHandler,
    initializeConnectionHandler

    
}