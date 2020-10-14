import { connect } from 'react-redux';
import React from 'react';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { createServer } from "../../actions/server_actions";
import {createGeneralChannel, createChannel} from "../../actions/channel_actions";

const mapStateToProps = (state, ownProps) => {
    return ({
        errors: state.errors.session,
        formType: 'signup',
        currentUser: state.entities.users[state.session.id],
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      processForm: (user) => dispatch(signup(user)),
      clearErrors: (errors) => dispatch(clearErrors(errors)),
      createServer: (server) => dispatch(createServer(server)),
      createGeneralChannel: (serverId, channel) => dispatch(createGeneralChannel(serverId, channel)),
      createChannel: (serverId, channel) => dispatch(createChannel(serverId, channel)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
