const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.origins('*:*');

io.on('connection', (socket) => {
    console.log('user connected');
    
    socket.on('radio', (blob) => {
        console.log('VOICE')
        socket.broadcast.emit('voice', blob);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})

http.listen(5588, () => {
    console.log('server runing');
});
