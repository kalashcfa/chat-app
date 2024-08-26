const exp =  require('express');
const cors = require('cors');
const app = exp();
const http = require('http');
const socketIo = require('socket.io');
const server =  http.createServer(app);
const io = socketIo(server);

let users = {};
let group = {};

//-----------------------------handshake--------------------------------- 

io.on('connection',(socket)=>
{
    console.log('user is connected...')


    socket.on('join',(data) =>
    {
        users[socket.id] = {userName : data.userName , status:'active'}
        io.emit('user-list',Object.values(users))
    })
})


app.use(cors());

require('dotenv').config()

const port = process.env.PORT || 3000;



//-------------------------------------server start----------------------------------
app.listen(port,()=>
{
    console.log(`server started at ${port}`)
})


