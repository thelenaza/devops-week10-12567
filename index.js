const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')

const PORT = process.env.PORT || 3001

app.set("view engine", 'ejs')
app.set('views',path.resolve('./views'))
app.use(express.static('public'))

app.use('/',require('./routes/index'))

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})