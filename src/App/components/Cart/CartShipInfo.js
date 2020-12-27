import React from 'react';

const CartShipInfo = ({ shipInfo, handleInput }) => {
    return (
        <fieldset className="cart__shipInfo">
            <h2>Ship Info</h2>
            <input
                type="text"
                name="name"
                value={shipInfo.name}
                placeholder="Full name"
                onChange={handleInput}
            />
            <input
                type="email"
                name="email"
                value={shipInfo.email}
                placeholder="E-mail"
                onChange={handleInput}
            />
            <input
                type="text"
                name="country"
                value={shipInfo.country}
                placeholder="Country"
                onChange={handleInput}
            />
            <input
                type="text"
                name="city"
                value={shipInfo.city}
                placeholder="City"
                onChange={handleInput}
            />
            <input
                type="text"
                name="postalCode"
                value={shipInfo.postalCode}
                placeholder="Postal code"
                onChange={handleInput}
            />
        </fieldset>
    )
}

export default CartShipInfo;