import React, { useState } from 'react';
import LinksList from './LinksList';
import './Navigation.scss';

const Navigation = ({ colorTheme }) => {
    const [navClassName, setNavClassName] = useState('nav');

    const closeNav = () => {
        if (navClassName === 'nav nav-active') {
            setNavClassName('nav')
        }
    }

    return (
        <div className="sideMenu">
            <button
                className="toggleMenuButton"
                style={colorTheme.burgerMenuButton}
                onMouseMove={(event) => {
                    event.target.style.backgroundColor =
                        colorTheme.burgerMenuButton.hover.backgroundColor;
                    event.target.style.color =
                        colorTheme.burgerMenuButton.hover.color
                }}
                onMouseOut={(event) => {
                    event.target.style.backgroundColor =
                        colorTheme.burgerMenuButton.backgroundColor;
                    event.target.style.color =
                        colorTheme.burgerMenuButton.color
                }}
                onClick={() => {
                    if (navClassName === 'nav') {
                        setNavClassName('nav nav-active')
                    }
                }}
            >
                <span></span>
            </button>
            <div className="nav-wrapper">
                <nav className={navClassName}>
                    <LinksList colorTheme={colorTheme} closeNav={closeNav} />
                    <div
                        className="closeNav"
                        onClick={closeNav}>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;