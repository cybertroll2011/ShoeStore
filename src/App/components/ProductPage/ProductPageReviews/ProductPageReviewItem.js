import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

const ProductPageReviewItem = ({ review }) => {
    const [reviewClassname, setReviewClassname] = useState('productPageReview__review');

    const toggleReview = (e) => {
        if (reviewClassname === 'productPageReview__review') {
            setReviewClassname(
                'productPageReview__review productPageReview__review-full'
            )
        } else if (reviewClassname ===
            'productPageReview__review productPageReview__review-full'
        ) {
            setReviewClassname('productPageReview__review')
        }
    }

    return (
        <li
            className="productPageReview">
            <span className="productPageReview__name">
                {review.name}
            </span>
            <span className="productPageReview__rating">
                <ReactStars
                    count={5}
                    value={review.productRating}
                    activeColor="#0F0F0F"
                    color="#747474"
                    size={16}
                    edit={false}
                />
            </span>
            <p className="productPageReview__date">
                {review.date}
            </p>
            <p
                className={reviewClassname}
                onClick={toggleReview}>
                {review.review}
            </p>
        </li>
    )
}

export default ProductPageReviewItem;