import React, { useState } from 'react'
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { SIcon, SIconContainer } from "../../app/components/styled/icons";

const ScreenSharingButton = () => {
    const [isScreenShareActive, setScreenShareActive] = useState(false)

    const toggleScreenShare = () => {
        setScreenShareActive(!isScreenShareActive)
    }

  return (
    <SIconContainer onClick={toggleScreenShare} className={isScreenShareActive ? "active" : ""}>
      <SIcon icon={faDisplay} />
    </SIconContainer>
  )
}

export default ScreenSharingButton