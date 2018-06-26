import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";

const ToolCVLink = ({ label, to, activeOnlyWhenExact, icon }) => (
    <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
            <li className={match ? "active" : ""}>
                <Link to={to}>
                    <i className={icon}></i>
                    <span>{label}</span>
                </Link>
            </li>
        )}
    />
);

export default ToolCVLink;