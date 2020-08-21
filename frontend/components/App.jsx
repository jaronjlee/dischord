import React from "react";
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

//CONTAINERS
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import HomeContainer from "./home/home_container"
import ServersIndexContainer from "./servers/servers_index_container"
import ServerFormContainer from "./server_form/server_form_container"

//AUTH ROUTES
import {AuthRoute} from '../util/route_utils'
import {ProtectedRoute} from '../util/route_utils'

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
            <ProtectedRoute exact path="/servers" component={ServersIndexContainer}/>
            <ProtectedRoute exact path="/servers/new" component={ServerFormContainer}/>
        </Switch>
    </div>
);

export default App;