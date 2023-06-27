import React, { useState } from "react";
import styled from "styled-components";
import { SFlexRow } from "../../app/components/styled/common";
import * as WebRTCHandler from "../../utils/WebRTCHandler/webRtcHandler"

const NewMessageInput = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value)
  };

  const handleEnterSend = (event) => {
    if(event.key === "Enter"){
        event.preventDefault()
        sendMessage()
        
    }
  };



  const sendMessage = () => {
    if(message.length > 0){
        console.log('Sending message to others')
        console.log(message)
        WebRTCHandler.sendMessageUsingDataChannel(message)
        setMessage('')

    }
    
  }

  return (
    <SContainer>
      <SModuleContainer>
        <STextInput
          type="text"
          onChange={handleChange}
          onKeyDown={handleEnterSend}
          value={message}
          placeholder={"Send a Message"}
        />
        <SButton onClick={sendMessage}>Send</SButton>
      </SModuleContainer>
    </SContainer>
  );
};

export default NewMessageInput;

const SContainer = styled.div`
  box-sizing: content-box;

  width: 500px;

  font-size: 1.2rem;
  font-weight: 200;
  border: 1px solid #e7e7e7;
  padding: 20px 0 20px;
  border-right: none;
  border-left: none;

  color: #606060;
  position: absolute;
  bottom: 0;
`;

const STextInput = styled.input`
  height: 35px;
  width: 80%;
  border-radius: 4px;
  border: 1px solid #e7e7e7;
  padding: 0px 10px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const SModuleContainer = styled(SFlexRow)``;

const SButton = styled.button`
  height: 37px;
  width: 45px;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: 1px solid #e7e7e7;
  border-left: none;
  color: #8b8b8b;
`;
