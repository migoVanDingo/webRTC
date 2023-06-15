import React from 'react'
import RoomLabel from '../RoomLabel'
import styled from 'styled-components'
import { SFlexCol } from '../../app/components/styled/common'
import VideoButtons from './VideoButtons'
import VideoPlayer from './VideoPlayer'

const VideoSection = ({ roomId, isLoading }) => {
  return (
    <SContainer>
      <SRoomLabel roomId={roomId}/>
      <VideoPlayer isLoading={isLoading} />
      <VideoButtons />
    </SContainer>

  )
}

export default VideoSection

const SContainer = styled(SFlexCol)`

  flex:3;
  height: 100%;
`

const  SRoomLabel = styled(RoomLabel)`
  
  width: 100%;
  height: 50px;
`



