import React from "react";
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import SessionForm from "./session_form/session_form";

//CONTAINERS
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";

const App = () => (
    <div>
        <header>
            <h1>Dischord</h1>
        </header>
        <Switch>
            <Route exact path="/login" component={LoginFormContainer}/>
            <Route exact path="/signup" component={SignupFormContainer}/>
        </Switch>
    </div>
);

export default App;