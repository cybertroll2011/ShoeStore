import React from 'react';
import { Link } from 'react-router-dom';
import './GoodsItemCard.scss';

const GoodsItemCard = ({ item }) => {
    return (
        <div className="goodsItemCard-wrapper">
            <Link to={"/" + item.type + "/" + item.id} className="goodsItemCard">
                <img src={item.photos[0]} alt="" className="goodsItem__photo" />
                <img src={item.photos[1]} alt="" className="goodsItem__photo-hidden" />
                <h3 className="goodsItem__name">
                    {item.brandName} {item.modelName}
                </h3>
                <p className="goodsItem__price">
                    {item.price}
                </p>
            </Link>
        </div>
    )
}

export default GoodsItemCard;