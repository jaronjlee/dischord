import React from 'react';

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

    render() {
        // debugger;
        return (
            <div>
                <h2>{this.props.formType}</h2>
                <form onSubmit={this.handleSubmit}>
                        <br/>
                        <label>Username
                            <input 
                                type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        </label>
                        <br/>
                        <label>Password
                            <input 
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <br/>
                        <button type="submit" value={this.props.formType}>{this.props.formType}</button>
                        <br/>
                        Already have an account? {this.props.navLink}
                        <br/>
                        {this.renderErrors()}
                </form>
            </div>
        );
    }
}

export default SessionForm;
