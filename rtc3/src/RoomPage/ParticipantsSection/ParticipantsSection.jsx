import React from 'react'
import styled from 'styled-components'
import Participants from './ParticipantsList'
import ParticipantsList from './ParticipantsList'

const ParticipantsSection = () => {
  return (
    <SParticipantsContainer>
      <SParticipantsLabel>Participants</SParticipantsLabel>
      <ParticipantsList />
    </SParticipantsContainer>
  )
}

export default ParticipantsSection

const SParticipantsContainer = styled.div`
  flex: 1;
  height: 100%;
  border: 1px solid #e7e7e7;
  border-left: none;
  
`

const SParticipantsLabel = styled.div`
  font-size: 1.2rem;
  font-weight: 200;
  border: 1px solid #e7e7e7;
  padding: 10px 25px;
  border-right: none;
  border-left: none;
  border-top: none;
  color: #606060;
  
`


