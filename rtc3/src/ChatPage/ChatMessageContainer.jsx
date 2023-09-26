import React from "react";
import styled from "styled-components";
import { SFlexCol } from "../app/components/styled/common";
import { connect } from "react-redux";



const Message = ({ author, content, sameAuthor, messageCreatedByMe }) => {
  
  const alignClass = messageCreatedByMe ? 'align_right' : 'align_left'

  const authorText = messageCreatedByMe === true ? 'Me' : author
  const contentAdditionalStyled = messageCreatedByMe ? "message_right" : "message_left"

  return (
    <SMessageBox className={alignClass}>
      { !sameAuthor && <SNameLabel className={messageCreatedByMe ? "self" : ""}>{authorText}</SNameLabel> }
      <SMessageContent className={alignClass}>{content}</SMessageContent>
    </SMessageBox>
  )
}

const ChatMessageContainer = ({ channelMessages, currentUserChatId }) => {
  
  return (
    <SContainer>
      {channelMessages.map((message, index) => {

        const sameAuthor = index > 0 && message.sender_display_name === channelMessages[index - 1].sender_display_name;

        const messageCreatedByMe = message.send_member_id === currentUserChatId

        return(<Message
          key={index}
          author={message.sender_display_name}
          content={message.message}
          sameAuthor={sameAuthor}
          messageCreatedByMe={messageCreatedByMe}
        />);
      })}
    </SContainer>
  );
};

const mapStoreStateToProps =(state) => {
  return{
    ...state
  }
}

export default connect(mapStoreStateToProps)(ChatMessageContainer);

const SContainer = styled.div`

  display: flex;
  flex-direction: column;


 
  padding: 10px;
  padding-right: 30px;
  gap: 10px;
`;

const SMessageBox = styled.div`
  background-color: #f8f8f8;

  width: 250px;
  min-height: 40px;
  padding: 10px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;


  align-items: left;

  &.align_right {
    align-self: end;
    background-color: blue;
    color: white;
  }

`

const SNameLabel = styled.p`
  margin:0;
  padding: 0;
  font-weight: 300;
  font-size: 0.9rem;
  color: #a6a6a6;

  &.self{
    color:white;
  }
`

const SMessageContent = styled.p`
  margin:0;
  padding: 0;
`


