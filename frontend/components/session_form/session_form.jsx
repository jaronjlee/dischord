import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


function SessionForm({
  //login_form_container
  errors,
  formType,
  servers,
  channels,
  processForm,
  login,
  clearErrors,
  requestServer,
  requestServers,
  requestChannels,
  //signup_form_container
  currentUser,
  createServer,
  createChannel,
  //other
  history
}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
      clearErrors()
    }, [])

    async function handleSubmit(e) {
        await e.preventDefault();
        await clearErrors()

        const user = await Object.assign({}, {username, password});
        let savedUser = await processForm(user);

        let server = await {
          server_name: "general",
          owner_id: savedUser.id
        }

        let savedServer = await null;

        try {
          savedServer = await createServer(server)
        } catch (error) {
          console.log("error creating server")
        }

        const channel = await {
            channel_name: "general"
          };

        let savedChannel = await null;
        
        try {
          savedChannel = await createChannel(savedServer.server.id, channel)
        } catch (error) {
          console.log("error creating channel")
        }
        
        await console.log(savedChannel)

        try {
          await history.push(`/servers/${savedServer.server.id}/${savedChannel.channel.id}`)
        } catch (error) {
          console.log("error pushing to history")
        }
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

    function loginHeader() {
        return (
            <div className="login-message">
                <h1>Welcome back!</h1>
                <br/>
                <p>We're so excited to see you again!</p>
            </div>
        )
    }

    function signUpHeader() {
        return (
            <div className="login-message">
                <h1>Create an account</h1>
            </div>
        )
    }

    function loginMessage() {
        return (
          <div className="need-account">
            <Link className="session-link" to="/login">Already have an account?</Link>
          </div>
        )
    }

    function signUpMessage() {
        return (
            <div className="need-account">
                <label className="login-label">Need an account?</label>
                <Link className="session-link" to="/signup">  Register</Link>
            </div>
        )
    }

    function demoUser(e) {
      e.preventDefault();
      processForm({username: "demo1", password: "password"});
    }

    // function demoUser(e) {
    //   e.preventDefault();
    //   const demoUser = {
    //     username: "demo1",
    //     password: "password",
    //   };
    //   let demoUsername = demoUser.username;
    //   let demoPassword = demoUser.password;
    //   let interval = 150;
    //   // let interval = 150;

    //   let demoLogin = () => {
    //     processForm({username, password});
    //   };

    //   if (username !== demoUsername) {
    //     let inputUsername = setInterval(() => {
    //       if (username !== demoUsername) {
    //         let tempUsername = demoUsername.slice(0, username.length + 1);
    //         setUsername(tempUsername);
    //       } else {
    //         clearInterval(inputUsername);
    //         fillPassword();
    //       }
    //     }, interval);
    //   }

    //   let fillPassword = () => {
    //     let inputPassword = setInterval(() => {
    //       if (password !== demoPassword) {
    //         let tempPassword = demoPassword.slice(0, password.length + 1);
    //         setPassword(tempPassword);
    //       } else {
    //         clearInterval(inputPassword);
    //         console.log("clear intervale")
    //         demoLogin();
    //         console.log("login")
    //       }
    //     }, interval);
    //   };
    // }

      return (
        // <div className="login-form-container">
        <div className="whole-page">
          <header>
            <img src="/white_logo.png" className="login-logo" alt="" />
            <div className="dischord">DISCHORD</div>
          </header>
          <br />
          <form className="session-form-box" onSubmit={handleSubmit}>
            <h2 className="session-header">
              {" "}
              {formType == "login"
                ? loginHeader()
                : signUpHeader()}{" "}
            </h2>
            <br />
            <label className="login-label">
              USERNAME
              <br />
              <input
                className="input-box"
                type="text"
                value={username}
                onChange={(e) => {setUsername(e.target.value)}}
              />
            </label>
            <br />
            <label className="login-label">
              PASSWORD
              <br />
              <input
                className="input-box"
                type="password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
              />
            </label>
            <br />
            <button className="button" type="submit">
              Continue
            </button>
            {formType == "login" ? (
              <button className="button" onClick={demoUser}>
              {/* // <button className="button" onClick={this.handleDemo}> */}
                Demo
              </button>
            ) : null}
            <br />
            <div>
              {formType == "login"
                ? signUpMessage()
                : loginMessage()}
            </div>
            <br />

            <br />
            <div id="session-errors">
                {renderErrors()}
            </div>
          </form>
          <footer>
              <div class="personal-div">
                <a href="https://www.linkedin.com/in/jaronjlee/" target="_blank">
                  <img src="./linkedin.png"></img>
                </a>

                <a href="https://github.com/jaronjlee/" target="_blank">
                  <img src="./personalsite.png"></img>
                </a>

                <a href="https://github.com/jaronjlee/discord_clone" target="_blank">
                  <img src="./github.svg"></img>
                </a>
              </div>
          </footer>
        </div>
      );

}

export default SessionForm;



// import React from 'react';
// import { Link } from 'react-router-dom';


// class SessionForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: ''
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         // this.handleDemo = this.handleDemo.bind(this);
//         this.demoUser = this.demoUser.bind(this);
//     }

//     componentDidMount() {
//       this.props.clearErrors();
//     }

//     update(field) {
//         return e => this.setState({
//             [field]: e.currentTarget.value
//         });
//     }

//     async handleSubmit(e) {
//         await e.preventDefault();
//         await this.props.clearErrors()

