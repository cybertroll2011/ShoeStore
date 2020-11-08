import React from 'react';
import { Link } from "react-router-dom";

const LinksList = ({ colorTheme, closeNav }) => {

    const CustomNavLink = (link) => (
        <li
            style={colorTheme.navigationMenu.navigationMenuLink}
            className="customNavLink"
            onClick={closeNav}
            onMouseMove={(event) => {
                event.target.style.backgroundColor =
                    colorTheme.navigationMenu.navigationMenuLink.hover.backgroundColor
            }}
            onMouseOut={(event) => {
                event.target.style.backgroundColor =
                    colorTheme.navigationMenu.navigationMenuLink.backgroundColor
            }}
        >
            {link.children}
        </li>
    )

    return (
        <ul className="nav__linkslist" style={colorTheme.navigationMenu}>
            <CustomNavLink>
                <Link to="/" className="nav__link">Home</Link>
            </CustomNavLink>
            <CustomNavLink>
                <Link to="/goods" className="nav__link">Goods</Link>
            </CustomNavLink>
            <CustomNavLink>
                <Link to="/shoes" className="nav__link">Shoes</Link>
            </CustomNavLink>
            <CustomNavLink>
                <Link to="/tshirt" className="nav__link">T-Shirts</Link>
            </CustomNavLink>
            <CustomNavLink>
                <Link to="/hoodie" className="nav__link">Hoodie</Link>
            </CustomNavLink>
            <CustomNavLink>
                <Link to="/pants" className="nav__link">Pants</Link>
            </CustomNavLink>
            <CustomNavLink>
                <Link to="/account" className="nav__link">Account</Link>
            </CustomNavLink>
            <CustomNavLink>
                <Link to="/cart" className="nav__link">Cart</Link>
            </CustomNavLink>
        </ul>
    )
}

export default LinksList;