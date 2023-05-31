import React, { useEffect } from 'react'
import styled from 'styled-components'
import { SFlexCol } from '../styled/container.styled'
import { createNewRoom } from '../../util/wss'
import { useSelector } from 'react-redux'


const SJoinForm = styled(SFlexCol)`
    //overwrite parent
    justify-content: flex-start;
    
    width: 500px;
    height: 350px;

    position: relative;
    margin: auto;
    padding: 50px;
    gap: 10px;

    border-radius: 14px;

    top: 100px;

    background-color: #353535;
    box-shadow: 6px 6px 18px #0e0e0e;

`

const SFormHeading = styled.h2`
    color: #00ffa6;
    margin-bottom:50px;
`

const SJoinButton = styled.button`
    width: 60%;
    height: 45px;
    
    border-radius: 6px;
    transition: all 0.3s ease;

    &.join-meeting{
        color: #3c3c3c;
        background-color: #00e394;
      

        &:hover{
            background-color: #00af72;
            color: #000000;
  
            
        }
    }

    &.create-meeting{
        color: #e5e5e5;
        background-color: transparent;
        border: 1px solid #e5e5e5;

        &:hover{
            color:#525252;
            background-color: #ffffff;
            
        }
    }

    
`

export default function JoinOrHost({ setMeetingType }: any) {

   /*  const identity = useSelector((state: any) => state.reducer.identity)
    const roomId = useSelector((state: any) => state.reducer.roomId) */


    const handleClick = (e: any) => {
        
        if (e.target.className.includes("join-meeting")) {
            setMeetingType('JOIN')
        } else {
            setMeetingType('CREATE')
        }

    }

    return (
        <SJoinForm>
            <SFormHeading >MigoChat</SFormHeading>
            <SJoinButton className={'join-meeting'} onClick={handleClick}>Join a Meeting</SJoinButton>
            <SJoinButton className={'create-meeting'} onClick={handleClick}>Host a Meeting</SJoinButton>
        </SJoinForm>
    )
}
