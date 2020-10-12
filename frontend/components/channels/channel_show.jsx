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
                    this.props.requestMessages();
                },
                speak: function (data) { //sends data to backend
                    return this.perform("speak", data);
                }
            }
            );
        
        this.props.requestChannel();
        this.props.requestMessages();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.channelId !== prevProps.match.params.channelId) {
            this.props.requestChannel();
            this.props.requestMessages();
            // this.bottom.current.scrollIntoView({ behavior: "smooth" });
        };
        
        if (this.bottom.current) {
            this.bottom.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    render() {
        if (!this.props.channel) return null;
        if (!this.props.messages) return null;
        if (!this.props) return null;

        const channel = this.props.channel;
        const messages = this.props.messages.map(message => {
            return (
              <div className="message" key={message.id}>
                {/* <div className="message-icon">{message.author.slice(0,1)}</div> */}
                <img src="white_logo.png" alt="alt text" />
                <div className="whole-message">
                    <div className="message-author-date">
                        {message.author}
                        <div className="message-date">{message.created_at.slice(0,10)}</div>
                    </div>
                    <div className="message-body">{message.body}</div>
                </div>
                <br />
              </div>
            );
        })

        return (
          <div className="messages-bar">
            <h1 className="channel-header"># {channel.channel_name}</h1>
            <div className="message-list">
              <div className="message-list-header">
                <img src="channel-header.jpg" alt="" />
                <br />
                <span className="channel-welcome">Welcome to #{channel.channel_name}</span>
                <br />
                <br />
                <span className="channel-start">This is the start of the #{channel.channel_name} channel</span>
              </div>
              {messages}
            <div ref={this.bottom}></div>
            </div>
            <MessageFormContainer channel={channel} />
          </div>
        );
    }

}

export default ChannelShow;