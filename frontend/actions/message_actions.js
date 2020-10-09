import * as APIUtil from '../util/message_api_util'

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";
export const CLEAR_MESSAGE_ERRORS = "CLEAR_MESSAGE_ERRORS";

//regular action creators
export const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    messages
})

export const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    message
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_SERVER_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_SERVER_ERRORS,
});

//THUNK 
export const requestMessages = (channelId) => dispatch => (
    APIUtil.fetchMessages(channelId).then(messages => (
        dispatch(receiveMessages(messages))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

// export const createMessage = (message) => dispatch => (
//     APIUtil.createMessage(message).then(messages => (
//         dispatch(receiveMessage(messages))
//     ))
// );
