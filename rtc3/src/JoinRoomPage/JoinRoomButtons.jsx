import React from 'react'
import styled from 'styled-components'
import { SFlexRow } from '../app/components/styled/common'


const JoinRoomButtons = ({ handleJoin, handleCancel }) => {

  return (
    <SButtonContainer>
        <SJoinButton onClick={handleJoin} className={"submit"}>Join</SJoinButton>
        <SJoinButton onClick={handleCancel} className={"cancel"}>Cancel</SJoinButton>
    </SButtonContainer>
    
  )
}

export default JoinRoomButtons

const SJoinButton = styled.button`
    width: 55px;
    height: 30px;
    border-radius: 4px;
    align-self: baseline;
    margin-top: 10px;

    
    &.submit{
        border: none;
    color: white;
    background-color: #19e37e;
    }

    &.cancel{
        border: 1px solid #555555;
    color: #555555;
    background-color: transparent;

        &:active{
            color: #313131;
            background-color: #c2c2c2;
        }
    }
   
`

const SButtonContainer = styled(SFlexRow)`
    gap: 5px;
    align-self: baseline;
`