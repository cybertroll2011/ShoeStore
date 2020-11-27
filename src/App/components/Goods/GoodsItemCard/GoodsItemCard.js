import React from 'react';
import { Link } from 'react-router-dom';
import './GoodsItemCard.scss';

const GoodsItemCard = ({ item }) => {
    return (
        <div className="goodsItemCard-wrapper">
            <Link to={"/product/" + item.type + "/" + item.id} className="goodsItemCard">
                <div className="goodsItemCard__photo-wrapper">
                    <img src={item.photos[0]} alt="" className="goodsItemCard__photo" />
                    <img src={item.photos[1]} alt="" className="goodsItemCard__photo-hidden" />
                </div>
                
                <h3 className="goodsItemCard__name">
                    {item.brandName} {item.modelName}
                </h3>
                <p className="goodsItemCard__price">
                    {item.price}
                </p>
            </Link>
        </div>
    )
}

export default GoodsItemCard;