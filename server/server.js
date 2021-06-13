let express = require('express')
let http = require('http')
let socket_IO = require('socket.io')
let cors = require('cors')


const PORT = 8801
let app = express()
let server = http.Server(app)
let io =  socket_IO(server);

app.use(cors())

const STATIC = ['hello','world'];

app.get('/', function (req, res) {
    res.send('hello world')
  })

io.on('connection',(socket) => {
    console.log('User connected sucessfully')

    socket.emit("connection",null)

    socket.on('disconnect', () => {
        console.log('Sorry! User is unfortunately disconnected')
    })
})

app.get('/getAllChannels',(request,respone) => {
    respone.json({
        all_channels: STATIC
    })
})


server.listen(PORT, () => {
    console.log('Running on port',PORT)
})