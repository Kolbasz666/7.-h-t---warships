require('dotenv').config({ quiet: true })
const express = require('express')
const router = require('./routes/router')
const user = require('./routes/user')
const cors = require('cors')

const PORT = process.env.PORT
const server = express()

server.use(cors())
server.use(express.json())
server.use(router)
server.use(user)

server.listen(PORT, () => console.log(`A szerver fut a következő porton: ${PORT}`))