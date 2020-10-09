import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      channel_id: this.props.channel.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.body.length > 200) {
        return null
    }
    
    App.cable.subscriptions.subscriptions[0].speak({
      message: this.state.body,
      author_id: this.props.currentUser.id,
      channel_id: this.props.channel.id,
    });

    this.setState({ body: "" });
  }

  renderErrors() {
    return (
      <div className="message-error">
        Messages must be between 1 and 140 characters
      </div>
    );
  }

//   renderErrors() {
//     return (
//       <ul>
//         {this.props.errors.map((error, i) => (
//           <li key={`error-${i}`}>{error}</li>
//         ))}
//       </ul>
//     );
//   }

  render() {
    return (
      <div>
        <form className="chat-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="Type message here"
            className="chat-input"
            />
          <input className="chat-button" type="submit" />
        {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default MessageForm;