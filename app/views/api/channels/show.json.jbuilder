json.partial! '/api/channels/channel', channel: @channel

# @channel.messages.each do |message|
#     json.set! message.id do
#         json.extract! message, :id, :body, :author_id, :channel_id
#         # json.partial! 'api/messages/message', message: message
#     end
# end