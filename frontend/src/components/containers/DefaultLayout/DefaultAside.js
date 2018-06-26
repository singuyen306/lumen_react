import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";

class DefaultAside extends Component{

    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu" data-widget="tree">
                        <ToolCVLink to="/companies" label="Quản lý công ty" icon="fa fa-files-o" />
                        <ToolCVLink to="/candidates" label="Quản lý ứng viên" icon="fa fa-files-o" />
                        <ToolCVLink to="/jobs" label="Quản lý jobs" icon="fa fa-files-o" />
                    </ul>
                </section>
            </aside>
        );
    }
}

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

export default DefaultAside;