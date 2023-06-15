import { ACTIONS } from './actions'

const initState = {
    userId: '',
    isRoomHost: false, 
    connectWithAudioOnly: false,
    roomId: null,
    username: '',
    isLoading: true,
    participants: [],
    messages:[]

}

const reducer = (state = initState, action) => {
    switch(action.type){
        case ACTIONS.SET_IS_ROOM_HOST:
            return {
                ...state,
                isRoomHost: action.isRoomHost
            }

        case ACTIONS.SET_CONNECT_ONLY_WITH_AUDIO:
            return{
                ...state,
                connectOnlyWithAudio: action.onlyWithAudio
            }

        case ACTIONS.SET_ROOM_ID:
            return {
                ...state,
                roomId: action.roomId
            }

        case ACTIONS.SET_USER_ID:
            return {
                ...state,
                userId: action.userId
            }
        
        case ACTIONS.SET_USERNAME:
            return {
                ...state,
                username: action.username
            }

        case ACTIONS.SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }

        case ACTIONS.SET_PARTICIPANTS:
            return {
                ...state,
                participants: action.participants
            }

        case ACTIONS.SET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            }

        default:
            return state
    }
}

export default reducer