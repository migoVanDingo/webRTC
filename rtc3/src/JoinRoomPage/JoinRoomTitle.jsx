import React from 'react'
import styled from 'styled-components'

const STitle = styled.p`
    position: relative;
    font-size: 1.5rem;
    font-weight: 600;
`

const JoinRoomTitle = ({ isRoomHost }) => {

    const titleText = isRoomHost ? "Host Meeting" : "Join Meeting"


  return (
    <STitle>{titleText}</STitle>
  )
}

export default JoinRoomTitle
