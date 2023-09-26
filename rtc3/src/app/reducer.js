import { ACTIONS } from './actions'

const initState = {
    userId: '',
    isRoomHost: false, 
    connectWithAudioOnly: false,
    roomId: null,
    username: '',
    isLoading: true,
    participants: [],
    messages:[],

    channelName: '',
    channelId: '',
    channelMembers: [],
    channelMessages: [],
    currentUserChatId: '',
    currentUserEmail: ''

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



        //CHAT
        case ACTIONS.SET_CURRENT_CHAT_CHANNEL_NAME:
            return {
                ...state,
                channelName: action.channelName
            }

        case ACTIONS.SET_CURRENT_CHAT_CHANNEL_ID:
            return {
                ...state,
                channelId: action.channelId
            }

        case ACTIONS.SET_CHANNEL_MEMBERS:
            return {
                ...state,
                channelMembers: action.channelMembers
            }

        case ACTIONS.SET_CHANNEL_MESSAGES:
            return {
                ...state,
                channelMessages: action.channelMessages
            }

        case ACTIONS.SET_CURRENT_USER_CHAT_ID:
            return {
                ...state,
                currentUserChatId: action.currentUserChatId
            }

        case ACTIONS.SET_CURRENT_USER_EMAIL:
            return {
                ...state,
                currentUserEmail: action.currentUserEmail
            }

        default:
            return state
    }
}

export default reducer