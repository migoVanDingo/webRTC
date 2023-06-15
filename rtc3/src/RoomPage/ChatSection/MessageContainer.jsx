import React from "react";
import styled from "styled-components";
import { SFlexCol } from "../../app/components/styled/common";
import { connect } from "react-redux";



const Message = ({ author, content, sameAuthor, messageCreatedByMe }) => {
  
  const alignClass = messageCreatedByMe ? 'align_right' : 'align_left'

  const authorText = messageCreatedByMe === true ? 'Me' : author
  const contentAdditionalStyled = messageCreatedByMe ? "message_right" : "message_left"

  return (
    <SMessageBox className={alignClass}>
      { !sameAuthor && <SNameLabel>{authorText}</SNameLabel> }
      <SMessageContent className={alignClass}>{content}</SMessageContent>
    </SMessageBox>
  )
}

const MessageContainer = ({ messages }) => {
  
  return (
    <SContainer>
      {messages.map((message, index) => {

        const sameAuthor = index > 0 && message.username === messages[index - 1].username;

        return(<Message
          key={index}
          author={message.username}
          content={message.content}
          sameAuthor={sameAuthor}
          messageCreatedByMe={message.messageCreatedByMe}
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

export default connect(mapStoreStateToProps)(MessageContainer);

const SContainer = styled.div`

  display: flex;
  flex-direction: column;


 
  padding: 10px;
  padding-right: 30px;
  gap: 10px;
`;

const SMessageBox = styled.div`
  background-color: #dedede;

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
`

const SMessageContent = styled.p`
  margin:0;
  padding: 0;
`


