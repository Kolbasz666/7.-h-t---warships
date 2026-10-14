require('dotenv').config({ quiet: true })
const jwt = require('jsonwebtoken')
const express = require('express')
const Auth = require('../middleware/Auth')
const country = require('../database/models/country')
const division = require('../database/models/division')

const SK = process.env.SECRET_KEY
const router = express.Router()

router.post('/countryRegistration', async (req, res) => {
    try {
        const { name, notation, username, password } = req.body
        if (!name || !notation || !username || !password)
            return res.status(422).json({ message: 'Hiányos adatok ország létrehozáshoz' })
        const oneCountry = await country.findOne({ where: { name } })
        if (oneCountry)
            return res.status(409).json({ message: 'Már létező ország' })
        const oneNotation = await country.findOne({ where: { notation } })
        if (oneNotation)
            return res.status(409).json({ message: 'Használatban lévő ország megjelölés' })
        const newCountry = await country.create({ name, notation, username, password })
        return res.status(201).json({ message: 'Sikeres regisztráció', country: newCountry.name })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Nincs adat ország létrehozáshoz' })
    }
})

router.post('/divisionRegistration', Auth(), async (req, res) => {
    const { name, notation, username } = req.body
    const countryId = req.countryId
    const country = await country.findByPk(countryId)
    const password = `${country.notation}_${notation}_${Math.random()*1000}`
})



module.exports = router