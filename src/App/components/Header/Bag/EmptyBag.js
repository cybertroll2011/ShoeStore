import React from 'react';
import { Link } from 'react-router-dom';

const EmptyBag = ({
    colorTheme,
    bagClassName,
    toggleBagClassName
}) => {
    return (
        <>
            <button className="bag__icon" onClick={toggleBagClassName}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bag" fill={colorTheme.bag.backgroundColor} xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z" />
                </svg>
            </button>
            <div className={bagClassName}>
                <div className="bag__items-empty">
                    <p>
                        There are no items in your bag yet
                        <span role="img" aria-label="sad emoji">
                            &#128532;
                        </span>
                    </p>
                    <Link to="/goods" className="bag__link-to-goods">Let's fix it!</Link>
                </div>
            </div>
        </>
    )
}

export default EmptyBag;