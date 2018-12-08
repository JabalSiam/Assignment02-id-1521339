Here I have made a chat application using socket.io.I have also used html,css and javascript.
Here client connect with the server through socket. Any message written by a client will be showed in the chat window of other clients connected with the server. 

So, client's message will be received by server then it will be passed to the other clients.

To pass messages to the server and from server to the other clients we used emit function.

To receive messages we used socket.on function.For receiving messages from client who send message, server has this function. Client also has this function to receive messages sent from server. 

 
https://user-images.githubusercontent.com/43328182/49689310-940f1180-fb49-11e8-8e18-68e915c0735e.PNG

This is the fron end side code. Here socket.emit function is used to pass the data to the server.

https://user-images.githubusercontent.com/43328182/49689313-9b361f80-fb49-11e8-826f-86e2a30db17b.PNG

This is also in the fron end where socket.on function is used to receive  data from server and then to print in the chat window of the client.

https://user-images.githubusercontent.com/43328182/49689315-a6894b00-fb49-11e8-868e-110ff0c1aaf6.PNG

These code are in the server side. Here variable io represents the particular socket of each client connected with the server. When connection will exist then io.on and the functions included in this will be executed. Here is a function socket.on which is used to receive data from the first client interested to send message by server and then the data will be sent to other clients by socket.emit function. 
In the second part brodcast is used to show the person who is interested to send message to other clients connected with the server.
