require('dotenv').config({ quiet: true })
const jwt = require('jsonwebtoken')
const express = require('express')
const Auth = require('../middleware/Auth')
const country = require('../database/models/country')
const division = require('../database/models/division')

const SK = process.env.SECRET_KEY
const router = express.Router()



module.exports = router