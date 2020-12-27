import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFirebaseDatabase } from '../../firebase/firebase';
import { downloadItems } from '../../redux/cart/cartSlice';

const CartItem = ({ cartItem, cart }) => {
    const userLogin = useSelector(state => state.user.login);

    const dispatch = useDispatch();

    const removeItem = () => {
        let newCart = [];
        cart.map(item => {
            if (item.orderId !== cartItem.orderId) {
                newCart.push(item);
            }
        });
        if (userLogin !== "") {
            getFirebaseDatabase().ref(`users/${userLogin}/cart`).set(newCart);
            dispatch(downloadItems(newCart));
        }
    }

    return (
        <div className="cartItem">
            <div className="cartItem__info">
                <div className="cartItem__photo">
                    <img src={cartItem.photo} alt="" />
                </div>
                <div className="cartItem__info-right">
                    <p className="cartItem__name">
                        {cartItem.brandName} {cartItem.modelName}
                    </p>
                    <p className="cartItem__size">
                        Size: {cartItem.size}
                    </p>
                    <p className="cartItem__price">
                        {cartItem.price}
                    </p>
                </div>
            </div>
            <button
                className="cartItem__remove"
                onClick={removeItem}
                title="remove this item">
                remove
            </button>
        </div>
    )
}

export default CartItem;