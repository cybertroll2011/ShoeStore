import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

import './ProductLeaveReview.scss';

const ProductLeaveReview = () => {
    const isUserLogedIn = true;

    const Login = () => (
        <div className="productLeaveReview__login">
            Please <Link to="/account">login or register now</Link> to leave a review
        </div>
    )

    const LeaveReview = () => (
        <form className="productLeaveReview">
            <p className="productLeaveReview__title">
                Leave a review
            </p>
            <ReactStars
                count={5}
                value={0}
                activeColor="#0F0F0F"
                color="#747474"
                size={16}
            />
            <textarea
                onChange={resizeTextarea}
                className="productLeaveReview__textarea">
            </textarea>
            <button
                type="submit"
                className="productLeaveReview__submit"
                onClick={e => e.preventDefault()}>
                Send
            </button>
        </form>
    )

    const resizeTextarea = event => {
        const el = event.target;
        el.style.height = el.scrollHeight + 'px';
    }

    return (
        <div className="productLeaveReview__wrapper">
            {isUserLogedIn ? <LeaveReview /> : <Login />}
        </div>
    )
}

export default ProductLeaveReview;