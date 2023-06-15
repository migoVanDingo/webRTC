import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SFlexRowWrap } from '../app/components/styled/common'


const SCheckboxContainer = styled(SFlexRowWrap)`
    gap: 5px;
    width: 100%;
    justify-content: flex-start;
`


const SCheckBox = styled.input.attrs({ type: 'checkbox' })`
    height: 15px;
    width: 15px;
   
    
`

const SLabel = styled.p`
    font-size: 0.8rem;
`

const AudioCheckbox = ({ connectOnlyWithAudio, setConnectOnlyWithAudio }) => {

  

    const handleChange = (e) => {
        
        setConnectOnlyWithAudio(!connectOnlyWithAudio)
        
    }

    useEffect(() => {
        console.log(connectOnlyWithAudio)
    }, [connectOnlyWithAudio])

  return (
    <SCheckboxContainer>
        <SCheckBox onChange={handleChange} value={connectOnlyWithAudio}/>
        <SLabel>Join with audio only</SLabel>
    </SCheckboxContainer>
  )
}

export default AudioCheckbox