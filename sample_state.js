{
    entities: {
        users: {
            1: {
                id: 1,
                username: 'jaron',
                session_token: 'banana', 
            }, 
            1: {
                id: 1,
                username: 'fred',
                session_token: 'apple', 
            }
        }, 
        servers: {
            1: {
                id: 1, 
                server_name: 'gamers',
                owner_id: 'jaron'
            }, 
            2: {
                id: 2,
                server_name: 'chatters',
                owner_id: 'fred'
        },
        user_servers: {
            1: {
                user_id: 1,
                server_id: 1
            },
            2: {
                user_id: 2,
                server_id: 2
            }
        },
        channels: {
            1: {
                id: 1,
                channel_name: 'gamer channel',
                server_id: 1
            },
            2: {
                id: 2,
                channel_name: 'chat channel',
                server_id: 2
            },
        },
        channel_messages: {
            1: {
                id: 1,
                author_id: 1,
                channel_id: 1
                body: 'hello channel',
            },
            2: {
                id: 2,
                author_id: 2,
                channel_id: 1                
                body: 'hi channel people',
            }
        }, 
        direct_messages: {
            1: {
                id: 1,
                author_id: 1,
                recipient_id: 2
                body: 'hi'
            },
            1: {
                id: 2,
                author_id: 2,
                recipient_id: 1
                body: 'hey'
            },
        },
    },
    session: {
        currentUser: 1
    },
    ui: {
        loading: true/false
    }, 
    errors: {
        sessionErrors: ['Invalid credentials']
    }
}