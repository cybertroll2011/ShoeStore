import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__inner-left">
                        <Link to="/"
                            className="footer__titlePageLink">
                            Shoes Shopping.
                        </Link>
                        <div className="footer__socialLinks">
                            <a
                                href="https://www.facebook.com"
                                target="blank"
                                className="footer__socialLinks-item">
                                facebook
                            </a>
                            <a
                                href="https://twitter.com/Ponasenkov"
                                target="blank"
                                className="footer__socialLinks-item">
                                twitter
                            </a>
                            <a
                                href="https://dribbble.com"
                                target="blank"
                                className="footer__socialLinks-item">
                                dribbble
                            </a>
                            <a
                                href="https://www.instagram.com"
                                target="blank"
                                className="footer__socialLinks-item">
                                instagram
                            </a>
                        </div>
                    </div>
                    <div className="footer__inner-right">
                        <a
                            href="https://drportfolio.web.app"
                            target="blank"
                            className="footer__link">
                            About Us
                        </a>
                        <a
                            href="https://drportfolio.web.app"
                            target="blank"
                            className="footer__link">
                            More Products
                        </a>
                        <a
                            href="https://drportfolio.web.app"
                            target="blank"
                            className="footer__link">
                            Contact Us
                        </a>
                        <a
                            href="https://drportfolio.web.app"
                            target="blank"
                            className="footer__link">
                            Portfolio
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;