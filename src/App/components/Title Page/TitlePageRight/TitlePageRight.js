import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './TitlePageRight.scss';

const TitlePageRight = ({ colorTheme }) => {
    return (
        <div className="titlePage__item-right">
            <Router>
                <Link to="/shoes/217145"
                    className="titlePage__item-link"
                    style={colorTheme.titleLinks}>
                    Nike LeBron 17
                    </Link>
                <Link to="/shoes/857548"
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
            </Router>
        </div>
    )
}

export default TitlePageRight;