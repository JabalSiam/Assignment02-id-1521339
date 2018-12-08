//make connection
var socket = io.connect('https://websocket-jabalsiam.c9users.io:8080');

// Query DOM
      var message = document.getElementById('message');
      var username = document.getElementById('handle');
      var btn = document.getElementById('send');
      var output = document.getElementById('output');
      var feedback = document.getElementById('feedback');

// Emit events
btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        username: username.value
    });
    message.value = "";
});

message.addEventListener('keypress', function(){
    socket.emit('typing', username.value);
})

// Listen for events
socket.on('chat', function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.username + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});