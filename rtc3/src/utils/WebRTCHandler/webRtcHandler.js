import { store } from "../../app/store";
import { setLoading, setMessages } from "../../app/actions";
import * as wss from "./wss";
import Peer from "simple-peer";

const defaultConstraints = {
  audio: false,
  video: true,
};

let localStream = null;

export const getLocalPreviewAndInitConnection = (
  isRoomHost,
  username,
  userId,
  roomId = null
) => {
  navigator.mediaDevices.getUserMedia(defaultConstraints).then((stream) => {
      if (localStream === null) {
        console.log("Successfully recieved local stream");
        localStream = stream;
        showLocalVideoPreview(localStream);

        //Stop loading spinner on VideoSection Component
        store.dispatch(setLoading(false));

        isRoomHost
          ? wss.createNewRoom("abcd", username)
          : wss.joinRoom("defg", username, roomId);
      }
    })
    .catch((err) =>
      console.log(
        "Error occurred trying to access local stream -- webRTCHandler: ",
        err
      )
    );
};

let peers = {};
let streams = [];

const getConfiguration = () => {
  return {
    iceServers: [
      {
        urls: "stun:stun.l.google.com:19302",
      },
    ],
  };
};

const messengerChannel = "messenger";

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
  const configuration = getConfiguration();

  console.log("prepareNewPeerConnection");

  peers[connUserSocketId] = new Peer({
    initiator: isInitiator,
    config: configuration,
    stream: localStream,
    channelName: messengerChannel,
  });

  console.log("Peer: ",peers[connUserSocketId])

  peers[connUserSocketId].on("signal", (data) => {
    const signalData = {
      signal: data,
      connUserSocketId,
    };

    wss.signalPeerData(signalData);
  });

  peers[connUserSocketId].on("stream", (stream) => {
    console.log("new stream came");

    addStream(stream, connUserSocketId);
    streams = [...streams, stream];
  });

  try {
    peers[connUserSocketId].on("data", (data) => {
      const messageData = JSON.parse(data);
      appendNewMessage(messageData);
    });
  } catch (err) {
    console.log(err);
  }
};

export const handleSignalData = (data) => {
  peers[data.connUserSocketId].signal(data.signal);
};

export const removePeerConnection = (data) => {
  const { socketId } = data;
  const videoContainer = document.getElementById(socketId);

  if (videoContainer) {
    const tracks = videoContainer.srcObject.getTracks();

    tracks.forEach((t) => t.stop());
  }

  videoContainer.srcObject = null;
  videoContainer.parentNode.removeChild(videoContainer);

  if (peers[socketId]) {
    peers[socketId].destroy();
  }
  delete peers[socketId];
};

// UI
const showLocalVideoPreview = (stream) => {
  const videosContainer = document.getElementById("videos_portal");
  //videosContainer.classList.add('')

  const videoElement = createVideoElement(stream);

  videosContainer.appendChild(videoElement);
};

const addStream = (stream, connUserSocketId) => {
  console.log("add stream");
  //display incoming stream
  const videosContainer = document.getElementById("videos_portal");
  const videoElement = createVideoElement(stream);
  videoElement.id = connUserSocketId;
  videoElement.muted = false;

  videosContainer.appendChild(videoElement);
};

const createVideoElement = (stream) => {
  const videoElement = document.createElement("video");

  videoElement.style.width = "400px";
  videoElement.style.height = "400px";

  videoElement.autoplay = true;
  videoElement.muted = true;
  videoElement.srcObject = stream;

  console.log(stream);

  videoElement.onloadedmetadata = () => {
    videoElement.play();
  };

  return videoElement;
};

const appendNewMessage = (messageData) => {
  const messages = store.getState().messages;
  store.dispatch(setMessages([...messages, messageData]));
};

export const sendMessageUsingDataChannel = (messageContent) => {
  const username = store.getState().username;
  const localMessageData = {
    content: messageContent,
    username,
    messageCreatedByMe: true,
  };

  appendNewMessage(localMessageData);

  const messageData = {
    content: messageContent,
    username,
  };

  const messageDataStr = JSON.stringify(messageData);
  for (let socketId in peers) {
    peers[socketId].send(messageDataStr);
  }
};
