import { connect } from 'react-redux';
import React from 'react';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
    return ({
        errors: state.errors.session,
        formType: 'signup',
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      processForm: (user) => dispatch(signup(user)),
      clearErrors: (errors) => dispatch(clearErrors(errors)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
