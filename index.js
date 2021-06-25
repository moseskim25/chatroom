const express = require('express');
const socket = require('socket.io');

const app = express();

const PORT = 3000
const server = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

app.use(express.static('public'));

const io = socket(server)

io.on('connection', (socket) => {
  socket.on('chat', (data) => {
    io.sockets.emit('chat', data)
  })
})