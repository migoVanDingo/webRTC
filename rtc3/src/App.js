import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JoinRoomPage from "./JoinRoomPage/JoinRoomPage";
import RoomPage from "./RoomPage/RoomPage";
import IntroductionPage from "./IntroductionPage/IntroductionPage";
import styled from "styled-components";
import * as wss from "./utils/WebRTCHandler/wss";

const SBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
 
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  //overflow-x: hidden;
  overflow-y: scroll;
  


`;

function App() {

  useEffect(() => {
    wss.connectWithSocketServer()
  }, [])

  return (
    <Router>
      <SBody>
        <Routes>
          <Route path="/join-room" element={<JoinRoomPage />} />

          <Route path="/room" element={<RoomPage />} />

          <Route path="/" element={<IntroductionPage />} />
        </Routes>
      </SBody>
    </Router>
  );
}

export default App;
