import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SFlexRow } from "../app/components/styled/common";
import { EndpointUrl } from "../utils/EndpointUrl";
import { connect } from "react-redux";
//import * as WebRTCHandler from "../../utils/WebRTCHandler/webRtcHandler"

const ChatInputWindow = (props) => {

  const { channelId } = props

  const [message, setMessage] = useState("");
  const [channelMessages, setChannelMessages] = useState([])

/*   useEffect(() => {

    if(channelMessages === undefined || channelMessages === null || channelMessages.length === 0){
      return () => {
        getChannelMessages()
      }
    }
  
    
  }, [channelId]) */
  

  const handleChange = (event) => {
    setMessage(event.target.value)
  };

  const handleEnterSend = (event) => {
    if(event.key === "Enter"){
        event.preventDefault()
        sendMessage()
        
    }
  };


 /*  const getChannelMessages = () => {

    EndpointUrl.getChannelMessages("4CHusvx9RAWL1oyhSoY8nw", channelId)
    .then(result => {
      console.log("ChatInputWindow.jsx -- getChannelMessages(): ", result)
      
    })
    .catch(err => console.error("getChannelMessage() error: ", err))
  } */


  const sendMessage = () => {
    if(message.length > 0){
        console.log('Sending message to others')

        const payload = {
          userId:"4CHusvx9RAWL1oyhSoY8nw", 
          channelId:channelId,
          message: message
        }

        EndpointUrl.sendChatMessage(payload)
        .then(result =>{
          console.log("sendMessage Result: ", result.data)

        })
        .catch(err => console.error("sendMessage Error: ", err))


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


const mapStoreStateToProps =(state) => {
  return{
    ...state
  }
}


export default connect(mapStoreStateToProps)(ChatInputWindow);

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
