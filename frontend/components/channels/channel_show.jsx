import React from 'react';
import Modal from 'react-modal';
import MessageFormContainer from "./message_form_container";

class ChannelShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCreateModal: false,
            messages: this.props.messages
        }
        this.bottom = React.createRef();
    }

    componentDidMount() {
        App.cable.subscriptions.create(
            { channel: "ChatChannel" },//create subscription to ChatChannel
            {
                received: data => {   //when client is subscribed, listen to channel for new data
                    this.props.receiveMessage(data);
                    this.props.requestMessages();
                    this.bottom.current.scrollIntoView({ behavior: 'smooth' });
                },
                speak: function (data) { //sends data to backend
                    return this.perform("speak", data);
                }
            }
            );
        
            this.props.requestChannel();
            this.props.requestMessages();
    }

    componentDidUpdate(newProps) {
        if (this.props.match.params.channelId !== newProps.match.params.channelId) {
            this.props.requestChannel();
            this.props.requestMessages();
        };
    }

    render() {
        if (!this.props.channel) return null;
        if (!this.props.messages) return null;

        const channel = this.props.channel;
        const messages = this.props.messages.map(message => {
            return (
                <div className="message-content" key={message.id}>
                    <div className="message-columns">
                        <div className="message-icon">{message.author.slice(0,1)}</div>
                        <div className="message-rows">
                            <div className="author">{message.author}</div>
                            <div className="message">{message.body}</div>
                            <div ref={this.bottom}></div>
                        </div>
                    </div>
                    <br/>
                </div>
            )
        })

        return (
            <div className="messages-bar">
                <h1 className="channel-header"># {channel.channel_name}</h1>
                <div className="message-list">
                    {messages}
                </div>
                <MessageFormContainer channel={channel}/>
            </div>
        )
    }

}

export default ChannelShow;