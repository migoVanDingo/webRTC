export const ACTIONS = {
    SET_IS_ROOM_HOST: "SET_IS_ROOM_HOST",
    SET_CONNECT_ONLY_WITH_AUDIO: "SET_CONNECT_ONLY_WITH_AUDIO",
    SET_USER_ID: "SET_USER_ID",
    SET_ROOM_ID: "SET_ROOM_ID",
    SET_USERNAME: "SET_USERNAME",
    SET_LOADING: "SET_LOADING",
    SET_PARTICIPANTS: "SET_PARTICIPANTS",
    SET_MESSAGES: "SET_MESSAGES",

    SET_CURRENT_CHAT_CHANNEL_NAME: "SET_CURRENT_CHAT_CHANNEL_NAME",
    SET_CURRENT_CHAT_CHANNEL_ID: "SET_CURRENT_CHAT_CHANNEL_ID",
    SET_CHANNEL_MEMBERS: "SET_CHANNEL_MEMBERS",
    SET_CHANNEL_MESSAGES: "SET_CHANNEL_MESSAGES",
    SET_CURRENT_USER_CHAT_ID: "SET_CURRENT_USER_CHAT_ID",
    SET_CURRENT_USER_EMAIL:"SET_CURRENT_USER_EMAIL"
}


export const setCurrentChatChannelName = (channelName) => {
    return {
        type: ACTIONS.SET_CURRENT_CHAT_CHANNEL_NAME,
        channelName

    }
}

export const setCurrentChatChannelId = (channelId) => {
    return {
        type: ACTIONS.SET_CURRENT_CHAT_CHANNEL_ID,
        channelId

    }
}



export const setIsRoomHost = (isRoomHost) => {
    return {
        type: ACTIONS.SET_IS_ROOM_HOST,
        isRoomHost
    }
}

export const setConnectOnlyWithAudio = (onlyWithAudio) => {
    return {
        type: ACTIONS.SET_CONNECT_ONLY_WITH_AUDIO,
        onlyWithAudio
    }
}

export const setUserId = (userId) => {
    return {
        type: ACTIONS.SET_USER_ID,
        userId
    }
}

export const setRoomId = (roomId) => {
    return {
        type: ACTIONS.SET_ROOM_ID,
        roomId
    }
}

export const setUsername = (username) => {
    return {
        type: ACTIONS.SET_USERNAME,
        username
    }
}

export const setLoading = (isLoading) => {
    return {
        type: ACTIONS.SET_LOADING,
        isLoading
    }
}

export const setParticipants = (participants) => {
    return {
        type: ACTIONS.SET_PARTICIPANTS,
        participants
    }
}

export const setMessages = (messages) => {
    return {
        type: ACTIONS.SET_MESSAGES,
        messages
    }
}

export const setChannelMembers = (channelMembers) => {
    return {
        type: ACTIONS.SET_CHANNEL_MEMBERS,
        channelMembers
    }
}

export const setChannelMessages = (channelMessages) => {
    return {
        type: ACTIONS.SET_CHANNEL_MESSAGES,
        channelMessages
    }
}

export const setCurrentUserChatId = (currentUserChatId) => {
    return {
        type: ACTIONS.SET_CURRENT_USER_CHAT_ID,
        currentUserChatId
    }
}

export const setCurrentUserEmail = (currentUserEmail) => {
    return {
        type: ACTIONS.SET_CURRENT_USER_EMAIL,
        currentUserEmail
    }
}

