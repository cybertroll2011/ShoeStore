import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './Header.scss';
import { colorThemesPack } from './colorThemesPack';
import Navigation from './Navigation/Navigation.js';
import SearchField from './SearchField/SearchField';

const Header = () => {
    const colorTheme = useSelector(state => state.colorTheme.colorTheme);
    const colorThemes = colorThemesPack;
    let currentColorTheme = colorThemes[colorTheme];

    return (
        <Router>
            <header className="header" style={currentColorTheme}>
                <div className="container">
                    <div className="header__inner">
                        <Navigation colorTheme={currentColorTheme} />
                        <SearchField colorTheme={currentColorTheme} />
                    </div>
                </div>
            </header>
        </Router>
    )
}

export default Header;