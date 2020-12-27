import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColorTheme } from '../../redux/colorThemeSlice';

import UserRegistrationLinks from './UserRegistrationLinks/UserRegistrationLinks';
import UserAccount from './UserAccount/UserAccount';
import Footer from '../Footer/Footer';

import './UserCabinet.scss';

const User = () => {
    const dispatch = useDispatch();
    dispatch(changeColorTheme({ colorTheme: 'white' }));

    const isLogedIn = useSelector(state => state.user.isLogedIn);

    return (
        <section className="userCabinet">
            <div className="container">
                <div className="userCabinet__inner">
                    {isLogedIn ? <UserAccount /> : <UserRegistrationLinks />}
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default User;