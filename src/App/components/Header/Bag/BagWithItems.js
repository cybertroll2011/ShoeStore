import React from 'react';
import { Link } from 'react-router-dom';

import '../../../toolsStyles/button.scss';

const BagWithItems = ({
    colorTheme,
    bagClassName,
    toggleBagClassName,
    bag
}) => {

    const bagItems = Object.keys(bag[0]).map(key => {
        return (
            <li key={key} className="bagItem">
                <div className="bagItem__left">
                    <img src={bag[0][key].photo} alt="" />
                </div>
                <div className="bagItem__right">
                    <div className="bagItem__name">
                        {bag[0][key].brandName} {bag[0][key].modelName} ({bag[0][key].size})
                    </div>
                    <div className="bagItem__price">
                        {bag[0][key].price}
                    </div>
                </div>
            </li>
        )
    })

    return (
        <>
            <button className="bag__icon" onClick={toggleBagClassName}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bag-fill" fill={colorTheme.bag.backgroundColor} xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                </svg>
            </button>
            <div className={bagClassName}>
                <ul className="bag__items-wrapper">
                    {bagItems}
                </ul>
                <Link
                    to="/cart"
                    className="btn secondary-btn bag__cartLink">
                    Cart
                </Link>
            </div>
        </>
    )
}

export default BagWithItems;