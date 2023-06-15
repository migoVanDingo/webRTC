import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChatSection from "./ChatSection/ChatSection";
import VideoSection from "./VideoSection/VideoSection";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import RoomLabel from "./RoomLabel";
import { SFlexRow } from "../app/components/styled/common";
import { connect } from "react-redux";
import * as WebRTCHandler from "../utils/WebRTCHandler/webRtcHandler";


const RoomPage = ({ roomId, userId, username, isRoomHost, isLoading }) => {

  useEffect(() => {
    WebRTCHandler.getLocalPreviewAndInitConnection(
      isRoomHost,
      username,
      userId,
      roomId
    );
  }, []);

  return (
    <SContainer>
      <ParticipantsSection />
      <VideoSection isLoading={isLoading}  roomId={roomId} />
      <ChatSection />
    </SContainer>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(RoomPage);

const SContainer = styled(SFlexRow)`
  width: 100vw;
  height: 100vh;
  position: relative;
`;


