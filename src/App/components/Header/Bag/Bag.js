import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './Bag.scss';

const Bag = ({ colorTheme }) => {
    const [bagClassName, setBagClassName] = useState('bag__items');

    const toggleBagClassName = event => {
        const target = event.target.className;
        if (target === 'bag__icon' || target === 'bag__link-to-goods') {
            if (bagClassName === 'bag__items') {
                setBagClassName('bag__items bag__items-active')
            } else if (bagClassName === 'bag__items bag__items-active') {
                setBagClassName('bag__items')
            }
        }
    }

    const useOutsideBag = (ref) => {
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setBagClassName('bag__items');
                }
            }

            document.addEventListener('click', handleClickOutside);
            return () => {
                document.removeEventListener('click', handleClickOutside)
            }
        }, [ref])
    }
    const wrapperRef = useRef(null);
    useOutsideBag(wrapperRef);

    return (
        <div className="bag" onClick={toggleBagClassName} ref={wrapperRef}>
            <button className="bag__icon" onClick={toggleBagClassName}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bag" fill={colorTheme.bag.backgroundColor} xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z" />
                </svg>
            </button>
            <div className={bagClassName}>
                <p>There are no items in your bag yet &#128532;</p>
                <Link to="/goods" className="bag__link-to-goods">Let's fix it!</Link>
            </div>
        </div>
    )
}

export default Bag;

// bag fill
/*
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bag-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
</svg>
*/