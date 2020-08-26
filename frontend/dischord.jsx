//React
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"

// CHANNEL ACTIONS
import {
    requestChannels,
    requestChannel,
    createChannel,
    updateChannel,
    deleteChannel
} from './actions/channel_actions'

window.requestChannels = requestChannels
window.requestChannel = requestChannel
window.createChannel = createChannel
window.updateChannel = updateChannel
window.deleteChannel = deleteChannel
// CHANNEL TESTING STOPS



document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById("root");

    //TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //TESTING END

    ReactDOM.render(<Root store={store}/>, root);
});






// //CHANNEL TESTING
// // // TEST CHANNEL AJAX CALLS
// import * as channelAPIUtil from "./util/channel_api_util"

// // // TEST CHANNEL AJAX CALLS
// window.fetchChannels = channelAPIUtil.fetchChannels;
// window.fetchChannel = channelAPIUtil.fetchChannel;
// window.createChannel = channelAPIUtil.createChannel;
// window.updateChannel = channelAPIUtil.updateChannel;
// window.removeChannel = channelAPIUtil.removeChannel;












//USER AUTH TESTING//
// TEST AJAX CALLS
// import { login, logout, signup } from "./util/session_api_util";

//TEST AJAX CALLS
// window.login = login;
// window.logout = logout;
// window.signup = signup;

//TEST ACTIONS
// import { signup } from "./actions/session_actions";
// import { login } from "./actions/session_actions";
// import { logout } from "./actions/session_actions";

// TEST ACTIONS
// window.signup = signup;
// window.login = login;
// window.logout = logout;
// window.getState = store.getState;
// window.dispatch = store.dispatch;
//USER AUTH TESTING STOPS



//SERVER TESTING
// // TEST SERVER AJAX CALLS
// import * as serverAPIUtil from "./util/server_api_util"

// // TEST SERVER AJAX CALLS
// window.fetchServers = serverAPIUtil.fetchServers
// window.fetchServer = serverAPIUtil.fetchServer
// window.createServer = serverAPIUtil.createServer
// window.updateServer = serverAPIUtil.updateServer
// window.deleteServer = serverAPIUtil.deleteServer

// // TEST SERVER ACTIONS
// import {
//     requestServers,
//     requestServer,
//     createServer,
//     updateServer,
//     deleteServer,
//     joinServer,
//     leaveServer
// } from "./actions/server_actions"

// // TESTING START
// window.requestServers = requestServers;
// window.requestServer = requestServer;
// window.createServer = createServer;
// window.updateServer = updateServer;
// window.deleteServer = deleteServer;
// window.joinServer = joinServer;
// window.leaveServer = leaveServer;
// // TESTING END
//SERVER TESTING ENDS



//CHANNEL AJAX
// TEST AJAX CALLS
// import { login, logout, signup } from "./util/session_api_util";

// // TEST AJAX CALLS
// window.login = login;
// window.logout = logout;
// window.signup = signup;

