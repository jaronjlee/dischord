import * as APIUtil from '../util/channel_api_util'

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS"
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL"
export const REMOVE_CHANNEL = "REMOVE_CHANNEL"
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS"



//regular action creators
export const receiveChannels = (channels) => ({
    type: RECEIVE_CHANNELS,
    channels
});

export const receiveChannel = (channel) => ({
    type: RECEIVE_CHANNEL,
    channel
});

export const removeChannel = (channelId) => ({
    type: REMOVE_CHANNEL,
    channelId
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_CHANNEL_ERRORS,
    errors
})


//THUNK ACTION CREATORS

export const requestChannels = (serverId) => dispatch => (
    APIUtil.fetchChannels(serverId).then(channels => (
        dispatch(receiveChannels(channels))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const requestChannel = (serverId, channelId) => dispatch => (
    APIUtil.fetchChannel(serverId, channelId).then(channel => (
        dispatch(receiveChannel(channel))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const createChannel = (serverId, channel) => dispatch => (
    APIUtil.createChannel(serverId, channel).then(channel => (
        dispatch(receiveChannel(channel))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);


export const updateChannel = (serverId, channel) => dispatch => (
    APIUtil.fetchChannel(serverId, channel).then(channel => (
        dispatch(receiveChannel(channel))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const deleteChannel = (serverId, channelId) => dispatch => (
    APIUtil.deleteChannel(serverId, channelId).then(() => (
        dispatch(removeChannel(channelId))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);
