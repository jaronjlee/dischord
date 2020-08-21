import React from 'react';
import { Link } from 'react-router-dom';

class ServerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            server_name: '',
            owner_id: this.props.owner_id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const server = Object.assign({}, this.state);
        this.props.processForm(server);
    }

    render () {
        const { formType } = this.props
        return (
            <div>
                <h1>{formType} your Dischord server</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Server Name
                        <input 
                            className="input-box"
                            type="text"
                            value={this.state.server_name}
                            onChange={this.update('server_name')}
                        />
                    </label>
                    <button className="button" type="submit">{formType} Server</button>
                </form>
            </div>
        )
    }
}

export default ServerForm;