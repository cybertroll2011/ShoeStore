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

    const spanBg = {
        backgroundColor: colorTheme.burgerMenuButton.color
    }

    return (
        <div className="sideMenu">
            <button
                className="toggleMenuButton"
                style={colorTheme.burgerMenuButton}
                onMouseMove={(event) => {
                    const spans = Array.from(event.target.children);
                    event.target.style.backgroundColor =
                        colorTheme.burgerMenuButton.hover.backgroundColor;
                    spans.map(span => {
                        return span.style.backgroundColor
                            = colorTheme.burgerMenuButton.hover.color;
                    })
                }}
                onMouseOut={(event) => {
                    const spans = Array.from(event.target.children);
                    event.target.style.backgroundColor =
                        colorTheme.burgerMenuButton.backgroundColor;
                    spans.map(span => {
                        return span.style.backgroundColor
                            = colorTheme.burgerMenuButton.color;
                    })
                }}
                onClick={() => {
                    if (navClassName === 'nav') {
                        setNavClassName('nav nav-active')
                    }
                }}
            >
                <span style={spanBg}></span>
                <span style={spanBg}></span>
                <span style={spanBg}></span>
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