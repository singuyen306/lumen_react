import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from "../../helpers/auth";

class DefaultHeader extends Component{

    onHandleClick = () => {
        logout();
    }

    render(){
        return (
            <header className="main-header">
                <Link to="/dashboard" className="logo">
                    <span className="logo-mini"><b>M</b>RS</span>
                    <span className="logo-lg"><b>MRS</b>Admin</span>
                </Link>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <span className="hidden-xs">Alexander Pierce</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="user-footer">
                                        <div className="pull-left">
                                            <a href="#" className="btn btn-default btn-flat">Profile</a>
                                        </div>
                                        <div className="pull-right">
                                            <button
                                                className="btn btn-default btn-flat"
                                                onClick={this.onHandleClick}
                                            >
                                                Sign out
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default DefaultHeader;