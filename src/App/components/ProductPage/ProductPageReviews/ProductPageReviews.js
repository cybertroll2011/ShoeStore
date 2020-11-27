import React from 'react';
import './ProductPageReviews.scss';

import ProductLeaveReview from './ProductLeaveReview/ProductLeaveReview';
import ProductPageReviewItem from './ProductPageReviewItem';

const ProductPageReviews = ({ item }) => {
    let ProductPageReview;
    if (item.customerReviews) {
        let reviews = item.customerReviews.reverse();
        ProductPageReview = reviews.map(review => (
            <ProductPageReviewItem
                key={item.id + item.customerReviews.indexOf(review)}
                review={review} />
        ))
    }

    return (
        <div className="productPageReviews">
            <h2 className="productPageReviews__title">
                Customers reviews
            </h2>
            <ProductLeaveReview />
            <ul className="productPageReviews__wrapper">
                {ProductPageReview}
            </ul>
        </div>
    )
}

export default ProductPageReviews;