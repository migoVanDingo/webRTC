const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    PORT: process.env.PORT,
    APP_KEY: process.env.APP_KEY
   
}