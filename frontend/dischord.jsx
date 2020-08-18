//React
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";


// TEST AJAX CALLS
// import { login, logout, signup } from "./util/session_api_util";

//TEST ACTIONS
import {signup} from "./actions/session_actions";
import {login} from "./actions/session_actions";
import {logout} from "./actions/session_actions";


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    //TEST AJAX CALLS
    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;
    
    //TEST ACTIONS
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<h1>Welcome to Dischord</h1>, root);
});

// window.dispatch(signup({username: 'jaron3', password: 123456}))