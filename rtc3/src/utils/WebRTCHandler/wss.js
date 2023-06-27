import io from 'socket.io-client'
import { store } from '../../app/store'
import { setRoomId, setParticipants } from '../../app/actions'
import * as WebRTCHandler from './webRtcHandler'

const SERVER = 'http://54.175.165.161:8888'

let socket = null

//This intializes on app start in App.js
export const connectWithSocketServer = () => {
    socket = io(SERVER)
    
    socket.on("connect", () => {
        console.log("successfully connected with Socket IO server")
        console.log("socket ID: ", socket.id)

        
    })

    socket.on("room-id", (data) => {
        const { roomId } = data
        store.dispatch(setRoomId(roomId))
    })


    socket.on("room-update", (data) => {
        const { connectedUsers } = data
        console.log("room update: ", connectedUsers)
        store.dispatch(setParticipants(connectedUsers))
    })

    socket.on('conn-prepare', (data) => {
        const { connUserSocketId } = data
        console.log('connUserSocketID: ', connUserSocketId)
        WebRTCHandler.prepareNewPeerConnection(connUserSocketId, false)

        socket.emit('conn-init', { connUserSocketId: connUserSocketId })
    })

    socket.on('conn-signal', (data) => {
        WebRTCHandler.handleSignalData(data)
    })

    socket.on('conn-init', (data) => {
       
        const { connUserSocketId } = data
        console.log("conn-init: " , data)
        WebRTCHandler.prepareNewPeerConnection(connUserSocketId, true)
        
    })

    socket.on('user-disconnected', (data) => {
        WebRTCHandler.removePeerConnection(data)
    })
}

//Rooms
export const createNewRoom = (userId, username) => {
    //Emit event to server to create new room
    const data = {
        userId,
        username
    }

    socket.emit('create-new-room', data)
}

export const joinRoom = (userId, username, roomId) => {
    //Emit event to server to join a room
    const data = {
        userId,
        username,
        roomId
    }

    console.log('attempt to join room')
    socket.emit('join-room', data)
}


export const signalPeerData = (data) => {
    socket.emit('conn-signal', data)
}