import React, { Component } from 'react';
import { isLoggedIn, logout, getAccessToken } from "../../utils/Auth";

class DefaultHeader extends Component{

    onHandleClick = () => {
        logout();
    }

    render(){
        return (
            <header className="main-header">
                <a href="" className="logo">
                    <span className="logo-mini"><b>T</b>CV</span>
                    <span className="logo-lg"><b>Tool</b>CV</span>
                </a>
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