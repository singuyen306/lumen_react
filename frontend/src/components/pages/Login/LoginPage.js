import React, { Component } from 'react';
import logo from '../../../assets/images/logo.png';
import './Login.css';

class LoginPage extends Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
    }

    onHandleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    render() {
        return (
            <div className="login-box">
                <div className="login-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>

                    <form action="" method="post" onSubmit={this.handleSubmit}>
                        <div className="form-group has-feedback">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                autoFocus={true}
                                name="email"
                                value={this.state.email}
                                onChange={this.onHandleChange}
                            />
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onHandleChange}
                            />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block btn-flat">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginPage;