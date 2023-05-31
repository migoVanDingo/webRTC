import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from "react-router"
import JoinMeeting from '../components/meeting/JoinMeeting'
import JoinOrHost from '../components/meeting/JoinOrHost'
import { connect } from 'react-redux';
import { setIdentity } from '../store/actions'
import { store } from '../store/store'


const SBody = styled.div`
    width: 100%;
    height: 100vh;

    background-color: #1f1f1f;
`


const Homepage = (props: any) => {

    const { setIdentityAction, identity } = props
    const [meetingType, setMeetingType] = useState<string>('')
    const [content, setContent] = useState<any>('')

    const { currentUser } = useAuth()

   console.log("ident: ",identity)

    useEffect(() => {
        setIdentityAction(currentUser.uid)
    },[])

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

const mapActionsToProps = (dispatch: any) => {
    return {
      setIdentityAction: (identity: any) => dispatch(setIdentity(identity)),
    };
  };

const mapStoreStateToProps = (state: any) => {
    console.log(state)
    return {
      roomId: state.reducer.roomId,
      identity: state.reducer.identity,
      isRoomHost: state.reducer.isRoomHost,
      showOverlay: state.reducer.showOverlay
    }
  }

export default connect(mapStoreStateToProps, mapActionsToProps)(Homepage)
