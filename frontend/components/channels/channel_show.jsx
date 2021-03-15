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
        };
        
        if (this.bottom.current) {
            this.bottom.current.scrollIntoView({ behavior: "smooth" });
        }


    }

    randomMessage(num) {
        switch (num) {
            case 1:    
                return "Playing LEAGUE";
            case 2:    
                return "Playing CALL OF DUTY";
            case 3:    
                return "Playing FALL GUYS";
            case 4:    
                return "Playing MINECRAFT";
            case 5:    
                return "Playing STARCRAFT";
            case 6:    
                return "Playing TF2";
            case 7:    
                return "Playing DOTA";
            case 8:    
                return "Playing MARIO CART";
            case 9:    
                return "Playing FORTNITE";
            case 10:
                return "Playing VALORANT"
            default:
                return "Transferring to the NFL";
        }
    }

    render() {
        if (!this.props.channel) return null;
        if (!this.props.currentServer) return null;
        if (!this.props.messages) return null;
        if (!this.props) return null;

        const channel = this.props.channel;
        const currentServer = this.props.currentServer;
        const serverOwner = this.props.currentServer.owner;
        const numMembers = this.props.currentServer.members.length;

        const messages = this.props.messages.map(message => {
            return (
              <div className="message" key={message.id}>
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

        const members = this.props.currentServer.members.map(member => {
            if (member.username != serverOwner) {
                return (
                  <ul>
                    <li className="member-bar-li">
                      <img src="blue_logo.png" alt="/" />
                      <div className="member-bar-content">
                        <h3 className="memmber-username">
                            {member.username}
                            </h3>
                        <p>
                          {this.randomMessage(Math.floor(Math.random() * 10) + 1)}
                        </p>
                      </div>
                    </li>
                  </ul>
                );
            }
        })


        return (
            <div className="messages-bar-container">
                <h1 className="channel-header"># {channel.channel_name}</h1>    
                <div className="messages-bar">
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
                    <div className="members-bar">
                        <h1 className="members-bar-header">{`Members - ${numMembers}`}</h1>
                        <li className="member-bar-li">
                            <img src="blue_logo.png" alt="justin goes here" />
                            <div className="member-bar-content">
                            <h3 className="member-username">{serverOwner}</h3>
                            <p>
                                {this.randomMessage(Math.floor(Math.random() * 10) + 1)}
                            </p>
                            </div>
                        </li>
                        {members}
                    </div>
            </div>
        );
    }

}

export default ChannelShow;
























