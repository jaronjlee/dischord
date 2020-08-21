import {
    RECEIVE_SERVERS,
    RECEIVE_SERVER, 
    REMOVE_SERVER,
    RECEIVE_SERVER_ERRORS
} from '../actions/server_actions';

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SERVERS:
            return action.servers;
        case RECEIVE_SERVER:
            const nextServerState = Object.assign({}, state)
            nextServerState[action.server.id] = action.server
            return nextServerState
        case REMOVE_SERVER:
            let nextState = Object.assign({}, state)
            delete nextState[action.serverId]
            return nextState;
        default:
            return state;
    }
};

export default serversReducer;