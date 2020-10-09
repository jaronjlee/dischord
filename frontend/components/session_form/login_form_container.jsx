import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
    return ({
        errors: state.errors.session,
        formType: 'login',
    })
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      processForm: (user) => dispatch(login(user)),
      login: (user) => dispatch(login(user)),
      clearErrors: (errors) => dispatch(clearErrors(errors)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
