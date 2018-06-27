import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "../../routers/index";
import PrivateRoute from '../../routers/PrivateRoute';
import { LoginContainer } from "../../containers";

class DefaultContent extends Component{

    showComponentContent = (routes) => {
        return routes.map((route, index) => (
            <PrivateRoute
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
            />
        ));
    }

    render() {
        return (
            <Switch>
                { this.showComponentContent(routes) }

                <Route path="/login" component={LoginContainer}/>
                <Redirect from="/" to="/dashboard" />
            </Switch>
        );
    }
}

export default DefaultContent;