import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ServerFormContainer from '../server_forms/create_server_form_container';
import ServerJoinContainer from '../server_forms/joinserver_form_container';
import ServerShowContainer from '../servers/server_show_container'
import { ProtectedRoute } from '../../util/route_utils';

class ServersIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCreateModal: false,
            showJoinModal: false
        }

        this.toggleCreateModal = this.toggleCreateModal.bind(this);
        this.toggleJoinModal = this.toggleJoinModal.bind(this);
    }

    componentDidMount () {
        this.props.requestServers();
    }

    componentDidUpdate(prevProps) {
        if ((prevProps.servers.length) !== (this.props.servers.length)) {
            this.props.requestServers();
        }
    }

    toggleCreateModal() {
        this.setState({
            showCreateModal: !this.state.showCreateModal
        })
    }


    toggleJoinModal() {
        this.setState({
            showJoinModal: !this.state.showJoinModal
        })
    }

    render () {
        const {servers} = this.props;
        return (
            <div className="wrapper">
                <div className="sidebar">
                    <ul>
                        <li className="tooltip"><Link to="/">H</Link></li>
                        <button className="add-server" onClick={this.toggleCreateModal}>+</button>
                        <button className="join-server" onClick={this.toggleJoinModal}>J</button>
                        <div>
                            <Modal
                                id="create-modal"
                                isOpen={this.state.showCreateModal}
                                contentLabel="Create Server Modal"
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
                                <ServerFormContainer closeModal={this.toggleCreateModal}/>
                            </Modal>
                        </div>
                        <div>
                            <Modal
                                id="join-modal"
                                isOpen={this.state.showJoinModal}
                                contentLabel="Join Server Modal"
                                onRequestClose={this.toggleJoinModal}
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
                                <ServerJoinContainer closeModal={this.toggleJoinModal}/>
                            </Modal>
                        </div>
                        {servers.map(server => (
                            <li className="tooltip" key={server.id}>
                                <Link to={`/servers/${server.id}`}>{server.server_name.slice(0, 3)}</Link>
                                <span className="tooltiptext">
                                    {server.server_name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="channel-bar">
                    <h1>Channel Div</h1>
                    <ProtectedRoute path="/servers/:serverId" component={ServerShowContainer}/>
                </div>
            </div>
        )
    }
}

export default ServersIndex;