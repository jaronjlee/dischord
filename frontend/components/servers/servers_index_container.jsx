import { connect } from 'react-redux';
import { requestServers } from '../../actions/server_actions';
import ServersIndex from './servers_index';

const mapStateToProps = (state) => {
    return ({
        servers: Object.values(state.entities.servers)
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestServers: () => dispatch(requestServers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServersIndex);
