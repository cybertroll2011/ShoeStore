import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserOrderItem = ({ orderId, cart, shipInfo, orderDate }) => {
    const [componentStatus, setComponentStatus] = useState('inactive');

    const toggleComponentStatus = () => {
        componentStatus === 'inactive' ? setComponentStatus('active')
            : setComponentStatus('inactive');
    }

    const purchasedItems = cart.map(cartItem => {
        if (componentStatus === 'inactive') {
            return (
                <Link
                    key={cartItem.orderId}
                    to={`/product/${cartItem.type}/${cartItem.productId}`}
                    className="userOrderItem__purchasedItem">
                    <img src={cartItem.photo} alt="" />
                </Link>
            )
        } else if (componentStatus === 'active') {
            return (
                <div
                    key={cartItem.orderId}
                    className="userOrderItem__purchasedItem">
                    <img src={cartItem.photo} alt="" />
                    <div className="userOrderItem__purchasedItem-info">
                        <p>
                            <span>Product: </span>
                            {cartItem.brandName} {cartItem.modelName}
                        </p>
                        <p>
                            <span>Price: </span>
                            {cartItem.price}
                        </p>
                        <p>
                            <span>Category: </span>
                            {cartItem.type}
                        </p>
                        <p>
                            <span>Color: </span>
                            {cartItem.color}
                        </p>
                        <p>
                            <span>Size: </span>
                            {cartItem.size}
                        </p>
                        <Link to={`/product/${cartItem.type}/${cartItem.productId}`}>
                            Product page
                        </Link>
                    </div>
                </div>
            )
        }
        return
    })

    if (componentStatus === 'inactive') {
        return (
            <li className="userOrderItem userOrderItem-inactive">
                <button
                    onClick={toggleComponentStatus}
                    className="userOrderItem__toggle"
                    title="show more">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z" />
                    </svg>
                </button>
                <div className="userOrderItem__section">
                    <h3 className="userOrderItem__section-title">
                        Order ID:
                    </h3>
                    <span>{orderId}</span>
                </div>
                <div className="userOrderItem__section">
                    <h3 className="userOrderItem__section-title">
                        Ship info:
                    </h3>
                    <div className="userOrderItem__section-shipInfo">
                        <span>{shipInfo.city}, </span>
                        <span>{shipInfo.country}, </span>
                        <span>{shipInfo.postalCode}</span>
                    </div>
                </div>
                <div className="userOrderItem__section">
                    <h3 className="userOrderItem__section-title">
                        Purchased items:
                    </h3>
                    <div className="userOrderItem__section-purchasedItems">
                        {purchasedItems}
                    </div>
                </div>
            </li>
        )
    } else if (componentStatus === 'active') {
        return (
            <li className="userOrderItem userOrderItem-active">
                <button
                    onClick={toggleComponentStatus}
                    className="userOrderItem__toggle"
                    title="hide">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrows-angle-contract" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z" />
                    </svg>
                </button>
                <div className="userOrderItem__section userOrderItem__orderId">
                    <h3 className="userOrderItem__section-title">
                        Order ID:
                    </h3>
                    <span>{orderId}</span>
                </div>
                <div className="userOrderItem__section">
                    <h3 className="userOrderItem__section-title">
                        Date:
                    </h3>
                    <span>{orderDate.day}, {orderDate.time}</span>
                </div>
                <div className="userOrderItem__section">
                    <h3 className="userOrderItem__section-title">
                        Ship info:
                    </h3>
                    <div className="userOrderItem__section-shipInfo">
                        <p>City: {shipInfo.city}</p>
                        <p>Country: {shipInfo.country}</p>
                        <p>Postal Code: {shipInfo.postalCode}</p>
                        <p>Name: {shipInfo.name}</p>
                        <p>E-mail: {shipInfo.email}</p>
                    </div>
                </div>
                <div className="userOrderItem__section">
                    <h3 className="userOrderItem__section-title">
                        Purchased items:
                    </h3>
                    <div className="userOrderItem__section-purchasedItems">
                        {purchasedItems}
                    </div>
                </div>
            </li>
        )
    }
}


export default UserOrderItem;