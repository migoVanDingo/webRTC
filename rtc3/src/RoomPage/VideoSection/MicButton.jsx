import React, { useState } from 'react'
import styled from 'styled-components'
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { SIcon, SIconContainer } from '../../app/components/styled/icons';

const MicButton = () => {

    const [isMuted, setMuted] = useState(false)

    const toggleMute = () => {
        setMuted(!isMuted)
    }

    return (
        <SIconContainer onClick={toggleMute} className={isMuted ? "inactive" : ""}>
            <SIcon icon={faMicrophone}/>
        </SIconContainer>
      )
}

export default MicButton
