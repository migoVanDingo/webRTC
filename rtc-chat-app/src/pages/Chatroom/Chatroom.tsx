import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import { SFlexCol } from "../../components/styled/container.styled";
import * as WebRTCHandler from "../../util/webRtcHandler";
import { useSelector } from "react-redux";
import { setIsRoomHost } from "../../store/actions";
import { doc } from "firebase/firestore";
import useUserMedia from "../../hooks/rtc/useUserMedia";

const SPageContainer = styled(SFlexCol)`
  background-color: #1f1f1f;
  display: grid;
  grid-template-columns: 300px auto 300px;
`;

const SParticipantContainer = styled(SFlexCol)`
  border: 1px solid red;
  width: 100%;
  height: calc(100vh - 60px);
`;

const SChatContainer = styled.div`
  border: 1px solid blue;
  width: 100%;
  height: calc(100vh - 60px);
`;

const SContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #232323;
`;

const SVideoContainer = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  margin: auto;

  &.self-view {
    height: 180px;
    width: 260px;
    position: absolute;

    top: 20px;
    left: 20px;

    border-radius: 12px;
    overflow: hidden;

    box-shadow: 4px 4px 12px #2e2e2e;
  }
`;

const SPlayer = styled.video`
  width: 100%;
  height: 100%;
`;

const Chatroom = () => {
  

  const videoRef = useRef<HTMLVideoElement>()


  const mediaStreamConstraints = {
    video: true,
    audio: true
  }

  const mediaStream = useUserMedia(mediaStreamConstraints)
  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  function handleCanPlay() {
    if(videoRef.current){
      videoRef.current.play();
    }
    
  }
 

  return (
    <SPageContainer>
      <SParticipantContainer />

      <SContainer>
        <SVideoContainer>
          {/* <SVideoContainer className="self-view">
            <SPlayer height="100%" width="100%" ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline />
          </SVideoContainer> */}

          <SPlayer ref={videoRef} onCanPlay={handleCanPlay}  />
        </SVideoContainer>
      </SContainer>

      <SChatContainer />
    </SPageContainer>
  );
};

export default Chatroom;
