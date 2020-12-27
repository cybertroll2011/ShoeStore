import React from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setUserData } from '../../../../redux/user/userSlice';

import './UserAccountSignOut.scss';
import '../../../../toolsStyles/button.scss';

const UserAccountSignOut = () => {

    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(setUserData({
            isLogedIn: false,
            login: null
        }));
        Cookies.set('login', '');
        Cookies.set('password', '');
        localStorage.setItem('cart', "");
    }

    return (
        <button
            onClick={signOut}
            className="userAccount__signOut btn secondary-btn"
        >
            Sign Out
        </button>
    )
}

export default UserAccountSignOut;