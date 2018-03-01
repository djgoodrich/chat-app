var socket = io();
        socket.on('connect', function() {
            console.log('connected to server');

            socket.emit('createMessage', {
                to: 'JenniferannGoodrich@gmail.com',
                text: 'Hey, this is your husband.'
            });
        });
        socket.on('disconnect', function() {
            console.log('disconnected from server');
        });
        socket.on('newMessage', function(message) {
            console.log('New Message', message);
        });