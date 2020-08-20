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
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    loginHeader() {
        return (
            <div>
                <h1>Welcome back!</h1>
                <p>We're so excited to see you again!</p>
            </div>
        )
    }

    signUpHeader() {
        return (
            <div>
                <h1>Create an account</h1>
            </div>
        )
    }

    loginMessage() {
        return (
            <Link to="/login">Already have an account?</Link>
        )
    }

    signUpMessage() {
        return (
            <div>
                <>Need an account? </>
                <Link to="/signup">Register</Link>
            </div>
        )
    }


    render() {
        // debugger;
        const {formType} = this.props
        return (
            <div>
                <h2> {formType == "login" ? this.loginHeader():this.signUpHeader()} </h2>
                <form onSubmit={this.handleSubmit}>
                        <br/>
                        <label>Username
                            <br/>
                            <input 
                                type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        </label>
                        <br/>
                        <label>Password
                            <br/>
                            <input 
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <br/>
                        <button type="submit" value={formType}>Continue</button>
                        <br/>
                        {formType == "login" ? this.signUpMessage():this.loginMessage()}
                        <br/>
                        {this.renderErrors()}
                </form>
            </div>
        );
    }
}

export default SessionForm;
