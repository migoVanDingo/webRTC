import axios from 'axios'

const URL = 'http://localhost:8888/room'

export const getRoom = async (roomId) => {
    const endpoint = `${URL}/${roomId}`
    console.log(endpoint)
    const response = await axios.get(endpoint)
    return response
    
    
    
}