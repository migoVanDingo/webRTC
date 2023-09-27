import { Requests } from './api/Requests'

export class EndpointUrl {

    static async createChannel(payload){

        const { userId, emailList, name } = payload

        const emailObjectList = emailList && emailList.map((email) => {
            return {
                email
            }
        })

        //userId = "4CHusvx9RAWL1oyhSoY8nw"

        const data = {
            data: emailObjectList !== undefined && emailObjectList.length !== 0 ?  { email_object_list: emailObjectList, name } : { name },
            userId,
            url: 'http://localhost:8888/chat/users/' + userId + '/channels',
            headers: {
                "Content-type": "application/json"
            }
        }
        
        return await Requests.doPost(data)
    }

    static async getChannels(userId){
        const url = 'http://localhost:8888/chat/users/'+userId+'/channels'
        return await Requests.doGet(url)
    }

    static async deleteChannel(channelId){
        const url = 'http://localhost:8888/chat/channels/'+channelId
        return await Requests.doDelete(url)
    }

    static async listChannelMembers(channelId){
        const url = 'http://localhost:8888/chat/channels/'+channelId+'/members'
        return await Requests.doGet(url)
    }

    static async sendChatMessage(payload){
        const { userId, channelId, message } = payload
        const url = 'http://localhost:8888/chat/users/'+userId+'/messages'
        const data = {
            data: {
                to_channel: channelId,
                message
            },
            url: url,
            headers: {
                "Content-type": "application/json"
            }
        }
        
        return await Requests.doPost(data)
    }

    static async getChannelMessages(userId, channelId){
        
        const url = 'http://localhost:8888/chat/users/'+userId+'/messages?to_channel='+channelId

        if(channelId !== null){
            console.log("aqui: ", channelId)
            return await Requests.doGet(url)
        }
            
    }


}