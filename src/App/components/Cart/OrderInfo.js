import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFirebaseDatabase } from '../../firebase/firebase';
import { downloadItems } from '../../redux/cart/cartSlice';

import '../../toolsStyles/button.scss';

import PopUp from '../PopUp/PopUp';

const OrderInfo = ({ cart, shipInfo, switchComponents, activeComponent }) => {
    const [popUpStatus, setPopUpStatus] = useState(false);
    const [orderInfo, setOrderInfo] = useState('');

    const userLogin = useSelector(state => state.user.login);

    let totalPrice = 0;
    cart.map(item => {
        const price = Number(item.price.replace("$", ""));
        totalPrice = totalPrice + price;
    });

    useEffect(() => {
        setOrderInfo({ cart, shipInfo });
    }, [cart, shipInfo]);

    const BtnNext = () => (
        <button
            onClick={switchComponents}
            className="btn secondary-btn cart__switchComponents">
            Ship info
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
        </button>
    )

    const BtnPrev = () => (
        <button
            onClick={switchComponents}
            className="btn secondary-btn cart__switchComponents">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg>
            Cart items
        </button>
    )

    let showBuyBtn = [];
    Object.keys(shipInfo).map(key => {
        if (shipInfo[key].length === 0) {
            return showBuyBtn.push(true);
        }
    });

    const handleBuyClick = () => {
        const date = new Date();
        const orderDate = {
            day: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
            time: `${date.getHours()}:${date.getMinutes()}`
        }
        const orderInfoSend = { ...orderInfo, orderDate };
        getFirebaseDatabase().ref(`users/${userLogin}/orders`).push(orderInfoSend);
        getFirebaseDatabase().ref(`users/${userLogin}/cart`).remove();
        setPopUpStatus(true);
    }

    const closePopUp = () => {
        setPopUpStatus(false);
    }

    return (
        <div className="cart__orderInfo">
            {cart.length > 0 ?
                <>
                    <h2>Order info</h2>
                    <p>Total items: {cart.length}</p>
                    <p>Total price: ${totalPrice}</p>
                    <p>Full Name: {shipInfo.name}</p>
                    <p>E-mail: {shipInfo.email}</p>
                    <p>Country: {shipInfo.country}</p>
                    <p>City: {shipInfo.city}</p>
                    <p>Postal Code: {shipInfo.postalCode}</p>
                    <div className="cart__orderInfo-btn-wrapper">
                        {showBuyBtn.length === 0 ?
                            <>
                                <button
                                    className="btn main-btn cart__purchase"
                                    onClick={handleBuyClick}
                                >
                                    make a purchase
                                </button>
                            </> : null}
                        {activeComponent === 'CART_ITEMS' ? <BtnNext /> : <BtnPrev />}
                    </div>
                    <PopUp
                        showPopup={popUpStatus}
                        text={'Thanks for purchase!'}
                        handleCloseClick={closePopUp}
                    />
                </>
                : null
            }
        </div>
    )
}

export default OrderInfo;