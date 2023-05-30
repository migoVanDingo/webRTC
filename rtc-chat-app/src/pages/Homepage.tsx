import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from "react-router"
import JoinMeeting from '../components/meeting/JoinMeeting'
import JoinOrHost from '../components/meeting/JoinOrHost'


const SBody = styled.div`
    width: 100%;
    height: 100vh;

    background-color: #1f1f1f;
`


export default function Homepage() {

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
