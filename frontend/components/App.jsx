import React from "react";
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

//CONTAINERS
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import HomeContainer from "./splash/splash_container"
import ServersIndexContainer from "./servers/servers_index_container"
import ServerShowContainer from "./servers/server_show_container"

//AUTH ROUTES
import {AuthRoute} from '../util/route_utils'
import {ProtectedRoute} from '../util/route_utils'

const App = () => (
  <div>
    {/* <Switch> */}
    <ProtectedRoute exact path="/" component={ServersIndexContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/servers" component={ServersIndexContainer} />
    {/* <ProtectedRoute path="/servers/:serverId" component={ServerShowContainer} /> */}
    {/* <ProtectedRoute path="/servers/:serverId/:channelId" component={ChannelShowContainer}/> */}
    {/* </Switch> */}
  </div>
);

export default App;