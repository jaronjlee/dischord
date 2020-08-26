import {
    RECEIVE_CHANNELS,
    RECEIVE_CHANNEL,
    REMOVE_CHANNEL,
    RECEIVE_CHANNEL_ERRORS
} from '../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHANNELS:
            return action.channels;
        case RECEIVE_CHANNEL:
            const nextChannelState = Object.assign({}, state)
            nextChannelState[action.channel.id] = action.channel
            return nextChannelState
        case REMOVE_CHANNEL:
            let nextState = Object.assign({}, state)
            delete nextState[action.channelId]
            return nextState;
        default:
            return state;
    }
};

export default channelsReducer;