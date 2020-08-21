import React from 'react';
import { Link } from 'react-router-dom';

class ServersIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount () {
        this.props.requestServers();
    }

    render () {
        const {servers} = this.props;
        return (
            <div className="wrapper">
                <div className="sidebar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {servers.map(server => (
                            <li className="server-link" key={server.id}>
                                {server.server_name}
                                {/* {server.server_name.slice(0,3)} */}
                            </li>
                        ))}
                        <li><Link to="/servers/new">+</Link></li>
                    </ul>
                </div>
                <div className="main-content">
                    <div>Main Content</div>
                </div>
            </div>
        )
    }
}

export default ServersIndex;