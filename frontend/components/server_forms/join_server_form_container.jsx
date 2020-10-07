import { connect } from 'react-redux';
import { joinServer, clearErrors } from "../../actions/server_actions";
import JoinServerForm from './join_server_form';

const mapStateToProps = (state) => {
    return {
      currentUser: state.entities.users[state.session.id],
      errors: state.errors.server,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      joinServer: (inviteCode) => dispatch(joinServer(inviteCode)),
      clearErrors: (errors) => dispatch(clearErrors(errors)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinServerForm);
