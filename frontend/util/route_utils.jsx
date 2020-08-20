import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.id)
});

// <AuthRoute path="" component={}
//protect auth routes login/signup and redirect users to home page
const Auth = ({loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/"/> : <Component {...props}/>
        )}
    />
);

const Protected = ({ component: Component, path, loggedIn}) => (
    <Route 
        path={path}
        render={(props) => (
            loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        )} />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));