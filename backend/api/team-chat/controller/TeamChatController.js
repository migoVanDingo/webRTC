const express = require('express')
const router = express.Router()
const TeamChatHandler = require('../handler/TeamChatHandler')

const routes = (app) => {
    //Create Channel
    router.post('/chat/users/:userId/channels', TeamChatHandler.createZoomChannel)

    //Get channel(s)
    router.get('/chat/channels/:channelId', TeamChatHandler.getChannel)
    router.get('/chat/users/:userId/channels',TeamChatHandler.getUserChannels)

    //Get channel member
    router.get('/chat/channels/:channelId/members', TeamChatHandler.getChannelMemberList)

    //Delete channel
    router.delete('/chat/channels/:channelId', TeamChatHandler.deleteChannel)

    //Send message
    router.post('/chat/users/:userId/messages', TeamChatHandler.sendChatMessage)

    //Get channel messages
    router.get('/chat/users/:userId/messages', TeamChatHandler.getChannelMessages)


    router.post('/test', TeamChatHandler.test)



    app.use(router)
}

module.exports = routes