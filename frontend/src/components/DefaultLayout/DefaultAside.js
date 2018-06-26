import React, {Component} from 'react';
import CustomNavLink from './CustomNavLink';

class DefaultAside extends Component{

    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu" data-widget="tree">
                        <CustomNavLink to="/companies" label="Quản lý công ty" icon="fa fa-files-o" />
                        <CustomNavLink to="/candidates" label="Quản lý ứng viên" icon="fa fa-files-o" />
                        <CustomNavLink to="/jobs" label="Quản lý jobs" icon="fa fa-files-o" />
                    </ul>
                </section>
            </aside>
        );
    }
}

export default DefaultAside;