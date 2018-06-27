import React, {Component} from 'react';
import CustomNavLink from './CustomNavLink';
import navLink from '../../routers/navLink';

class DefaultAside extends Component{

    showNavLink = navLink => {
        return navLink.map((nav, index) => {
            return (
                <CustomNavLink
                    key={index}
                    to={nav.to}
                    label={nav.label}
                    icon={nav.icon}
                />
            );
        });
    }

    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu" data-widget="tree">
                        { this.showNavLink(navLink) }
                    </ul>
                </section>
            </aside>
        );
    }
}

export default DefaultAside;