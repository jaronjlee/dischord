import React from "react";
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

//CONTAINERS
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import HomeContainer from "./home/home_container"

//AUTH ROUTES
import {AuthRoute} from '../util/route_utils'

const App = () => (
    <div>
        <header>
            <h1>App Header</h1>
        </header>
        <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
        </Switch>
    </div>
);

export default App;