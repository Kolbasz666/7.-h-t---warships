require('dotenv').config({ quiet: true })
const { Sequelize, DataTypes } = require('sequelize')

const DIALECT = process.env.DIALECT
const HOST = process.env.HOST
const DB_USER = process.env.DB_USER
const DB_NAME = process.env.DB_NAME

const dbHandler = new Sequelize(DB_NAME, DB_USER, '', {
    dialect: DIALECT,
    host: HOST
})

module.exports = { dbHandler, DataTypes }