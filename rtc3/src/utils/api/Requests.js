import axios from 'axios'

export class Requests {

    static async doPost(payload){
        const { url, data, headers } = payload

        return await axios.post(
        url,
        data,
        {
            headers: headers
        }
    )
    }

    static async doGet(url){
        return await axios.get(url)
    }

    static async doDelete(url){
        return await axios.delete(url)
    }
}