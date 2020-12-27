import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFirebaseDatabase } from '../../../firebase/firebase';
import { setUserData } from '../../../redux/user/userSlice';

import UserOrders from '../UserOrders/UserOrders';

import './UserAccount.scss';
import '../../../toolsStyles/button.scss';

const UserAccount = () => {
    const [userInfo, setUserInfo] = useState({});
    const [userOrders, setUserOrders] = useState();

    const login = useSelector(state => state.user.login);
    const dispatch = useDispatch();

    useEffect(() => {
        if (login !== '') {
            getFirebaseDatabase().ref(`users/${login}`).on('value', (data) => {
                let response = data.val();
                setUserInfo(response);
                setUserOrders(response.orders);
            });
        }
    }, [login]);

    return (
        <div className="userAccount">
            <h2>Your account:</h2>
            <div className="userAccount__item">
                <span>Login: </span> {login}
            </div>
            <div className="userAccount__item">
                <span>Name: </span> {userInfo.name}
            </div>
            <div className="userAccount__item">
                <span>Password: </span> {userInfo.password}
            </div>
            <button
                className="btn main-btn userAccount__logOut"
                onClick={() => {
                    dispatch(setUserData({
                        isLogedIn: false,
                        login: ""
                    }));
                }}
            >
                Log out
            </button>
            <UserOrders ordersList={userOrders} />
        </div>
    )
}

export default UserAccount;