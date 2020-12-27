import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

import { getFirebaseDatabase } from '../../../../firebase/firebase';

import './ProductLeaveReview.scss';
import '../../../../toolsStyles/button.scss';

const ProductLeaveReview = ({ product }) => {
    const [review, setReview] = useState({ productRating: 0, review: "" });
    const [userFullName, setUserFullName] = useState('');
    console.log(product);

    const isUserLogedIn = useSelector(state => state.user.isLogedIn);
    const userLogin = useSelector(state => state.user.login);

    useEffect(() => {
        getFirebaseDatabase().ref(`users/${userLogin}/name`).on('value', data => {
            setUserFullName(data.val());
        });
    }, [userLogin]);

    const Login = () => (
        <div className="productLeaveReview__login">
            Please <Link to="/account">login or register now</Link> to leave a review
        </div>
    )

    const handleTextarea = event => {
        const el = event.target;
        el.style.height = el.scrollHeight + 'px';
        setReview(
            { ...review, review: event.target.value }
        )
    }

    const changeRating = event => {
        setReview(prevState => {
            return { ...prevState, productRating: event };
        })
    }

    const sendReview = event => {
        event.preventDefault();
        let newReview = review;
        const date = new Date();
        newReview.date = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        newReview.name = userFullName;
        console.log(newReview);
        getFirebaseDatabase().ref(`goods/${product.type}/${product.id}/customerReviews`).push(newReview);
    }

    const LeaveReview = (
        <form className="productLeaveReview" onSubmit={sendReview} >
            <p className="productLeaveReview__title">
                Leave a review
            </p>
            <ReactStars
                count={5}
                value={review.productRating}
                activeColor="#0F0F0F"
                color="#747474"
                size={16}
                onChange={changeRating}
            />
            <textarea
                value={review.review}
                onChange={handleTextarea}
                className="productLeaveReview__textarea">
            </textarea>
            <button
                type="submit"
                className="btn main-btn productLeaveReview__submit">
                Send
            </button>
        </form >
    );

    return (
        <div className="productLeaveReview__wrapper">
            {isUserLogedIn ? LeaveReview : <Login />}
        </div>
    )
}

export default ProductLeaveReview;