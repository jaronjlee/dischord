import React from 'react';
import Modal from 'react-modal';
import CreateChannelFormContainer from '../channels/create_channel_form_container'

class ServerShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCreateModal: false,
        }

        this.toggleCreateModal = this.toggleCreateModal.bind(this);
    }

    componentDidMount() {
        this.props.requestServer();
        this.props.requestChannels()
    }

    componentDidUpdate(newProps) {
        if (this.props.match.params.serverId !== newProps.match.params.serverId) {
            this.props.requestServer();
            this.props.requestChannels();
        }
    }

    toggleCreateModal() {
        this.setState({
            showCreateModal: !this.state.showCreateModal
        })
    }

    render () {
        if (!this.props.server) return null;
        const server = this.props.server;
        const channels = this.props.channels

        return (
            <div>
                <h1>Server Name: {server.server_name}</h1>
                <h2>Server Code: {server.invite_code}</h2>
                <button className="create-channel" onClick={this.toggleCreateModal}>+</button>
                <div>
                    <Modal
                        id="create-modal"
                        isOpen={this.state.showCreateModal}
                        contentLabel="Create Channel Modal"
                        onRequestClose={this.toggleCreateModal}
                        ariaHideApp={false}
                        style={{
                            content: {
                                top: '50%',
                                left: '50%',
                                right: '0',
                                bottom: '0',
                                marginLeft: "-245px",
                                marginTop: "-175px",
                                overflow: "hidden",
                                width: '490px',
                                height: '350px',
                                background: 'rgb(255, 255, 255)'
                            },
                            overlay: {
                                position: 'fixed',
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                zIndex: '50'
                            }
                        }}
                    >
                        <CreateChannelFormContainer server={server} closeModal={this.toggleCreateModal} />
                    </Modal>
                </div>
                <ul>
                    {channels.map((channel) => (
                        <li key={channel.id}>
                            {channel.channel_name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
} 

export default ServerShow;