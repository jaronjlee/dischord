import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    loginButton() {
        return <Link to="/login">Login</Link>
    }

    logoutButton() {
        return <button onClick={this.props.logout}>Logout</button>
    }

    render () {
        const {currentUser, logout} = this.props
        
        return (
            <div>
                <h2>Splash Page</h2>
                {currentUser? this.logoutButton() : this.loginButton() }
            </div>
        )
    }
}

export default Splash;

