import React from 'react';
import './ProductPickASize.scss';

const ProductPickASize = ({ item, clickHandler, pickedSize }) => {

    const PickASize = () => {
        if (item.sizes) {
            return (
                item.sizes.map(size => {
                    const Input = () => {
                        if (pickedSize === size) {
                            return (
                                <input
                                    defaultChecked
                                    type="radio"
                                    value={size}
                                    name="size"
                                />
                            )
                        } else {
                            return (
                                <input
                                    type="radio"
                                    value={size}
                                    name="size"
                                />
                            )
                        }
                    }
                    return (
                        <div
                            key={size}
                            className="productPageAbout__pickSize-item"
                            onClick={clickHandler}>
                            <Input />
                            <label>{size}</label>
                        </div>
                    )
                })
            )
        } else {
            return false
        }
    }

    return (
        <div className="productPageAbout__pickSize">
            <p className="productPageAbout__pickSize-title">
                Pick a size (EU)
            </p>
            <div className="productPageAbout__pickSize-items-wrapper">
                <PickASize />
            </div>
        </div>
    )
}

export default ProductPickASize;