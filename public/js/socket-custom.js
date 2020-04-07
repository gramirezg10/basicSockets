var socket = io();
// ON it's used for listen
socket.on('connect', () => {
    console.log('connected with server')
})
socket.on('disconnect', () => {
    console.log('lost connection with server')
})
//EMIT it's user for send information at server
socket.emit('sendMessage', {
    user: 'Mancho',
    message: 'message from frontend'
}, function(res) {
    console.log('server response: ', res)
})
// listen from back
socket.on('sendMessage', (message) => {
    console.log('message from back', message)
})