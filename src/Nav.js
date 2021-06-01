import { render } from '@testing-library/react';
import React,{ useState } from 'react';
import Menu from './Menu';
import './Nav.css';

const Nav = props => {
      
   
    return (
        <React.Fragment>
            <nav id="navbar">
                <div className="nav-wrapper">
                <p className="brand">
                    Athithnarayan 
                    <strong> G K</strong>
                </p>
                <a
                    onClick={props.toggleMenu}
                    className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
                >
                    <span />
                </a>
                </div>
            </nav>
    </React.Fragment>
    )
}

export default Nav
