import ACTIONS from "./actions"

const initState = {
  id: "",
  isRoomHost: false,
  connectOnlyWithAudio: false,
  roomId: null,
  showOverlay: true
}

const reducer = (state = initState, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_IS_ROOM_HOST:
      return {
        ...state,
        isRoomHost: action.isRoomHost,
      }

    case ACTIONS.SET_CONNECT_ONLY_WITH_AUDIO:
      return {
        ...state,
        connectOnlyWithAudio: action.onlyWithAudio
      }

    case ACTIONS.SET_IDENTITY:
      return{
        ...state,
        identity: action.identity
      }

    case ACTIONS.SET_SHOW_OVERLAY:
      return{
        ...state,
        showOverlay: action.showOverlay
      }
    
    

    default:
      return state
  }
}

export default reducer
