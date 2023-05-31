export const ACTIONS = {
    SET_IS_ROOM_HOST: "SET_IS_ROOM_HOST",
    SET_CONNECT_ONLY_WITH_AUDIO: "SET_CONNECT_ONLY_WITH_AUDIO",
    SET_IDENTITY: "SET_IDENTITY",
    SET_ROOM_ID: "SET_ROOM_ID",
    SET_SHOW_OVERLAY: "SET_SHOW_OVERLAY",
    SET_PARTICIPANTS: "SET_PARTICIPANTS",
  };
  
  export const setIsRoomHost = (isRoomHost: any) => {
    return {
      type: ACTIONS.SET_IS_ROOM_HOST,
      isRoomHost,
    };
  };
  
  export const setConnectOnlyWithAudio = (onlyWithAudio: any) => {
    return {
      type: ACTIONS.SET_CONNECT_ONLY_WITH_AUDIO,
      onlyWithAudio,
    };
  };
  
  export const setIdentity = (identity: any) => {
    return {
      type: ACTIONS.SET_IDENTITY,
      identity,
    };
  };
  
  export const setRoomId = (roomId: any) => {
    return {
      type: ACTIONS.SET_ROOM_ID,
      roomId,
    };
  };
  
  export const setShowOverlay = (showOverlay: any) => {
    return {
      type: ACTIONS.SET_SHOW_OVERLAY,
      showOverlay,
    };
  };
  
  export const setParticipants = (participants: any) => {
    return {
      type: ACTIONS.SET_PARTICIPANTS,
      participants,
    };
  };
  export default ACTIONS;
  