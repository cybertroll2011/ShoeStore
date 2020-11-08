import React from 'react';
import { Link } from 'react-router-dom';

const SearchedItem = ({ item }) => {
    return (
        <li className="searchedItem">
            <Link to={'/' + item.type + '/' + item.id}>
                <div className="searchedItem__left">
                    <img src={item.photos[0]} alt="" />
                </div>
                <div className="searchedItem__right">
                    <div className="searchedItem__name">
                        {item.brandName} {item.modelName}
                    </div>
                    <div className="searchedItem__price">
                        {item.price}
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default SearchedItem;