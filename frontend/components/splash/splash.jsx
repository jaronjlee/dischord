import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    loginButton() {
        return (
            <div className="login-div">
                <Link className="splash-button" to="/login">Login</Link>
            </div>
            
        )
    }

    logoutButton() {
        return <button className="splash-button" onClick={this.props.logout}>Logout</button>
    }

    render () {
        const {currentUser, logout} = this.props
        
        return (
            <div className="splash">
                <h1 className="dischord">Dischord</h1>
                <ul>
                    <li>
                        <Link className="servers-link" to={"/servers/"}>
                            Servers
                        </Link>
                    </li>
                    <li>Linkedin</li>
                    <li>Github</li>
                </ul>
                <div className="splash-button-div">
                    {currentUser ? this.logoutButton() : this.loginButton()}
                </div>
            </div>
        )
    }
}

export default Splash;

