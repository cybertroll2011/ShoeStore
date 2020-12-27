import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { getFirebaseDatabase } from '../../../../firebase/firebase';
import { downloadItems } from '../../../../redux/cart/cartSlice';

import './ProductBuy.scss';
import '../../../../toolsStyles/button.scss';

const ProductBuy = ({ item, pickedSize }) => {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.user.login);

    const handleBuyBtn = () => {
        const product = {
            orderId: nanoid(),
            brandName: item.brandName,
            color: item.color,
            productId: item.id,
            modelName: item.modelName,
            photo: item.photos[0],
            price: item.price,
            size: pickedSize,
            type: item.type
        }

        if (userLogin !== "") {
            // update user's account cart
            getFirebaseDatabase().ref(`users/${userLogin}/cart`).push(product);
        } else if (userLogin === "") {
            // update user's browser cart
            let storageCart = localStorage.getItem('cart');
            if (storageCart === "" || storageCart === null) {
                console.log(product);
                localStorage.setItem('cart', JSON.stringify(product));
                dispatch(downloadItems(product));
            } else {
                storageCart = JSON.parse(storageCart);
                let newStorageCart = [];
                if (storageCart[0]) {
                    storageCart.map(storageItem => {
                        return newStorageCart.push(storageItem);
                    });
                } else {
                    newStorageCart.push(storageCart);
                }
                newStorageCart.push(product);
                localStorage.setItem('cart', JSON.stringify(newStorageCart));
                dispatch(downloadItems(newStorageCart));
            }
        }
    }

    const BuyButton = () => {
        if (pickedSize !== '') {
            return (
                <button
                    onClick={handleBuyBtn}
                    className="btn main-btn">
                    Buy this product
                </button>
            )
        } else {
            return (
                <button
                    disabled
                    className="btn main-btn">
                    Pick a size
                </button>
            )
        }
    }

    return (
        <div className="productBuy__wrapper">
            <span className="productBuy__price">
                {item.price}
            </span>
            <BuyButton />
        </div>
    )
}

export default ProductBuy;