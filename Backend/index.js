const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const AuthRouter = require('./Routes/AuthRouter')
const ProductRouter = require('./Routes/ProductRouter')
const cors = require('cors')
require('dotenv').config()
require('./Models/db')



const  PORT = process.env.PORT || 8050 

app.use(cors())
app.use(bodyParser.json())



app.get('/ping', (req, res) => {
    res.send('pong')
})

app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

app.listen(PORT,  () => {
    console.log('server is running on the posrt', PORT)
})