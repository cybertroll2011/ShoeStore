import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { getFirebaseDatabase } from '../../../../firebase/firebase';
import { setUserData } from '../../../../redux/user/userSlice';

const UserRegistration = () => {
    const [login, setLogin] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();

    const isLogedIn = useSelector(state => state.user.isLogedIn);

    const handleLoginInput = event => {
        setLogin(event.target.value.trim());
    }

    const handleNameInput = event => {
        String.prototype.capitalize = function (allWords) {
            return (allWords) ? // if all words
                this.split(' ').map(word => word.capitalize()).join(' ') : //break down phrase to words then  recursive calls until capitalizing all words
                this.charAt(0).toUpperCase() + this.slice(1); // if allWords is undefined , capitalize only the first word , mean the first char of the whole string
        }
        let value = event.target.value.capitalize(true);
        setName(value);
    }

    const handlePasswordInput = event => {
        setPassword(event.target.value);
    }

    const newUser = {
        [login]: {
            name,
            password
        }
    }

    const submitRegistrationForm = event => {
        event.preventDefault();
        if (login.length >= 4 && login.length <= 32 &&
            password.length >= 6) {
            setErrorMessage('');
            getFirebaseDatabase().ref('users/').update(newUser);
            dispatch(setUserData({
                isLogedIn: true,
                login: login
            }));
            Cookies.set('login', login);
            Cookies.set('password', password);
        } else {
            console.log(false);
            setErrorMessage(
                'You have typed inappropriate login or password.'
            );
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
                    placeholder="login (4-32 symbols)"
                    value={login}
                    onChange={handleLoginInput}
                    className="userLoginForm__input"
                />
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={handleNameInput}
                    className="userLoginForm__input"
                />
                <input
                    type="text"
                    placeholder="password (minimum 6 symbols)"
                    value={password}
                    onChange={handlePasswordInput}
                    className="userLoginForm__input"
                />
                <button
                    type="submit"
                    onClick={submitRegistrationForm}
                    className="btn main-btn userLoginForm__submit"
                >
                    Sign Up
                </button>
                {errorMessage.length > 0 ? <Error /> : null}
            </form>
        )
    }
}

export default UserRegistration;