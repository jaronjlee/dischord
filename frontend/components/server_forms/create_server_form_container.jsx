import { connect } from 'react-redux';
import {createServer} from '../../actions/server_actions';
import CreateServerForm from './create_server_form';

const mapStateToProps = (state) => {
    const session = state.session;
    const users = state.entities.users
    return ({
        server: {
            server_name: "",
            owner_id: users[session.id]
        },
        formType: 'Create'
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (server) => dispatch(createServer(server))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateServerForm);
