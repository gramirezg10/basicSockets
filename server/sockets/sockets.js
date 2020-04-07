const {io} = require('../server')

io.on('connection', (client) => {
    console.log('user connected')

    client.on('disconnect', () => {
        console.log('user disconnected')
    })

    client.on('sendMessage', (data, callback) => {
        console.log(data)
        client.broadcast.emit('sendMessage', data)
        // console.log('message from client', message)
        // callback({message: 'message confirmed'})
    })

    client.emit('sendMessage', {
        user: 'admin',
        message: 'welcome to this app'
    })
})