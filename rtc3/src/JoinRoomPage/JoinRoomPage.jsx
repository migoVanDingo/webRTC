import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { connect } from 'react-redux'
import { setIsRoomHost } from '../app/actions'
import styled from 'styled-components'
import JoinRoomTitle from './JoinRoomTitle'
import JoinRoomInputs from './JoinRoomInputs'
import AudioCheckbox from './AudioCheckbox'

const SJoinCard = styled.div`
    display: flex;
    flex-direction: column;

    width: 250px;
    height: 300px;

    color: #2c2c2c;
    box-shadow: 2px 2px 8px #626262;
    border-radius: 8px;

    margin-top: 100px;
    padding: 40px;

`

const JoinRoomPage = (props) => {

    const { setIsRoomHostAction, isRoomHost } = props
    const search = useLocation().search
    
    useEffect(() => {
        const isRoomHost = new URLSearchParams(search).get('host')
        if(isRoomHost){
            setIsRoomHostAction(isRoomHost)
        }
    },[])

  return (
    <SJoinCard>
        <JoinRoomTitle isRoomHost={isRoomHost}/>
        <JoinRoomInputs isRoomHost={isRoomHost}/>
        
    </SJoinCard>
  )
}

const mapStoreStateToProps = (state) => {
    return {
        ...state
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost))
    }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(JoinRoomPage)