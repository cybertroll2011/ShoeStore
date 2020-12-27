import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getFirebaseDatabase } from '../../../../firebase/firebase';
import { setUserData } from '../../../../redux/user/userSlice';

import './UserLogin.scss';
import '../../../../toolsStyles/button.scss';

const UserLogin = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showError, setShowError] = useState(false);

    const dispatch = useDispatch();
    const isLogedIn = useSelector(state => state.user.isLogedIn);

    const handleLoginInput = event => {
        setLogin(event.target.value.trim());
    }

    const handlePasswordInput = event => {
        setPassword(event.target.value);
    }

    const submitLoginForm = event => {
        event.preventDefault();
        if (login !== '' && password !== '') {
            getFirebaseDatabase().ref(`users/${login}`).on('value', (data) => {
                let response = data.val();

                if (response !== null && password === response.password) {
                    if (showError) {
                        setShowError(false);
                    }
                    dispatch(setUserData({
                        isLogedIn: true,
                        login: login
                    }));
                    Cookies.set('login', login);
                    Cookies.set('password', password);
                } else if (response === null) {
                    setShowError(true);
                    setErrorMessage(
                        'User with such nickname does not exist or password typed incorrectly.'
                    )
                    setTimeout(() => {
                        setErrorMessage('')
                    }, 5000)
                }
            });
        } else if (login === '' && password === '') {
            setShowError(true);
            setErrorMessage(
                "Fields 'login' and 'password' shouldn't be empty..."
            )
            setTimeout(() => {
                setErrorMessage('')
            }, 5000)
        }
    }

    const Error = () => (
        <div className="userLogin__error">
            {errorMessage}
        </div>
    )

    if (isLogedIn) {
        return (
            <Redirect to="/account" />
        )
    } else {
        return (
            <form className="userLoginForm">
                <input
                    type="text"
                    placeholder="login"
                    value={login}
                    onChange={handleLoginInput}
                    className="userLoginForm__input"
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={handlePasswordInput}
                    className="userLoginForm__input"
                />
                <button
                    type="submit"
                    onClick={submitLoginForm}
                    className="btn main-btn userLoginForm__submit"
                >
                    Sign In
                </button>
                {showError ? <Error /> : null}
            </form>
        )
    }
}

export default UserLogin;