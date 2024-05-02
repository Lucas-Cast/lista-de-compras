const mongoose = require('mongoose')
require('dotenv').config()

//Credentials from .env
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

const connect = async () => await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@produtos.eectniz.mongodb.net/`)

module.exports = connect