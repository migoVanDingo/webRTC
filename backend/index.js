const express = require('express')
const http = require('http')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')
const twilio = require('twilio')
const ENV = require('./config')

const app = express()

const PORT = ENV.PORT || 8888

//Middleware
app.use(cors())

//Start Server
const server = http.createServer(app)
const io = require('socket.io')(server, {
    cors:{
        origin: '*',
        methods: ['GET', 'POST']
    }
})

server.listen(PORT, () => {
    console.log("App listening on port: " + PORT)
})