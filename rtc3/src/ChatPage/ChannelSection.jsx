import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { SFlexCol, SFlexRow } from '../app/components/styled/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faX, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from 'react-redux';
import { setCurrentChatChannelId, setCurrentChatChannelName } from '../app/actions';
import { EndpointUrl } from '../utils/EndpointUrl';


const SContainer = styled(SFlexCol)`
    display: flex;
    flex-direction: column;

    box-sizing: border-box;
`;

const SChannel = styled(SFlexRow)`
    width: 100%;
    justify-content: start;
    gap: 5px;
    padding: 5px;
    box-sizing: border-box;

    &:hover{
       background-color: #f7f7f7;
        cursor: pointer;
    }

    &.selected {
        background-color: #f1f1f1;
    }



`
const SChannelName = styled.p`
    color: #b4b4b4;
    font-weight: 400;
    font-size: 0.9rem;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
`

const SIcon = styled(FontAwesomeIcon)`
    font-size: 15px;
    color:#b4b4b4;

    &.input-button {
        border: 1px solid red;
        height: 25px;
        
        border: 1px solid #dbdbdb;
        border-left: none;

        box-sizing: border-box;
        padding: 2px;


    }

    &.padding{
        padding-left: 5px;
    }

    &.right {
        margin-left: auto;

        &:hover{
            color:#6f6f6f;
            font-size: 17px;
            font-weight: 600;
        }
    }
`
const SCreateChannelButton = styled.button`
    margin: 5px 5px 5px auto;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    font-weight: 300;
    color: #a1a1a1;

    &.submit{
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        height: 100%;
        border: 1px solid #dbdbdb;
        background-color: transparent;
        border-left: none;
    }

    &:hover{
        background-color: #dedede;
  
    }
  
`

const SNewChannelContainer = styled(SFlexCol)`
    width: 98%;
    align-items: baseline;
    padding: 5px 5px 10px 5px;
    box-sizing: border-box;
    color: #929292;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    margin: 2px;


`

const SInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 3px 5px;
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    height: 100%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

`

const SLabel = styled.label`
   font-size: 0.8rem;
 
`
const SInputContainer = styled(SFlexRow)`
    height: 30px;
    width: 100%;
    box-sizing: border-box;
`

const ChannelSection = ({ channels, deleteChannel, handleCreateChannel, setChannelId, currentChannelId }) => {

    const newChannelNameRef = useRef()
    const [isNewChannelInput, setNewChannelInput] = useState(false)

    const dispatch = useDispatch()

   const handleSelectChannel = (channel) => {
    console.log(channel.name + ': ' + channel.id)
    setChannelId(channel.id)
   
    dispatch(setCurrentChatChannelName(channel.name))
    dispatch(setCurrentChatChannelId(channel.id))
   }

   const handleDeleteChannel = (channelId) => {
    deleteChannel(channelId)
   }

   const handleCreateNewChannelInput = () => {
    setNewChannelInput(!isNewChannelInput)
   }

   const handleSubmitNewChannel = () => {
    handleCreateChannel(newChannelNameRef.current.value)
   }

    return (
        <SContainer>
            <SCreateChannelButton onClick={handleCreateNewChannelInput}>
                New Channel<SIcon  className={"padding"} icon={faPlus}/>
            </SCreateChannelButton>
            {
                isNewChannelInput && (
                    <SNewChannelContainer>
                        <SLabel>Channel Name</SLabel>
                        <SInputContainer>
                            <SInput ref={newChannelNameRef}/>
                            <SCreateChannelButton onClick={handleSubmitNewChannel} className={'submit'}>Create</SCreateChannelButton >
                        </SInputContainer>
                    </SNewChannelContainer>
                )
            }
            {
                channels && channels.length > 0 && channels.map((channel, index) => {
                    
                    return(
                        <SChannel className={channel.id === currentChannelId ? "selected" : ''} key={index} onClick={() => handleSelectChannel(channel)}>
                            <SIcon icon={faHashtag}/>
                            <SChannelName>{channel.name}</SChannelName>
                            <SIcon className={"right"} icon={faX} onClick={() => handleDeleteChannel(channel.id)}/>
                        </SChannel>
                    )
                })
            }
        </SContainer>
    )
}

export default ChannelSection