import React, {useState, useEffect} from "react";
import { withRouter } from "react-router-dom";


function ServerIndexItem({
  // channels,
  server,
  requestServer,
  requestChannels,
  history
}){

  async function handleClick() {
    await requestServer(server.id)
    console.log(server.id)
    let requestedChannels = await requestChannels(server.id)
    let firstChannelId = await (Object.values(requestedChannels.channels)[0].id)

    history.push(
          `/servers/${server.id}/${firstChannelId}`
      );
  };

  if (!server) return null;

  return (
    <li className="tooltip">
      <button
          className="server-link"
          onClick={handleClick}
      >
      {server.server_name.charAt(0)}
      </button>
      <span className="tooltiptext">{server.server_name}</span>
    </li>
  );
  
}

export default withRouter(ServerIndexItem);

// import React from "react";
// import { withRouter } from "react-router-dom";


// class ServerIndexItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };

//     this.handleClick = this.handleClick.bind(this);
//   }


//   handleClick() {
//     this.props.requestServer(this.props.server.id).then(() => {
//       this.props.requestChannels(this.props.server.id).then(() => {
//         let channelId = Object.keys(this.props.channels)[0];
//         this.props.history.push(
//           `/servers/${this.props.server.id}/${channelId}`
//         );
//       });
//     });
//   }

//   render() {
//     return (
//       <li className="tooltip">
//         <button
//             className="server-link"
//             onClick={this.handleClick}
//             // onClick={() => this.props.history.push(`/servers/${server.id}`)}
//         >
//         {this.props.server.server_name.charAt(0)}
//         </button>
//         <span className="tooltiptext">{this.props.server.server_name}</span>
//       </li>
//     );
//   }
// }

// export default withRouter(ServerIndexItem);