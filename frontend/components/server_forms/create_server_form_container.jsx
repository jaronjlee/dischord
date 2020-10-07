import { connect } from 'react-redux';
import { createServer, clearErrors } from "../../actions/server_actions";
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
      processForm: (server) => dispatch(createServer(server)),
      clearErrors: (errors) => dispatch(clearErrors(errors)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateServerForm);
