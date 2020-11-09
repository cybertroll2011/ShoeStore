import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = ({ colorTheme }) => {
    return (
        <div className="logo">
            <Link to="/" className="logo__mainLink" style={colorTheme.logo.mainColor}>
                Shoes Shopping.
                <div
                    className="logo__mainLink-extraColor"
                    style={colorTheme.logo.colorOnHover}>
                    <p>Shoes Shopping.</p>
                </div>
            </Link>
            <div className="logo__linkOnHover">
                <Link to="/" style={colorTheme.logo.colorOnHover} >
                    Shoes Shopping.
                </Link>
            </div>
        </div>
    )
}

export default Logo;