import React, { useEffect } from 'react'
import styled from 'styled-components'
import ConnectingButton from './ConnectingButton'
import JoinHostButtons from './JoinHostButtons'
import { connect } from 'react-redux'
import { setIsRoomHost } from '../app/actions'
import { setConnectOnlyWithAudio } from "../app/actions";

const SIntro = styled.div`
    width: 600px;
    height: 400px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    box-shadow: 0px 0px 4px #3d3d3d;

    position: relative;
    margin: 100px auto 0px;

`
const SH1 = styled.h1`
    color: #3d3d3d;
    font-size: 3.5rem;

`

const SAccent = styled.span`
    color: #53f0a2;
`


const IntroductionPage = ({ setIsRoomHostAction, connectOnlyWithAudio, setConnectOnlyWithAudio }) => {

  useEffect(() => {
    setIsRoomHostAction(false)
    setConnectOnlyWithAudio(false)
  },[])

  return (
    <SIntro>
        <SH1><SAccent>Migo</SAccent>Chat</SH1>
        <JoinHostButtons />
    </SIntro>
  )
}

const mapStoreStateToProps = (state) => {
  return {
      ...state
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
    setConnectOnlyWithAudio: (onlyWithAudio) => dispatch(setConnectOnlyWithAudio(onlyWithAudio))
  }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(IntroductionPage)
