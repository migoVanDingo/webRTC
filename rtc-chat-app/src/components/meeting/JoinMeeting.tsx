import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from "react-router"
import { SFlexCol } from '../styled/container.styled'
import { setIsRoomHost } from '../../store/actions'

const SBody = styled.div`
    width: 100%;
    height: 100vh;

    background-color: #1f1f1f;
`

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

const SInput = styled.input`
    width: 60%;
    height: 45px;
    border-radius: 6px;
    padding: 0 5px;
    font-size: 1.2rem;
`
const SFormHeading = styled.h2`
     color: #00ffa6;
    margin-bottom:50px;
`

const SJoinButton = styled.button`
    width: 60%;
 
    color: #3c3c3c;

    height: 45px;
    
    border-radius: 6px;
    
    background-color: #00e394;
  
    transition: all 0.3s ease;

    &:hover{
        background-color: #00ffa6;
        border-radius: 0px;
    }
`


function JoinMeeting({ setIsRoomHostAction }: any) {
    const navigate = useNavigate()
    const { currentUser } = useAuth()
    const meetingRef = useRef() as React.MutableRefObject<HTMLInputElement>

    useEffect(() => {
        setIsRoomHostAction(true)
    },[])


    const handleJoin = () => {
        const props = {
            meetingId: meetingRef.current.value
        }

        navigate('/Chatroom', { state: props })

    }




    return (
    
            <SJoinForm>
                <SFormHeading >Enter MeetingID</SFormHeading>
                <SInput ref={meetingRef} />
                <SJoinButton onClick={handleJoin}>Join</SJoinButton>
            </SJoinForm>

    )
}


export default JoinMeeting