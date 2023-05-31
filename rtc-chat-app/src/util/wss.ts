import io from 'socket.io-client'
import { store } from '../store/store'
import { setRoomId } from '../store/actions'

const SERVER = 'http://localhost:8888'

let socket:any = null
export const connectWithSocketIOServer = () => {
    socket = io(SERVER)

    socket.on('connect', () => {
        console.log("Successfully connected with SocketIO Server: " + socket.id)
    })

    socket.on('room-id', (data: any) => {
        
        const { roomId } = data
        console.log('got room-id from backend: ' + roomId)
        store.dispatch(setRoomId(roomId))
    })
}

export const createNewRoom = (identity: any) => {

    const data = {
        identity
    }

    socket.emit("create-new-room", data)
}

export const joinRoom = (identity: any, roomId: any) => {
    const data = {
        identity,
        roomId
    }

    socket.emit("join-room", data)
}