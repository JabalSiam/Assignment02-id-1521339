Here I have made a chat application using socket.io.I have also used html,css and javascript.
Here client connect with the server through socket. Any message written by a client will be showed in the chat window of other clients connected with the server. 

So, client's message will be received by server then it will be passed to the other clients.

To pass messages to the server and from server to the other clients we used emit function.

To receive messages we used socket.on function.For receiving messages from client who send message, server has this function. Client also has this function to receive messages sent from server. 


