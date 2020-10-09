import {connect} from 'react-redux';
import MessageForm from './message_form';
import { clearErrors } from "../../actions/message_actions";


const mapStateToProps = (state) => {
    return {
      currentUser: state.entities.users[state.session.id],
      errors: state.errors.message,
    };
}

const mapDispatchToProps = (dispatch) => ({
  clearErrors: (errors) => dispatch(clearErrors(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);