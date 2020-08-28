import React from 'react';
import Modal from 'react-modal';
import { ProtectedRoute } from '../../util/route_utils';
import { Link } from 'react-router-dom';
import ChannelShowContainer from '../channels/channel_show_container'
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

    displayCode () {
        var x = document.getElementById("server-code");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    render () {
        if (!this.props.server) return null;
        const server = this.props.server;
        const channels = this.props.channels

        return (
            <div className="channel-bar">
                <h1 className="server-header">{server.server_name}</h1>
                <br/>
                <div className="create-channel" onClick={this.toggleCreateModal}>Add Channel</div>
                <div className="display-code-button"onClick={this.displayCode}>Display invite code</div>
                <div id="server-code">{server.invite_code}</div>
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
                <br/>
                <div className="text-channels">Text Channels</div>
                <ul className="channels">
                    {channels.map((channel) => (
                        <li key={channel.id}>
                            <Link className="channel-link" to={`/servers/${server.id}/${channel.id}`}>{channel.channel_name}</Link>
                        </li>
                    ))}
                </ul>
                <div>
                    <ProtectedRoute path="/servers/:serverId/:channelId" component={ChannelShowContainer} />
                </div>
                <div className="members-bar">
                    <h1 className="member-header">Members</h1>
                    <ul className="members-list">
                        {server.members.map((member) => (
                            <li className="member">
                                {member.username}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
} 

export default ServerShow;