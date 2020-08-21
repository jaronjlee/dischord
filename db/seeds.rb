# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Server.destroy_all
UserServer.destroy_all

User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
Server.connection.execute('ALTER SEQUENCE servers_id_seq RESTART WITH 1')
UserServer.connection.execute('ALTER SEQUENCE user_servers_id_seq RESTART WITH 1')

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

server4 = Server.create!(
    server_name: 'server4',
    owner_id: user1.id
)

server5 = Server.create!(
    server_name: 'server5',
    owner_id: user1.id
)


#MEMBERSHIPS
membership1 = UserServer.create!(
    user_id: user1.id,
    server_id: server2.id
)

membership2 = UserServer.create!(
    user_id: user2.id,
    server_id: server1.id
)

