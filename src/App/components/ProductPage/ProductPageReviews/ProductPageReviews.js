import React from 'react';
import './ProductPageReviews.scss';

import ProductLeaveReview from './ProductLeaveReview/ProductLeaveReview';
import ProductPageReviewItem from './ProductPageReviewItem';

const ProductPageReviews = ({ item }) => {
    let ProductPageReview;
    if (item.customerReviews) {
        ProductPageReview = Object.keys(item.customerReviews).reverse().map(key => {
            const review = item.customerReviews[key];
            return (
                <ProductPageReviewItem
                    key={key}
                    review={review} />
            )
        });
    }

    return (
        <div className="productPageReviews">
            <h2 className="productPageReviews__title">
                Customers reviews
            </h2>
            <ProductLeaveReview product={item} />
            <ul className="productPageReviews__wrapper">
                {ProductPageReview}
            </ul>
        </div>
    )
}

export default ProductPageReviews;