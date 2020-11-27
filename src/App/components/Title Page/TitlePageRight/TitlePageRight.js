import React from 'react';
import { Link } from 'react-router-dom';
import './TitlePageRight.scss';

const TitlePageRight = ({ colorTheme }) => {
    return (
        <div className="titlePage__item-right">
            <Link to="/product/shoes/217145"
                className="titlePage__item-link"
                style={colorTheme.titleLinks}>
                Nike LeBron 17
                </Link>
            <Link to="/product/shoes/857548"
                className="titlePage__item-link"
                style={colorTheme.titleLinks}>
                Nike Jordan 'Why Not?' Zer0.3
                </Link>
            <Link to="/hoodies"
                className="titlePage__item-link"
                style={colorTheme.titleLinks}>
                Hoodies
                </Link>
            <Link to="/pants"
                className="titlePage__item-link"
                style={colorTheme.titleLinks}>
                Pants
                </Link>
        </div>
    )
}

export default TitlePageRight;