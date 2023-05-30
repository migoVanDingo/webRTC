import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom';
import { SFlexCol } from '../../components/styled/container.styled'
import * as WebRTCHandler from '../../util/webRtcHandler';
import { connect } from 'react-redux';

const SPageContainer = styled(SFlexCol)`
  background-color: #1f1f1f;  
  display: grid;
  grid-template-columns: 300px auto 300px;
`

const SParticipantContainer = styled(SFlexCol)`
  border: 1px solid red;
  width: 100%;
  height: calc(100vh - 60px);
`

const SChatContainer = styled.div`
  border: 1px solid blue;
  width: 100%;
  height: calc(100vh - 60px);
`

const SContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #232323;
`

const SVideoContainer = styled.div`
  width: 100%;
  height: 100%;


  position: relative;
  margin: auto;


  &.self-view{
    height: 180px;
    width: 260px;
    position: absolute;

    top: 20px;
    left: 20px;

    border-radius: 12px;
    overflow: hidden;

    box-shadow: 4px 4px 12px #2e2e2e;
  }
`

const SPlayer = styled(ReactPlayer)`
  width: 100%;
  height: 100%;

`

const Chatroom = ({ roomId }: any) => {
  const location = useLocation()
  console.log(location.state)

  const localVideoRef = useRef()


  console.log("roomId: " + roomId)
  useEffect(() => {

    const getMediaStream = async () => {
      WebRTCHandler.initRoomConnection(true, 'migo', '1234')

    }

    getMediaStream()

  }, [])

  return (
    <SPageContainer>


      <SParticipantContainer />

      <SContainer>
        <SVideoContainer>
          <SVideoContainer className="self-view">
            <SPlayer height="100%" width="100%" url={""} />
          </SVideoContainer>

          <SPlayer height="100%" width="100%" url={""} />
        </SVideoContainer>
      </SContainer>

      <SChatContainer/>
    </SPageContainer>

  )
}

const mapStoreStateToProps = (state: any) => {
  return {
    ...state
  }
}

export default connect(mapStoreStateToProps)(Chatroom)
