import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

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
                <h2>Home Page</h2>
                {currentUser? this.logoutButton() : this.loginButton() }
            </div>
        )
    }
}

export default Home;

