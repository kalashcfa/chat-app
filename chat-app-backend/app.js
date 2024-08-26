const exp =  require('express');
const cors = require('cors');
const app = exp();
const http = require('http')

const {Socket} = require('socket.io')


require('dotenv').config()

const port = process.env.PORT || 3000;

app.use(cors());



app.listen(port,()=>
{
    console.log(`server started at ${port} `)
})