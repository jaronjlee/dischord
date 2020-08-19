import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
    return ({
        errors: state.errors.session,
        formType: 'signup',
        navLink: <Link to="/login">log in</Link>,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (user) => dispatch(signup(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);