import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './Header.scss';
import { colorThemesPack } from './headerColorThemesPack';
import Navigation from './Navigation/Navigation.js';
import SearchField from './SearchField/SearchField';
import Logo from './Logo/Logo';
import Bag from './Bag/Bag';

const Header = () => {
    const colorTheme = useSelector(state => state.colorTheme.colorTheme);
    const colorThemes = colorThemesPack;
    let currentColorTheme = colorThemes[colorTheme];

    return (
        <Router>
            <header className="header" style={currentColorTheme}>
                <div className="container">
                    <div className="header__inner">
                        <div className="header__inner-left">
                            <Navigation colorTheme={currentColorTheme} />
                            <SearchField colorTheme={currentColorTheme} />
                        </div>
                        <div className="header__inner-center">
                            <Logo colorTheme={currentColorTheme} />
                        </div>
                        <div className="header__inner-right">
                            <Bag colorTheme={currentColorTheme} />
                        </div>
                    </div>
                </div>
            </header>
        </Router>
    )
}

export default Header;