const express = require('express')


const dbConnect = require('./database/db')
const router = require('./routes/routes')

const port = 3000
const app = express()

app.use(router)
app.use(express.json())

dbConnect()
    .then(() => app.listen(port))
    .catch((err) => console.log(`An error ocurred: 
    ${err}`))

