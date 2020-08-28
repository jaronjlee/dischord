import * as APIUtil from '../util/message_api_util'

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"

//regular action creators
export const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    messages
})

export const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    message
})

//THUNK 
export const requestMessages = (channelId) => dispatch => (
    APIUtil.fetchMessages(channelId).then(messages => (
        dispatch(receiveMessages(messages))
    ))
);

// export const createMessage = (message) => dispatch => (
//     APIUtil.createMessage(message).then(messages => (
//         dispatch(receiveMessage(messages))
//     ))
// );
