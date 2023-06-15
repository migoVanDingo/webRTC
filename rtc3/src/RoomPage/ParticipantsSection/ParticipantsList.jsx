import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SFlexCol, SFlexRow } from '../../app/components/styled/common'
import { connect } from 'react-redux'


//Exported Component
const ParticipantsList = ({ participants }) => {

    const colors = ["red", "blue", "gold", "green"]

    /* useEffect(() => {
        console.table("participants: ", participants)
    }, [participants]) */

  return (
    <SParticipantsList>
        {
            participants.map((p, index) => {
                return(
                    <Participant key={index} username={p.username} dot={colors[index]} userId={p.userId} />
                )
            })
        }
    </SParticipantsList>
  )
}




//Sub-component
const Participant = ({ username, lastItem, participant, dot, userId }) => {

    const [participantId, setParticipantId] = useState()

    useEffect(() => {
        const init = () => {
            if(userId !== null && userId !== ""){
                setParticipantId(userId)
            }
        }

        init()

    },[])

    const handleClickParticipant = () => {
        console.log(participantId)
    }

    return(
        <SParticipant onClick={handleClickParticipant}>
            <SDot className={dot} />
            <SUsername >{username}</SUsername>
        </SParticipant>
    )
}

const mapStoreStateToProps = (state) => {
    return {
        ...state
    }
}



export default connect(mapStoreStateToProps)(ParticipantsList)



//Styling
const SParticipantsList = styled(SFlexCol)`
    
`

const SParticipant = styled(SFlexRow)`
    border-bottom: 1px solid #e7e7e7;
    width: 100%;
    justify-content: start;
    &:hover{
        background-color: #f5f5f5;
    }
`

const SDot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 8px;
    margin: 20px;
    
    &.red{
        background-color: red;
    }
    &.blue{
        background-color: blue;
    }
    &.gold{
        background-color: gold;
    }
    &.green{
        background-color: green;
    }


`

const SUsername = styled.p`
    font-weight: 300;
`