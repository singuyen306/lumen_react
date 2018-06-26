import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import DefaultHeader from './DefaultHeader';
import DefaultAside from './DefaultAside';
import DefaultContent from "./DefaultContent";
import { connect } from 'react-redux';

class DefaultLayout extends Component{

    render(){
        let { isAuthenticate } = this.props;

        return (
            <Router>
                { isAuthenticate ? (
                        <div className="wrapper">
                            <DefaultHeader />
                            <DefaultAside />
                            <DefaultContent />
                        </div>
                    ) : (
                        <DefaultContent />
                    )
                }
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticate: state.onLogin
    }
}

export default connect(mapStateToProps, null)(DefaultLayout);