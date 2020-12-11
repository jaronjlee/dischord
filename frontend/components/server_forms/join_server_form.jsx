import React, {useEffect, useState} from 'react';

function JoinServerForm({
  currentUser,
  errors,
  joinServer,
  clearErrors,
  closeModal
}) {


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     inviteCode: "",
  //   };

  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  const [inviteCode, setInviteCode] = useState("")

  // componentDidMount() {
  //     this.props.clearErrors();
  // }

  useEffect(() => {
    clearErrors()
  }, [])

  // update(field) {
  //   return (e) =>
  //     this.setState({
  //       [field]: e.currentTarget.value,
  //     });
  // }

  function handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, {inviteCode});
    joinServer(server.inviteCode).then(() => closeModal()).then(setInviteCode(""));
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
      <form onSubmit={handleSubmit}>
        <h1 className="join-header">Join a server</h1>
        <br />
        <label>
          <span className="join-message">Enter your invite code</span>
          <br />
          <input
            className="join-input-box"
            type="text"
            value={inviteCode}
            onChange={(e) => {
              setInviteCode(e.target.value)
            }}
          />
        </label>
        <button className="join-button" type="submit">
          Join
        </button>
        {renderErrors()}
      </form>
    </div>
  );

}

export default (JoinServerForm);




// import React from 'react';

// class JoinServerForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inviteCode: "",
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount() {
//       this.props.clearErrors();
//   }

//   update(field) {
//     return (e) =>
//       this.setState({
//         [field]: e.currentTarget.value,
//       });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const server = Object.assign({}, this.state);
//     this.props
//       .joinServer(server.inviteCode)
//       .then(() => this.props.closeModal());
//     this.setState({
//       inviteCode: "",
//     });
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
//         <form onSubmit={this.handleSubmit}>
//           <h1 className="join-header">Join a server</h1>
//           <br />
//           <label>
//             <span className="join-message">Enter your invite code</span>
//             <br />
//             <input
//               className="join-input-box"
//               type="text"
//               value={this.state.inviteCode}
//               onChange={this.update("inviteCode")}
//             />
//           </label>
//           <button className="join-button" type="submit">
//             Join
//           </button>
//           {this.renderErrors()}
//         </form>
//       </div>
//     );
//   }
// }

// export default (JoinServerForm);
