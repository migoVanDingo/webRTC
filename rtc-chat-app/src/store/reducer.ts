import ACTIONS from "./actions"

const initState = {
  id: "",
  isRoomHost: false,
}

const reducer = (state = initState, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_IS_ROOM_HOST:
      return {
        ...state,
        isRoomHost: action.isRoomHost,
      }

    default:
      return state
  }
}

export default reducer
