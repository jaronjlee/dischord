import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';
import CreateChannelForm from './create_channel_form';


const mapStateToProps = (state) => {
    const session = state.session;
    const users = state.entities.users
    return ({
        channel: {
            channel_name: "",
            server_id: "",
        },
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        createChannel: (serverId, channel) => dispatch(createChannel(serverId, channel))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateChannelForm);
