import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ChatMessageContainer from './ChatMessageContainer'
import ChatInputWindow from './ChatInputWindow'
import { EndpointUrl } from '../utils/EndpointUrl'
import ChannelSection from './ChannelSection'
import { connect, useDispatch } from 'react-redux'
import { setCurrentChatChannelId, setCurrentChatChannelName, setChannelMembers, setChannelMessages, setCurrentUserEmail, setCurrentUserChatId } from '../app/actions'


const emailList = ["mielujan@salud.unm.edu"]
const userEmail = "iechodev@gmail.com"

const ChatPage = (props) => {

  //const { channelId } = props
  const [cid, setCid] = useState('')
  const [channels, setChannels] = useState([])
  const [getMessageSwitch, setGetMessageSwitch] = useState(false)
  const [sendSignal, setSendSignal] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    
    if(getMessageSwitch === true){
      console.log("getChannelMessages")
      setInterval(() => getChannelMessages(cid), 500)
    }
      
  }, [getMessageSwitch])

  useEffect(() => {

    function getChannels(){
      return handleGetChannels()
    }

    
    return () => {
      console.log('ChatPage -- useEffect()')
      getChannels()
    }
      
  }, [cid])

  const getChannelMessages = (channelId) => {

    EndpointUrl.getChannelMessages("4CHusvx9RAWL1oyhSoY8nw", channelId)
    .then(result => {
      console.log("ChatInputWindow.jsx -- getChannelMessages(): ", result)
      dispatch(setChannelMessages(result.data.messages))
      
    })
    .catch(err => console.error("getChannelMessage() error: ", err))
  }


  const handleGetChannels = () => {

    EndpointUrl.getChannels("4CHusvx9RAWL1oyhSoY8nw")
      .then(result => {
        
        setChannels(result.data.channels)
        dispatch(setCurrentChatChannelId(result.data.channels[0].id))
        setCid(result.data.channels[0].id)
        dispatch(setCurrentChatChannelName(result.data.channels[0].name))
        console.log('cid: ', cid)
        getChannelMessages(result.data.channels[0].id)
        getChannelMembers(result.data.channels[0].id)

        setGetMessageSwitch(true)
        
      })
      .catch(err => console.error('dam: ', console.error(err)))
  }

  const handleDeleteChannel = (channelId) => {
    
    EndpointUrl.deleteChannel(channelId)
    .then(result => {
      console.log('ChatPage -- deleteChannel()', result.data)
      const newChannels = channels.filter((channel) =>  channel.id !== channelId)
      setChannels(newChannels)
    })
    .catch(err => console.error('dam: ', console.error(err)))
  }

  const handleCreateChannel = (channelName) => {
    EndpointUrl.createChannel({userId: "4CHusvx9RAWL1oyhSoY8nw", name: channelName})
    .then((result) => {
      console.log("ChatPage.jsx -- handleCreateChannel() result: ", result.data)
    })
    .catch(err=>console.error("createChannel(): ", err))
  }


  
   
   const getChannelMembers = (channelId) => {
    EndpointUrl.listChannelMembers(channelId)
    .then(result => {
        console.log("ChatPage.jsx -- getChannelMembers() result: ", result.data)
        dispatch(setChannelMembers(result.data.members))
        findCurrentUserChatId(result.data.members)
    })
    .catch(err => console.error(err))
   }

   const findCurrentUserChatId = (members) => {
    const chatUser = members.filter(member => member.email === userEmail)
    console.log("chatUser: ", chatUser[0]["member_id"])
    dispatch(setCurrentUserChatId(chatUser[0]["member_id"]))
    dispatch(setCurrentUserEmail(userEmail))
    
   }


  return (
    <SContainer>
      <SChatContainer className="channels-container">
        <SChatLabel>Channels</SChatLabel>
        <ChannelSection 
          currentChannelId={cid}
          channels={channels} 
          deleteChannel={handleDeleteChannel} 
          handleCreateChannel={handleCreateChannel}
          setChannelId={setCid}/>
      </SChatContainer>
      <SChatContainer>
        <SChatLabel>Chat</SChatLabel>
        <ChatMessageContainer signal={sendSignal} />
        <ChatInputWindow />

      </SChatContainer>

    </SContainer>
  )
}

const mapStoreStateToProps =(state) => {
  return{
    ...state
  }
}

export default connect(mapStoreStateToProps)(ChatPage)

const SContainer = styled.div`
  display: grid;
  grid-template-columns: [start] 300px [col2] 500px [end];
  height: 100%;
  grid-template-areas: 
  "channels chat";
`

const SChatContainer = styled.div`
  width: 500px;
  height: 100%;
  border: 1px solid #e7e7e7;
  grid-area: "chat";

  &.channels-container {
    width: 300px;
    grid-area: "channel";
    border-right: none;
    box-sizing: border-box;
  }
`

const SChatLabel = styled.div`
  
  border: 1px solid #e7e7e7;
  padding: 10px 25px;
  border-right: none;
  border-left: none;
  border-top: none;
  color: #9a9a9a;
  font-family: Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 100;
  
`