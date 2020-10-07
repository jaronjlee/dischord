import React from 'react';

class CreateServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server_name: "",
      owner_id: this.props.owner_id,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state);
    this.props.processForm(server).then(() => this.props.closeModal());
    this.setState({
      server_name: "",
    });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <span className="create-header">CREATE YOUR DISCHORD SERVER</span>{" "}
          <br />
          <br />
          <span className="create-message">
            Make a place for you to hang out with your communities and friends
          </span>
          <br />
          <br />
          <label>
            <h1 className="server-name">SERVER NAME</h1>
            <input
              className="create-input-box"
              type="text"
              value={this.state.server_name}
              onChange={this.update("server_name")}
            />
          </label>
          <button className="create-button" type="submit">
            Create
          </button>
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default (CreateServerForm);
// export default withRouter(ServerForm);