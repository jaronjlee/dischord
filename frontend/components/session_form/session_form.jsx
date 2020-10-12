import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    componentDidMount() {
    this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>{error}</li>
            ))}
          </ul>
        );
    }

    loginHeader() {
        return (
            <div className="login-message">
                <h1>Welcome back!</h1>
                <br/>
                <p>We're so excited to see you again!</p>
            </div>
        )
    }

    signUpHeader() {
        return (
            <div className="login-message">
                <h1>Create an account</h1>
            </div>
        )
    }

    loginMessage() {
        return (
          <div className="need-account">
            <Link className="session-link" to="/login">Already have an account?</Link>
          </div>
        )
    }

    signUpMessage() {
        return (
            <div className="need-account">
                <label className="login-label">Need an account?</label>
                <Link className="session-link" to="/signup">  Register</Link>
            </div>
        )
    }

    handleDemo(e) {
        e.preventDefault();
        const demoUser = {
            username: 'demo1',
            password: 'password'
        }
        this.props.processForm(demoUser)
    }

    render() {
        const {formType} = this.props
        return (
          // <div className="login-form-container">
          <div className="whole-page">
            <header>
              <img src="/white_logo.png" className="login-logo" alt="" />
              <div className="dischord">DISCHORD</div>
            </header>
            <br />
            <form className="session-form-box" onSubmit={this.handleSubmit}>
              <h2 className="session-header">
                {" "}
                {formType == "login"
                  ? this.loginHeader()
                  : this.signUpHeader()}{" "}
              </h2>
              <br />
              <label className="login-label">
                USERNAME
                <br />
                <input
                  className="input-box"
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                />
              </label>
              <br />
              <label className="login-label">
                PASSWORD
                <br />
                <input
                  className="input-box"
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>
              <br />
              <button className="button" type="submit">
                Continue
              </button>
              {formType == "login" ? (
                <button className="button" onClick={this.handleDemo}>
                  Demo
                </button>
              ) : null}
              <br />
              <div>
                {formType == "login"
                  ? this.signUpMessage()
                  : this.loginMessage()}
              </div>
              {/* <div>
                {formType == "login"
                  ? this.signUpMessage()
                  : this.loginMessage()}
              </div> */}
              <br />

              <br />
              <div id="session-errors">
                  {this.renderErrors()}
              </div>
            </form>
            <footer>
                <div class="personal-div">
                  <a href="https://www.linkedin.com/in/jaronjlee/">
                    <img src="./linkedin.png"></img>
                  </a>

                  <a href="https://github.com/jaronjlee/discord_clone">
                    <img src="./personalsite.png"></img>
                  </a>

                  <a href="https://github.com/jaronjlee/discord_clone">
                    <img src="./github.svg"></img>
                  </a>
                </div>
            </footer>
          </div>
        );
    }

    // render() {
    //     const {formType} = this.props
    //     return (
    //       <div className="whole-page">
    //         <header>
    //           <h1 className="dischord">Dischord</h1>
    //         </header>
    //         <br />
    //         <form className="session-form-box" onSubmit={this.handleSubmit}>
    //           <h2 className="session-header">
    //             {" "}
    //             {formType == "login"
    //               ? this.loginHeader()
    //               : this.signUpHeader()}{" "}
    //           </h2>
    //           <br />
    //           <label className="login-label">
    //             USERNAME
    //             <br />
    //             <input
    //               className="input-box"
    //               type="text"
    //               value={this.state.username}
    //               onChange={this.update("username")}
    //             />
    //           </label>
    //           <br />
    //           <label className="login-label">
    //             PASSWORD
    //             <br />
    //             <input
    //               className="input-box"
    //               type="password"
    //               value={this.state.password}
    //               onChange={this.update("password")}
    //             />
    //           </label>
    //           <br />
    //           <button className="button" type="submit">
    //             Continue
    //           </button>
    //           {formType == "login" ? (
    //             <button className="button" onClick={this.handleDemo}>
    //               Demo
    //             </button>
    //           ) : null}
    //           <br />
    //           <div>
    //             {formType == "login"
    //               ? this.signUpMessage()
    //               : this.loginMessage()}
    //           </div>
    //           <br />

    //           <br />
    //           <div id="session-errors">
    //               {this.renderErrors()}
    //           </div>
    //         </form>
    //       </div>
    //     );
    // }
}

export default SessionForm;
