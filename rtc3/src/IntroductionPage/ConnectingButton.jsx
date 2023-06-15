import React from 'react'
import styled from 'styled-components'

const SButton = styled.button`
    height: 40px;
    width: 200px;
    border-radius: 10px;
    font-weight: 600;

    background-color: #19e37e;
    color: white;
    border:none;

    &.create_room_button{
        background-color: transparent;
        border: 1px solid #515151;
        color: #424242;
    }
`

export default function ConnectingButton({
    createRoomButton = false,
    buttonText,
    onClickHandler
}) {

    const buttonClass = createRoomButton ? 'create_room_button' : 'join_room_button'
    

  return (
    <SButton className={buttonClass} onClick={onClickHandler}>{buttonText}</SButton>
  )
}
