import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { requestServer, requestServers } from "../../actions/server_actions";
import { requestChannels } from "../../actions/channel_actions";

const mapStateToProps = (state, ownProps) => {
    return ({
        errors: state.errors.session,
        formType: 'login',
        servers: state.entities.servers,
        channels: state.entities.channels,
    })
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      processForm: (user) => dispatch(login(user)),
      login: (user) => dispatch(login(user)),
      clearErrors: (errors) => dispatch(clearErrors(errors)),
      requestServer: (serverId) => dispatch(requestServer(serverId)),
      requestServers: () => dispatch(requestServers()),
      requestChannels: (serverId) => dispatch(requestChannels(serverId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
