import React from 'react'
import styled from 'styled-components'
import MessageContainer from './MessageContainer'
import NewMessageInput from './NewMessageInput'

const ChatSection = () => {
  return (
    <SChatContainer>
      <SChatLabel>Chat</SChatLabel>
      <MessageContainer />
      <NewMessageInput />
    </SChatContainer>
  )
}

export default ChatSection

const SChatContainer = styled.div`
  width: 500px;
  height: 100%;
  border: 1px solid #e7e7e7;
`

const SChatLabel = styled.div`
  font-size: 1.2rem;
  font-weight: 200;
  border: 1px solid #e7e7e7;
  padding: 10px 25px;
  border-right: none;
  border-left: none;
  border-top: none;
  color: #606060;
  
`