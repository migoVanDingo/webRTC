import React from 'react'
import styled from 'styled-components'

const RoomLabel = ({ roomId }) => {
  return (
    <SLabelContainer>
        <SRoomLabel>Room ID: {roomId}</SRoomLabel>
    </SLabelContainer>
  )
}

export default RoomLabel

const SLabelContainer = styled.div`
  
    width: 450px;
    height: 30px;
    padding: 0;
    margin: 0;
    text-align: center;
    
`

const SRoomLabel = styled.p`
   padding: 10px 0px;
   margin: 0;
   border-top: none;
   border-radius: 0 0 6px 6px;
   background-color: #14d173;
   color: #ebebeb;
   font-weight: 600;
   font-size: 0.9rem;
   
`