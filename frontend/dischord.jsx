//React
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"

// TEST AJAX CALLS
// import { login, logout, signup } from "./util/session_api_util";

//TEST ACTIONS
import { signup } from "./actions/session_actions";
import { login } from "./actions/session_actions";
import { logout } from "./actions/session_actions";



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

    //TEST AJAX CALLS
    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;

    // TEST ACTIONS
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // window.dispatch(signup({username: 'jaron3', password: 123456}))

    //TESTING END

    ReactDOM.render(<Root store={store}/>, root);
});



