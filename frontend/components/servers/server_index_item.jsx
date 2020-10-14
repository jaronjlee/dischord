import React from "react";
import { withRouter } from "react-router-dom";


class ServerIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.requestServer(this.props.server.id).then(() => {
      this.props.requestChannels(this.props.server.id).then(() => {
        let channelId = Object.keys(this.props.channels)[0];
        this.props.history.push(
          `/servers/${this.props.server.id}/${channelId}`
        );
      });
    });
  }

  render() {
    return (
      <li className="tooltip">
        <button
            className="server-link"
            onClick={this.handleClick}
            // onClick={() => this.props.history.push(`/servers/${server.id}`)}
        >
        {this.props.server.server_name.charAt(0)}
        </button>
        <span className="tooltiptext">{this.props.server.server_name}</span>
      </li>
    );
  }
}

export default withRouter(ServerIndexItem);