import { connect } from 'react-redux';
import { createServer, clearErrors } from "../../actions/server_actions";
import {createGeneralChannel, createChannel} from "../../actions/channel_actions";
import CreateServerForm from './create_server_form';

const mapStateToProps = (state) => {
    const session = state.session;
    const users = state.entities.users
    return ({
        errors: state.errors.server,
        server: {
            server_name: "",
            owner_id: users[session.id],
        },
        formType: "Create",
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
      createServer: (server) => dispatch(createServer(server)),
      clearErrors: (errors) => dispatch(clearErrors(errors)),
      createGeneralChannel: (serverId, channel) => dispatch(createGeneralChannel(serverId, channel)),
      createChannel: (serverId, channel) => dispatch(createChannel(serverId, channel)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateServerForm);
