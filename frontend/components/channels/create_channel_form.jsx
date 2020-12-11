import React, {useState, useEffect} from 'react';

function CreateChannelForm({
    errors,
    channel,
    createChannel,
    clearErrors,
    server,
    closeModal
}) {

    const [channelName, setChannelName] = useState("")
    const [serverId, setServerId] = useState(server.id)

    useEffect(() => {
        console.log(serverId)
        console.log(channelName)
        clearErrors()
    }, [])

    useEffect(() => {
        clearErrors()
    }, [channelName])


    function handleSubmit(e) {
        e.preventDefault();
        clearErrors()
        const channel = Object.assign({}, {channel_name: channelName, serverId});
        createChannel(serverId, channel)
            .then(() => (closeModal()))
    }

    function renderErrors() {
        return (
        <ul>
            {errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
            ))}
        </ul>
        );
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                        value={channelName}
                        onChange={(e) => {
                            setChannelName(e.target.value)
                        }}
                    />
                </label>
                <button
                    className="create-button"
                    type="submit"
                >Create
                    </button>
            </form>
            {renderErrors()}
        </div>
    )
    
}

export default (CreateChannelForm);



// import React from 'react';

// class CreateChannelForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             channel_name: "",
//             server_id: this.props.server.id
//         }

//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     componentDidMount() {
//     this.props.clearErrors();
//     }

//     update(field) {
//         return e => this.setState({
//             [field]: e.currentTarget.value
//         });
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const serverId = this.props.server.id
//         const channel = Object.assign({}, this.state);
//         this.props.createChannel(serverId, channel)
//             .then(() => (this.props.closeModal()))
//         this.setState({
//             channel_name: '',
//             server_id: ''
//         })
//     }

//     renderErrors() {
//         return (
//         <ul>
//             {this.props.errors.map((error, i) => (
//             <li key={`error-${i}`}>{error}</li>
//             ))}
//         </ul>
//         );
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <span className="create-header">CREATE TEXT CHANNEL</span> <br />
//                     <br />
//                     <span className="create-message">
//                     </span>
//                     <br />
//                     <br />
//                     <label>
//                         <h1 className="channel-name">CHANNEL NAME</h1>
//                         <input
//                             className="create-input-box"
//                             type="text"
//                             value={this.state.channel_name}
//                             onChange={this.update('channel_name')}
//                         />
//                     </label>
//                     <button
//                         className="create-button"
//                         type="submit"
//                     >Create
//                         </button>
//                 </form>
//                 {this.renderErrors()}
//             </div>
//         )
//     }
// }

// export default (CreateChannelForm);