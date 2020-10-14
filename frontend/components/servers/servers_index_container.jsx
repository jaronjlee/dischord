import { connect } from 'react-redux';
import { requestServers, } from '../../actions/server_actions';
import { requestChannels } from "../../actions/channel_actions";
import ServersIndex from './servers_index';
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state) => {
    const session = state.session;
    const users = state.entities.users
    return ({
        servers: Object.values(state.entities.servers),
        channels: Object.values(state.entities.channels)
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
      requestServers: () => dispatch(requestServers()),
      requestChannels: (serverId) => dispatch(requestChannels(serverId)),
      logout: () => dispatch(logout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServersIndex);
