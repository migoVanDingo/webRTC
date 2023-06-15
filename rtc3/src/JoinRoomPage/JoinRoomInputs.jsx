import React, { useState } from "react";
import styled from "styled-components";
import { SFlexCol } from "../app/components/styled/common";
import AudioCheckbox from "./AudioCheckbox";
import { setConnectOnlyWithAudio, setUserId, setRoomId, setUsername } from "../app/actions";
import { connect } from "react-redux";
import JoinRoomButtons from "./JoinRoomButtons";
import { useNavigate } from "react-router";
import ErrorMessage from "./ErrorMessage";
import { getRoom } from "../utils/api/roomApi";

const JoinRoomInputs = ({
  isRoomHost,
  setConnectOnlyWithAudio,
  connectOnlyWithAudio,
  setRoomIdAction,  
  setUserIdAction,
  setUsernameAction
}) => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRoomIdChange = (e) => {
    setRoomId(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const createRoom = () => {
    console.log("create room");
    navigate("/room");
  };

  const joinRoom = async () => {
    try {
      const response = await getRoom(roomId);
      const { roomExists, full } = response.data;
      console.log("joinRoom -- Room Exists: ", roomExists)
      if (roomExists) {
        if (full) {
          setErrorMessage("Room is full. Cannot join.");
        } else {

          console.log("joinRoom -- RoomID: ", roomId)
          setRoomIdAction(roomId)

          navigate("/room");
        }
      }
    } catch (err) {
      console.log("room does not exist")
      setErrorMessage(err.response.data.errorMessage);
    }
  };

  const handleJoin = async () => {
    if (isRoomHost) {
      if (name !== "") {
        setUsernameAction(name)
        createRoom();
      } else {
        setErrorMessage("Name cannot be blank");
      }
    } else {
      if (roomId !== "") {
        if (name !== "") {
          setUsernameAction(name)
          await joinRoom();
        } else {
          setErrorMessage("Name cannot be blank");
        }
      } else {
        setErrorMessage("Room ID cannot be blank");
      }
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <SInputContainer>
      {!isRoomHost && (
        <SInput
          value={roomId}
          onChange={(e) => handleRoomIdChange(e)}
          placeholder={"Enter meeting ID"}
        />
      )}
      <SInput
        value={name}
        onChange={handleNameChange}
        placeholder={"Enter Name"}
      />
      <AudioCheckbox
        setConnectOnlyWithAudio={setConnectOnlyWithAudio}
        connectOnlyWithAudio={connectOnlyWithAudio}
      />
      <JoinRoomButtons handleJoin={handleJoin} handleCancel={handleCancel} />
      {errorMessage !== "" ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : null}
    </SInputContainer>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setConnectOnlyWithAudio: (onlyWithAudio) =>
      dispatch(setConnectOnlyWithAudio(onlyWithAudio)),
    
    setUserIdAction: (userId) => dispatch(setUserId(userId)),

    setRoomIdAction: (roomId) => dispatch(setRoomId(roomId)),

    setUsernameAction: (username) => dispatch(setUsername(username))
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(JoinRoomInputs);

const SInputContainer = styled(SFlexCol)`
  gap: 5px;
  margin-top: 20px;
`;

const SInput = styled.input`
  width: 100%;
  height: 25px;
  border: 1px solid #dedede;
  color: #454545;
  border-radius: 4px;
  padding: 6px;
`;
