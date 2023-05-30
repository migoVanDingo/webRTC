import * as Wss from './wss'
import { store } from '../store/store'


const defaultContraints = {
    audio: true,
    video: true
}

let localStream

export const initRoomConnection = async (
    isRoomHost: any,
    identity: any,
    roomId: any = null
) => {
    navigator.mediaDevices.getUserMedia(defaultContraints)
    .then((stream: any) => {
        console.log('Successfully received local stream')
        showLocalVideoPreview(stream)

        isRoomHost ? Wss.createNewRoom(identity) : Wss.joinRoom(identity, roomId)
    })
    .catch((err: any) => {
        console.log("Error trying to get video stream")
        console.error(err)
    })
}

const showLocalVideoPreview = (stream: any) => {

}