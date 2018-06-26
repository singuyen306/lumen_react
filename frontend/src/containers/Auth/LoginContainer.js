import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogin } from '../../actions';
import { LoginPage } from "../../components/pages";

class Login extends Component{

    constructor(props){
        super(props);
    }

    handleSubmit = (data) => {
        this.props.onLogin(data);
    }

    render() {
        let { from } = this.props.location.state || { from: { pathname: '/dashboard' } };

        {/* redirect to referrer page */}
        if(this.props.redirectToReferrer){
            return <Redirect to={from} />
        }

        return (
            <LoginPage
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        redirectToReferrer: state.onLogin
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogin: (data) => {
            dispatch(handleLogin(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);