import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import useDownloadCart from '../../Cart/useDownloadCart';
import EmptyBag from './EmptyBag';
import BagWithItems from './BagWithItems';

import './Bag.scss';

const Bag = ({ colorTheme }) => {
    const [bagClassName, setBagClassName] = useState('bag__items');

    const userLogin = useSelector(state => state.user.login);
    useDownloadCart(userLogin);

    const userCart = useSelector(state => state.cart.downloadedItems);

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
        <div className="bag" ref={wrapperRef}>
            {userCart[0] ?
                <BagWithItems
                    colorTheme={colorTheme}
                    bagClassName={bagClassName}
                    toggleBagClassName={toggleBagClassName}
                    bag={userCart} /> :
                <EmptyBag
                    colorTheme={colorTheme}
                    bagClassName={bagClassName}
                    toggleBagClassName={toggleBagClassName} />}
        </div>
    )
}

export default Bag;