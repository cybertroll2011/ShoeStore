import React from 'react';
import './ProductBuy.scss';

const ProductBuy = ({ item }) => {
    return (
        <div className="productBuy__wrapper">
            <span className="productBuy__price">
                {item.price}
            </span>
            <button className="productBuy__btn">
                Buy this product
            </button>
        </div>
    )
}

export default ProductBuy;