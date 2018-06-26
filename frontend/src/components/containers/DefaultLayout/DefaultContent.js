import React, { Component } from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import routes from "../../../routers";
import Login  from '../../pages/Login';
import { isLoggedIn } from '../../../utils/Auth';

class DefaultContent extends Component{

    renderComponent = (routes) => {
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
                { this.renderComponent(routes) }

                <Route path="/login" component={Login}/>
                <Redirect from="/" to="/dashboard" />
            </Switch>
        );
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isLoggedIn() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

export default DefaultContent;