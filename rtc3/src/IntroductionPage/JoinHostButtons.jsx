import React from 'react'
import styled from 'styled-components'
import ConnectingButton from './ConnectingButton'
import { useNavigate } from 'react-router'

const SFlexCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${props => props.gap};
    
`

const SButtonContainer = styled(SFlexCol)`
    margin-top: 30px;
`

export default function JoinHostButtons() {

    const navigate = useNavigate()

    const pushToJoinRoom = () => {
        navigate('/join-room')
    }

    const pushToHostRoom = () => {
        navigate('/join-room?host=true')
    }

  return (
    <SButtonContainer gap="5px">
        <ConnectingButton buttonText="Join a Meeting" onClickHandler={pushToJoinRoom}/>
        <ConnectingButton  buttonText="Host a Meeting" createRoomButton={true} onClickHandler={pushToHostRoom}/>
    </SButtonContainer>
  )
}
