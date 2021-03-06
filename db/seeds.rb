# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Server.destroy_all
Channel.destroy_all
Membership.destroy_all
Message.destroy_all

User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
Server.connection.execute('ALTER SEQUENCE servers_id_seq RESTART WITH 1')
Channel.connection.execute('ALTER SEQUENCE channels_id_seq RESTART WITH 1')
Membership.connection.execute('ALTER SEQUENCE memberships_id_seq RESTART WITH 1')

#USERS
user1 = User.create!(
    username: 'demo1',
    password: 'password'
)

user2 = User.create!(
    username: 'demo2',
    password: 'password'
)

user3 = User.create!(
    username: 'demo3',
    password: 'password'
)


#SERVERS
server1 = Server.create!(
    server_name: 'server1',
    owner_id: user1.id
)

server2 = Server.create!(
    server_name: 'server2',
    owner_id: user2.id
)

server3 = Server.create!(
    server_name: 'server3',
    owner_id: user3.id
)

#MEMBERSHIPS
membership1 = Membership.create!(
    user_id: user1.id,
    server_id: server1.id
)

membership2 = Membership.create!(
    user_id: user2.id,
    server_id: server2.id
)

membership3 = Membership.create!(
    user_id: user3.id,
    server_id: server3.id
)

membership4 = Membership.create!(
    user_id: user2.id,
    server_id: server1.id
)

membership5 = Membership.create!(
    user_id: user3.id,
    server_id: server1.id
)



membership6 = Membership.create!(
    user_id: user1.id,
    server_id: server2.id
)

membership7 = Membership.create!(
    user_id: user3.id,
    server_id: server2.id
)


#CHANNELS
general1 = Channel.create!(
    channel_name: "general",
    server_id: server1.id
)

channel1 = Channel.create!(
    channel_name: "Football",
    server_id: server1.id
)

channel2 = Channel.create!(
    channel_name: "Valorant",
    server_id: server1.id
)

channel3 = Channel.create!(
    channel_name: "League",
    server_id: server1.id
)

channel4 = Channel.create!(
    channel_name: "Netflix",
    server_id: server1.id
)

general2 = Channel.create!(
    channel_name: "general",
    server_id: server2.id
)

channel5 = Channel.create!(
    channel_name: "Football",
    server_id: 2
)

channel6 = Channel.create!(
    channel_name: "Call of Duty",
    server_id: server2.id
)


general3 = Channel.create!(
    channel_name: "general",
    server_id: server3.id
)

channel7 = Channel.create!(
    channel_name: "Fortnite",
    server_id: server3.id
)

channel8 = Channel.create!(
    channel_name: "Fall Guys",
    server_id: server3.id
)


