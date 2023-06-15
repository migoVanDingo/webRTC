import React, { useState } from 'react'
import styled from 'styled-components'
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { SIconContainer, SIcon } from '../../app/components/styled/icons';

const CameraButton = () => {

    const [isCameraOff, setCameraOff] = useState(false)

    const toggleCamera = () => {
        setCameraOff(!isCameraOff)
    }

  return (
    <SIconContainer className={isCameraOff ? "inactive" : ""} onClick={toggleCamera}>
        <SIcon icon={faCamera}/>
    </SIconContainer>
  )
}

export default CameraButton
