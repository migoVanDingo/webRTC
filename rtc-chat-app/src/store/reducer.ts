import ACTIONS from "./actions";

const initState = {
  identity: '',
  isRoomHost: false,
  connectOnlyWithAudio: false,
  roomId: null,
  showOverlay: true,
  participants: [],
};

const reducer = (state:any = initState, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_IS_ROOM_HOST:
      return {
        ...state,
        isRoomHost: action.isRoomHost,
      };
    case ACTIONS.SET_CONNECT_ONLY_WITH_AUDIO:
      return {
        ...state,
        connectOnlyWithAudio: action.onlyWithAudio,
      };
    case ACTIONS.SET_ROOM_ID:
      return {
        ...state,
        roomId: action.roomId,
      };
    case ACTIONS.SET_IDENTITY:
      console.log('identity: ', action.identity)
      return {
        ...state,
        identity: action.identity,
      };
    case ACTIONS.SET_SHOW_OVERLAY:
      return {
        ...state,
        showOverlay: action.showOverlay,
      };
    case ACTIONS.SET_PARTICIPANTS:
      return {
        ...state,
        participants: action.participants,
      };
    default:
      return state;
  }
};

export default reducer;
