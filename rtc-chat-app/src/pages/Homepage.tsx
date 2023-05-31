import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from "react-router"
import JoinMeeting from '../components/meeting/JoinMeeting'
import JoinOrHost from '../components/meeting/JoinOrHost'
import { connect, useDispatch, useSelector } from 'react-redux';
import { setIdentity } from '../store/actions'
import store from '../store/store'
import { ACTIONS } from '../store/actions'


const SBody = styled.div`
    width: 100%;
    height: 100vh;

    background-color: #1f1f1f;
`


const Homepage = () => {

    /* const identity = useSelector((state: any) => state.reducer.identity)
    const roomId = useSelector((state: any) => state.reducer.roomId) */
    const state = useSelector((state: any) => state)
/* 
    console.log("home -- Identity: ", identity)*/
    console.log("home -- State: ", state) 

    const [meetingType, setMeetingType] = useState<string>('')
    const [content, setContent] = useState<any>('')

    useEffect(() => {
        const createContent = () => {
            switch (meetingType) {

                case "JOIN":
                    return (
                        <JoinMeeting />
                    )

                case "CREATE":
                    return (
                        <div>ayyy</div>
                    )

                default:
                    return (
                        <JoinOrHost setMeetingType={setMeetingType} />
                    )
            }
        }

        setContent(createContent())
    }, [meetingType])

    return (
        <SBody>
            {content}
        </SBody>
    )
}


export default Homepage
