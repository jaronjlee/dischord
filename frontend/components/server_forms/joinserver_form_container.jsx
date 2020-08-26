import { connect } from 'react-redux';
import {joinServer} from '../../actions/server_actions';
import JoinServerForm from '../server_forms/join_server_form';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        joinServer: (inviteCode) => dispatch(joinServer(inviteCode))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinServerForm);
