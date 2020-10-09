import React from 'react';

class CreateChannelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            channel_name: "",
            server_id: this.props.server.id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        const serverId = await this.props.server.id
        const channel = Object.assign({}, this.state);
        this.props.createChannel(serverId, channel)
            .then(() => (this.props.closeModal()))
        this.setState({
            channel_name: '',
            server_id: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <span className="create-header">CREATE TEXT CHANNEL</span> <br />
                    <br />
                    <span className="create-message">
                    </span>
                    <br />
                    <br />
                    <label>
                        <h1 className="channel-name">CHANNEL NAME</h1>
                        <input
                            className="create-input-box"
                            type="text"
                            value={this.state.channel_name}
                            onChange={this.update('channel_name')}
                        />
                    </label>
                    <button
                        className="create-button"
                        type="submit"
                    >Create
                        </button>
                </form>
            </div>
        )
    }
}

export default (CreateChannelForm);