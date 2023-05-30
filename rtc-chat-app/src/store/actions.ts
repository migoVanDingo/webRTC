const ACTIONS = {
    SET_IS_ROOM_HOST: "SET_IS_ROOM_HOST",

}

export const setIsRoomHost = (isRoomHost: any) => {
    return {
        type: ACTIONS.SET_IS_ROOM_HOST,
        isRoomHost

    }
}

export default ACTIONS