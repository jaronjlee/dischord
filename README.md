## Dischord Overview
Dischord is a clone of the live-chat app Discord. This fullstack single-page web application allows users to join servers and create chat rooms to chat with other users in real time. 
![alt text]()
## Technologies
  * Backend
    * Ruby on Rails - MVC framework
    * PostgreSQL - database
  * Frontend
    * React-Redux - Javascript library for reusable UI components and frontend state management
    * HTML/CSS - style and formatting
  * Other
    * Rails ActionCable / Redis - to integrate WebSockets to allow for live-chat
## Features
### User Authentication
Users can create an account and use the same credentials to login. Database constraints, model validations, and frontend error rendering are used to ensure a secure sign-up/login process. There is also a demo login feature that allows people visiting the web app to access the site and its features without creating an account. 
### Servers/Channels
Users can create servers and invite other users to become members of their server via a server code. Users can create channels within each server to chat in. 
### Live Chat
Users can chat in real-time within each channel. The functionality is integrated using Rails Action Cable, which is Rails' implementation of WebSocket. WebSockets allow both the server and the client to push messages at any time without any relation to a previous request, resulting in live-chat. The code below sets up a ChatChannel class allowing ActionCable to receive data to create a new instance of a Message (speak) and broadcast objects to all subscribers (socket).
```ruby
class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'chat_channel'
  end

  def speak(data) 
    message = Message.create(
      body: data['message'], 
      author_id: data['author_id'], 
      channel_id: data['channel_id']
    )

    socket = { 
      id: message.id,
      body: message.body, 
      author_id: message.author_id, 
      channel_id: message.channel_id,
      author: message.author.username
    }

    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed; end
end
```
The code below creates a subscripion to the ChatChannel. When the client is subscribed, it listens to the channel for new data. The speak function sends data to the backend. 
```javascript
App.cable.subscriptions.create(
            { channel: "ChatChannel" }, //creates subscription to ChatChannel
            {
                received: data => {   //when client is subscribed, listen to channel for new data
                    this.props.receiveMessage(data);
                    this.props.requestMessages();
                    this.bottom.current.scrollIntoView({ behavior: 'smooth' });
                },
                speak: function (data) { //sends data to backend
                    return this.perform("speak", data);
                }
            }
        );
```
### Future Directions
  * Integrate AWS so users can upload individual server and user icons
  * Integrate functionality to add/remove friends
  * Improve styling 
