const express = require('express')
const router = express.Router()
const RoomHandler = require('../handler/roomHandler')

const routes = (app) => {
    router.get("/room/:roomId", RoomHandler.getRoomById)
    router.post("/room")

    app.use(router)
}

module.exports = routes