import React from 'react'
import styled from 'styled-components'
import { SFlexRow } from '../../app/components/styled/common'
import MicButton from './MicButton'
import CameraButton from './CameraButton'
import LeaveRoomButton from './LeaveRoomButton'
import ScreenSharingButton from './ScreenSharingButton'
const VideoButtons = () => {
  return (
    <SVideoButtonsContainer>
        <MicButton />
        <CameraButton />
        <LeaveRoomButton />
        <ScreenSharingButton />
    </SVideoButtonsContainer>
  )

}

export default VideoButtons

const SVideoButtonsContainer = styled(SFlexRow)`
    gap: 10px;
    padding: 20px;
`