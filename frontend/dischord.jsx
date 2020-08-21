//React
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"



// TEST SERVER ACTIONS
import {
    requestServers,
    requestServer,
    createServer,
    updateServer,
    deleteServer
} from "./actions/server_actions"

// TESTING START
window.requestServers = requestServers;
window.requestServer = requestServer;
window.createServer = createServer;
window.updateServer = updateServer;
window.deleteServer = deleteServer;
// TESTING END

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

// window.createServer({ server_name: 'server4', owner_id: 1 })



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




//SERVER TESTING
// // TEST SERVER AJAX CALLS
// import * as serverAPIUtil from "./util/server_api_util"

// // TEST SERVER AJAX CALLS
// window.fetchServers = serverAPIUtil.fetchServers
// window.fetchServer = serverAPIUtil.fetchServer
// window.createServer = serverAPIUtil.createServer
// window.updateServer = serverAPIUtil.updateServer
// window.deleteServer = serverAPIUtil.deleteServer


