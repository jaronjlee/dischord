class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'chat_channel'
  end

  #receive data, manipulate that data to create a new instance of a Message, 
  # and then broadcast that new message into the stream

  #Action cable only allows you to broadcast objects => socket broadcasts an object
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
      channel_id: message.channel_id 
    }

    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed; end
end
