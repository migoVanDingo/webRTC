import React from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { SIcon, SIconContainer } from "../../app/components/styled/icons";
import { useNavigate } from "react-router";

const LeaveRoomButton = () => {
    
    const navigate = useNavigate()

    const handleLeaveRoom = () => {
        navigate('/')
    }
  return (
    <SIconContainer onClick={handleLeaveRoom}>
      <SIcon icon={faX} />
    </SIconContainer>
  );
};

export default LeaveRoomButton;
