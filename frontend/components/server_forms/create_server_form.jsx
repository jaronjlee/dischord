import React, {useState, useEffect} from 'react';
import { withRouter } from "react-router-dom";

function CreateServerForm({
  errors,
  createServer,
  clearErrors,
  createChannel,
  history,
  closeModal,
  owner_id
}) {

  const [serverName, setServerName] = useState("");
  const [ownerId, setOwnerId] = useState(owner_id);

  useEffect(() => {
    clearErrors()
  }, [])

  useEffect(() => {
    clearErrors()
  }, [serverName])

  async function handleSubmit(e) {
    e.preventDefault();
    await clearErrors()
    const server = await Object.assign({}, {server_name: serverName, owner_id: ownerId});
    let savedServer = null
    try {
      savedServer = await createServer(server)
    } catch (error) {
      console.log("error")
    }
    if (await !savedServer) return null
    const channel = await {
            channel_name: "general"
          };
    let savedChannel = await createChannel(savedServer.server.id, channel)
    await history.push(`/servers/${savedServer.server.id}/${savedChannel.channel.id}`)
    closeModal()
  }

  function renderErrors() {
    return (
      <ul>
        {errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <span className="create-header">CREATE YOUR DISCHORD SERVER</span>{" "}
        <br />
        <br />
        <span className="create-message">
          Make a place for you to hang out with your communities and friends
        </span>
        <br />
        <br />
        <label>
          <h1 className="server-name">SERVER NAME</h1>
          <input
            className="create-input-box"
            type="text"
            value={serverName}
            onChange={(e) => {
              setServerName(e.target.value)
            }}
          />
        </label>
        <button className="create-button" type="submit">
          Create
        </button>
        {renderErrors()}
      </form>
    </div>
  );

}

export default withRouter(CreateServerForm);
// export default withRouter(ServerForm);






// import React, {useState, useEffect} from 'react';
// import { withRouter } from "react-router-dom";

// class CreateServerForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       server_name: "",
//       owner_id: this.props.owner_id,
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount() {
//     this.props.clearErrors();
//   }

//   update(field) {
//     return (e) =>
//       this.setState({
//         [field]: e.currentTarget.value,
//       });
//   }

//   async handleSubmit(e) {
//     await e.preventDefault();
//     const server = await Object.assign({}, this.state);
//     let savedServer = await this.props.createServer(server)
//     // await console.log(savedServer.server.id)
//     const channel = await {
//             channel_name: "general"
//           };
//     let savedChannel = await this.props.createChannel(savedServer.server.id, channel)
//     // let savedChannel = await this.props.createGeneralChannel(savedServer.server.id, channel)
//     // await console.log(savedChannel.channel)
//     await this.props.history.push(`/servers/${savedServer.server.id}/${savedChannel.channel.id}`)
//     await this.props.closeModal()
//   }

//   renderErrors() {
//     return (
//       <ul>
//         {this.props.errors.map((error, i) => (
//           <li key={`error-${i}`}>{error}</li>
//         ))}
//       </ul>
//     );
//   }

//   render() {
//     return (
//       <div>
//         <form className="form" onSubmit={this.handleSubmit}>
//           <span className="create-header">CREATE YOUR DISCHORD SERVER</span>{" "}
//           <br />
//           <br />
//           <span className="create-message">
//             Make a place for you to hang out with your communities and friends
//           </span>
//           <br />
//           <br />
//           <label>
//             <h1 className="server-name">SERVER NAME</h1>
//             <input
//               className="create-input-box"
//               type="text"
//               value={this.state.server_name}
//               onChange={this.update("server_name")}
//             />
//           </label>
//           <button className="create-button" type="submit">
//             Create
//           </button>
//           {this.renderErrors()}
//         </form>
//       </div>
//     );
//   }
// }

// export default withRouter(CreateServerForm);
// // export default withRouter(ServerForm);