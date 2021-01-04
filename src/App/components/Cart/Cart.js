import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { changeColorTheme } from '../../redux/colorThemeSlice';

import CartItem from './CartItem';
import CartShipInfo from './CartShipInfo';
import OrderInfo from './OrderInfo';
import Footer from '../Footer/Footer';

import './Cart.scss';

const Cart = () => {
    const [activeComponent, setActiveComponent] = useState('CART_ITEMS');
    const [shipInfo, setShipInfo] = useState({
        name: "",
        email: "",
        country: "",
        city: "",
        postalCode: ""
    })

    const dispatch = useDispatch();
    dispatch(changeColorTheme({ colorTheme: "white" }));

    // get user cart items
    const userCartDownloaded = useSelector(state => state.cart.downloadedItems);
    let userCart = [];
    if (userCartDownloaded[0]) {
        Object.keys(userCartDownloaded[0]).map(key => {
            return userCart.push(userCartDownloaded[0][key]);
        })
    }
    const userCartItems = userCart.map(cartItem => (
        <CartItem key={cartItem.orderId} cartItem={cartItem} cart={userCart} />
    ))

    const EmptyCart = () => (
        <div className="emptyCart">
            <p>Your cart is empty</p>
            <Link to="/goods">Shop</Link>
        </div>
    )

    const switchComponents = () => {
        let newComponent =
            activeComponent === 'CART_ITEMS' ? 'SHIP_INFO' : 'CART_ITEMS';
        setActiveComponent(newComponent);
    }

    const handleInput = event => {
        setShipInfo({...shipInfo, [event.target.name]: event.target.value});
    }

    return (
        <section className="cart">
            <div className="container">
                <div className="cart__inner">
                    {activeComponent === 'CART_ITEMS' ?
                        <ul className="cartItems__wrapper">
                            {userCart.length > 0 ?
                                <>
                                    <h2>Your cart</h2>
                                    {userCartItems}
                                </> :
                                <EmptyCart />}
                        </ul> :
                        <CartShipInfo
                            shipInfo={shipInfo}
                            handleInput={handleInput}
                        />
                    }
                    <OrderInfo
                        cart={userCart}
                        shipInfo={shipInfo}
                        switchComponents={switchComponents}
                        activeComponent={activeComponent}
                    />
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Cart;