import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ServerFormContainer from '../server_forms/create_server_form_container';
import ServerJoinContainer from '../server_forms/join_server_form_container';
import ServerShowContainer from '../servers/server_show_container'
import { ProtectedRoute } from '../../util/route_utils';
import ServerIndexItemContainer from "./server_index_item_container";
// import { withRouter } from "react-router-dom";

class ServersIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCreateModal: false,
            showJoinModal: false
        }

        this.toggleCreateModal = this.toggleCreateModal.bind(this);
        this.toggleJoinModal = this.toggleJoinModal.bind(this);
        // this.switchServer = this.switchServer.bind(this);
    }

    async componentDidMount () {
        await this.props.requestServers();
        let firstServerId = await this.props.servers[0].id
        // console.log(firstServerId)
        await this.props.requestChannels(firstServerId)
        let firstChannelId = await this.props.channels[0].id
        // console.log(firstChannelId)
        await this.props.history.push(
          `/servers/${firstServerId}/${firstChannelId}`
        );
    }

    // componentDidMount () {
    //     this.props.requestServers();
    // }

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
      // const {servers} = this.props;
      const { servers, channels } = this.props
      let serversList = null;
      if (servers.length !== 0) {
        serversList = servers.map(server => {
            return (
              <ServerIndexItemContainer server={server} key={server.id}></ServerIndexItemContainer>
            )
        })
      }

        return (
          <div className="wrapper">
            <div className="sidebar">
              <ul>
                <button 
                  className="side-logout-button" 
                  onClick={this.props.logout}>
                  <i class="fas fa-sign-out-alt"></i>
                  <span className="side-logout-button-tooltiptext">Logout</span>
                  {/* Logout */}
                </button>
                <button className="add-server" onClick={this.toggleCreateModal}>
                  +<span className="add-server-tooltiptext">Add Server</span>
                </button>
                <button className="join-server" onClick={this.toggleJoinModal}>
                  J<span className="join-server-tooltiptext">Join Server</span>
                </button>
                {serversList}
                <div>
                  <Modal
                    id="create-modal"
                    isOpen={this.state.showCreateModal}
                    contentLabel="Create Server Modal"
                    onRequestClose={this.toggleCreateModal}
                    ariaHideApp={false}
                    style={{
                      content: {
                        top: "50%",
                        left: "50%",
                        right: "0",
                        bottom: "0",
                        marginLeft: "-245px",
                        marginTop: "-175px",
                        overflow: "hidden",
                        width: "490px",
                        height: "350px",
                        background: "rgb(255, 255, 255)",
                      },
                      overlay: {
                        position: "fixed",
                        backgroundColor: "rgba(0,0,0,0.7)",
                        zIndex: "50",
                      },
                    }}
                  >
                    <ServerFormContainer closeModal={this.toggleCreateModal} />
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
                        top: "50%",
                        left: "50%",
                        right: "0",
                        bottom: "0",
                        marginLeft: "-245px",
                        marginTop: "-175px",
                        overflow: "hidden",
                        width: "490px",
                        height: "350px",
                        background: "rgb(255, 255, 255)",
                      },
                      overlay: {
                        position: "fixed",
                        backgroundColor: "rgba(0,0,0,0.7)",
                        zIndex: "50",
                      },
                    }}
                  >
                    <ServerJoinContainer closeModal={this.toggleJoinModal} />
                  </Modal>
                </div>
                {/* {servers.map((server) => (
                  <li className="tooltip" key={server.id}>
                    <button
                      className="server-link"
                      // onClick={this.switchServer(server.id)}
                      onClick={() => this.props.history.push(`/servers/${server.id}`)}
                    >
                      {server.server_name.slice(0, 2)}
                    </button>
                    <span className="tooltiptext">{server.server_name}</span>
                  </li>
                ))} */}
              </ul>
            </div>
            <div>
              <ProtectedRoute
                path="/servers/:serverId"
                component={ServerShowContainer}
              />
            </div>
          </div>
        );
    }
}

export default ServersIndex;