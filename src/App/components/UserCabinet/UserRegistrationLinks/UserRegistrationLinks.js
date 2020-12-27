import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import './UserRegistrationLinks.scss';

const UserRegistrationLinks = () => {
    return (
        <div className="userRegistrationLinks">
            <Link
                to="/account/signin"
                className="btn secondary-btn">
                Sign In
            </Link>
            <Link
                to="/account/registration"
                className="btn secondary-btn">
                Sign Up
            </Link>
        </div>
    )
}

export default UserRegistrationLinks;