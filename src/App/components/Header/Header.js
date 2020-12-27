import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useScrollRestoration from '../../useScrollRestoration';

import './Header.scss';
import { colorThemesPack } from './headerColorThemesPack';

import Navigation from './Navigation/Navigation.js';
import SearchField from './SearchField/SearchField';
import Logo from './Logo/Logo';
import Bag from './Bag/Bag';

const Header = () => {
    const [headerClassName, setHeaderClassName] = useState('header');
    useScrollRestoration();

    const colorTheme = useSelector(state => state.colorTheme.colorTheme);
    const colorThemes = colorThemesPack;
    let currentColorTheme = colorThemes[colorTheme];

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset >= 300 &&
                headerClassName === 'header') {
                setHeaderClassName('header header-fixed')
            } else if (window.pageYOffset < 300 &&
                headerClassName === 'header header-fixed') {
                setHeaderClassName('header')
            }
        }

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    });

    return (
        <header
            className={headerClassName}
            style={currentColorTheme}>
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
    )
}

export default Header;