//         const user = await Object.assign({}, this.state);
//         let savedUser = await this.props.processForm(user);
//         await console.log(savedUser)

//         let server = await {
//           server_name: "general",
//           owner_id: savedUser.id
//         }

//         let savedServer = await null;

//         try {
//           savedServer = await this.props.createServer(server)
//         } catch (error) {
//           console.log("error creating server")
//         }

//         await console.log(savedServer)


//         const channel = await {
//             channel_name: "general"
//           };

//         let savedChannel = await null;
        
//         try {
//           savedChannel = await this.props.createChannel(savedServer.server.id, channel)
//         } catch (error) {
//           console.log("error creating channel")
//         }
        
//         await console.log(savedChannel)

//         try {
//           await this.props.history.push(`/servers/${savedServer.server.id}/${savedChannel.channel.id}`)
//         } catch (error) {
//           console.log("error pushing to history")
//         }
//     }

//     renderErrors() {
//         return (
//           <ul>
//             {this.props.errors.map((error, i) => (
//               <li key={`error-${i}`}>{error}</li>
//             ))}
//           </ul>
//         );
//     }

//     loginHeader() {
//         return (
//             <div className="login-message">
//                 <h1>Welcome back!</h1>
//                 <br/>
//                 <p>We're so excited to see you again!</p>
//             </div>
//         )
//     }

//     signUpHeader() {
//         return (
//             <div className="login-message">
//                 <h1>Create an account</h1>
//             </div>
//         )
//     }

//     loginMessage() {
//         return (
//           <div className="need-account">
//             <Link className="session-link" to="/login">Already have an account?</Link>
//           </div>
//         )
//     }

//     signUpMessage() {
//         return (
//             <div className="need-account">
//                 <label className="login-label">Need an account?</label>
//                 <Link className="session-link" to="/signup">  Register</Link>
//             </div>
//         )
//     }

    // demoUser(e) {
    //   e.preventDefault();
    //   const demoUser = {
    //     username: "demo1",
    //     password: "password",
    //   };
    //   let { username, password } = demoUser;
    //   let interval = 150;
    //   let login = () => {
    //     this.props.processForm(this.state);
    //     // this.props.history.push("/")
    //   };
    //   if (this.state.username !== username) {
    //     let inputUsername = setInterval(() => {
    //       if (this.state.username !== username) {
    //         let tempUsername = username.slice(0, this.state.username.length + 1);
    //         this.setState({ username: tempUsername });
    //       } else {
    //         clearInterval(inputUsername);
    //         fillPassword();
    //       }
    //     }, interval);
    //   }
    //   let fillPassword = () => {
    //     let inputPassword = setInterval(() => {
    //       if (this.state.password !== password) {
    //         let tempPassword = password.slice(0, this.state.password.length + 1);
    //         this.setState({ password: tempPassword });
    //       } else {
    //         clearInterval(inputPassword);
    //         login();
    //       }
    //     }, interval);
    //   };

      // await this.props.requestServers();
      // console.log(this.props.servers)
      // let server = await this.props.servers[0]
      // await this.props.requestChannels(server.id)
      // let channel = await this.props.channels[0]
      // await this.props.history.push(`/servers/${server.id}/${channel.id}`)
    // }


//     render() {
//         const {formType} = this.props
//         return (
//           // <div className="login-form-container">
//           <div className="whole-page">
//             <header>
//               <img src="/white_logo.png" className="login-logo" alt="" />
//               <div className="dischord">DISCHORD</div>
//             </header>
//             <br />
//             <form className="session-form-box" onSubmit={this.handleSubmit}>
//               <h2 className="session-header">
//                 {" "}
//                 {formType == "login"
//                   ? this.loginHeader()
//                   : this.signUpHeader()}{" "}
//               </h2>
//               <br />
//               <label className="login-label">
//                 USERNAME
//                 <br />
//                 <input
//                   className="input-box"
//                   type="text"
//                   value={this.state.username}
//                   onChange={this.update("username")}
//                 />
//               </label>
//               <br />
//               <label className="login-label">
//                 PASSWORD
//                 <br />
//                 <input
//                   className="input-box"
//                   type="password"
//                   value={this.state.password}
//                   onChange={this.update("password")}
//                 />
//               </label>
//               <br />
//               <button className="button" type="submit">
//                 Continue
//               </button>
//               {formType == "login" ? (
//                 <button className="button" onClick={this.demoUser}>
//                 {/* // <button className="button" onClick={this.handleDemo}> */}
//                   Demo
//                 </button>
//               ) : null}
//               <br />
//               <div>
//                 {formType == "login"
//                   ? this.signUpMessage()
//                   : this.loginMessage()}
//               </div>
//               <br />

//               <br />
//               <div id="session-errors">
//                   {this.renderErrors()}
//               </div>
//             </form>
//             <footer>
//                 <div class="personal-div">
//                   <a href="https://www.linkedin.com/in/jaronjlee/" target="_blank">
//                     <img src="./linkedin.png"></img>
//                   </a>

//                   <a href="https://github.com/jaronjlee/" target="_blank">
//                     <img src="./personalsite.png"></img>
//                   </a>

//                   <a href="https://github.com/jaronjlee/discord_clone" target="_blank">
//                     <img src="./github.svg"></img>
//                   </a>
//                 </div>
//             </footer>
//           </div>
//         );
//     }
// }

// export default SessionForm;