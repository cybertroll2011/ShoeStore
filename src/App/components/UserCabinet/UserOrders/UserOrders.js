import React from 'react';
import UserOrderItem from './UserOrderItem';

import './UserOrders.scss';

const UserOrders = ({ ordersList }) => {
    if (ordersList !== undefined && ordersList.length !== 0) {
        const userOrders = Object.keys(ordersList).reverse().map(orderId => {
            const orderInfo = ordersList[orderId];
            return (
                <UserOrderItem
                    key={orderId}
                    orderId={orderId}
                    cart={orderInfo.cart}
                    shipInfo={orderInfo.shipInfo}
                    orderDate={orderInfo.orderDate}
                />
            )
        })

        return (
            <div className="userAccount__orders">
                <h2>Your orders:</h2>
                <ul className="userOrdersList">
                    {userOrders}
                </ul>
            </div>
        )
    } else {
        return (
            <p>you havent purchased anything yet</p>
        )
    }
}

export default UserOrders;