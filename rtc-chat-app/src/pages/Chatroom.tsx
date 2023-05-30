import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom';
import { SFlexCol } from '../components/styled/container.styled'

const SPageContainer = styled(SFlexCol)`
  background-color: #1f1f1f;  
`

const SContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #232323;
`

const SVideoContainer = styled.div`
  width: 1280px;
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

export default function Chatroom() {
  const location = useLocation()
  console.log(location.state)

  const localVideoRef = useRef()


  useEffect(() => {

    const getMediaStream = async () => {


    }

    getMediaStream()

  }, [])

  return (
    <SPageContainer>
      <SContainer>
        <SVideoContainer>
          <SVideoContainer className="self-view">
            <SPlayer height="100%" width="100%" url={""} />
          </SVideoContainer>

          <SPlayer height="100%" width="100%" url={""} />
        </SVideoContainer>
      </SContainer>
    </SPageContainer>

  )
}
