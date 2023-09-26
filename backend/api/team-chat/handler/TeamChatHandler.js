const server = require('../../../server')
const axios = require('axios')
const config = require('../../../config')

const test = (req, res) => {
    res.send('yooooo')
}

const createZoomChannel = async (req, res) => {

    const { name } = req.body
    console.log("channel name: ", name)
    try {
        const userId = req.params['userId']


        const data = {
            channel_settings: {
                add_member_permissions: 1,
                new_members_can_see_previous_messages_files: true,
                posting_permissions: 1,
                mention_all_permissions: 1

            },
            members: [
                {
                    email: 'echo.test1.abq@gmail.com',
                },


            ]
            ,
            name: name,
            type: 4


        }

        const response = axios.post('https://api.zoom.us/v2/chat/users/' + userId + '/channels',
            data,
            {
                headers: {
                    Authorization: "Bearer " + config.APP_KEY
                }
            }
        )

        console.log('createChannel response: ', response.data)



        res.send(response.data)

    } catch (error) {
        res.status(404).send("This didn't work", error)
    }

}

const getUserChannels = async (req, res) => {
    const userId = req.params.userId
    try {
        const response = await axios.get('https://api.zoom.us/v2/chat/users/' + userId + '/channels', {
            headers: {
                Authorization: "Bearer " + config.APP_KEY
            }
        })
            .then(result => {

                res.status(200).send(result.data)
            })
            .catch(err => console.error(err))

    } catch (error) {
        console.error("This didn't work", error)
    }


}

const getChannel = async (req, res) => {

    return await axios.get('https://api.zoom.us/v2/chat/channels/' + channelId, {
        headers: {
            Authorization: "Bearer " + config.APP_KEY
        }
    })
}

const deleteChannel = async (req, res) => {
    try {
        const channelId = req.params.channelId
        console.log("deleteChannel(): " + channelId)

        const response = await axios.delete('https://api.zoom.us/v2/chat/channels/' + channelId, {
            headers: {
                Authorization: "Bearer " + config.APP_KEY
            }
        })

        res.status(200).send(response.data)
    } catch (error) {
        console.log("deleteChannel(): " + error)
        res.status(404).send("failed: " + error)
    }

}

const getChannelMemberList = async (req, res) => {
    try {
        const channelId = req.params.channelId
        const response = await axios.get('https://api.zoom.us/v2/chat/channels/' + channelId + '/members', {
            headers: {
                Authorization: "Bearer " + config.APP_KEY
            }
        })

        console.log("getChannelMemberList response: ", response.data)
        res.status(200).send(response.data)
    } catch (error) {
        console.error("getChannelMemberList Error: ", error)
        res.send(404).send('failed: ' + error)
    }

}


const sendChatMessage = async (req, res) => {
    try {

        const userId = req.params.userId

        const data = req.body

        const response = axios.post('https://api.zoom.us/v2/chat/users/' + userId + '/messages',
            data,
            {
                headers: {
                    Authorization: "Bearer " + config.APP_KEY
                }
            }
        )

        console.log('createChannel response: ', response.data)



        res.status(200).send(response.data)

    } catch (error) {
        console.error('sendChatMessage() Error: ', error)
        res.status(404).send('sendChatMessage() Error', error)
    }
}



const getChannelMessages = async (req, res) => {
    
    try {
        const userId = req.params.userId
        const channelId = req.query.to_channel
        const url = 'https://api.zoom.us/v2/chat/users/'+userId+'/messages?to_channel='+channelId
        console.log("getChannelMessages: ", url)
        const response = await axios.get(url,
            {
                headers: {
                    Authorization: "Bearer " + config.APP_KEY
                }
            }
        )


        console.log('channelMessages response: ', response.data)

        function sortByDateAsc(a, b) {
            return new Date(a.date_time) - new Date(b.date_time);
          }

        response.data.messages.sort(sortByDateAsc)

        



        res.status(200).send(response.data)
        
    } catch (error) {
        console.error('channelMessages() Error: ', error)
        res.status(404).send('channelMessages() Error', error)
    }
}




module.exports = {
    createZoomChannel,
    getChannel,
    getUserChannels,
    deleteChannel,
    getChannelMemberList,
    sendChatMessage,
    getChannelMessages,
    test,
}
