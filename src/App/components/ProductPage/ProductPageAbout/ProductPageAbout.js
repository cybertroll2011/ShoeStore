import React, { useState } from 'react';
import './ProductPageAbout.scss';

import ProductPickASize from './ProductPickASize/ProductPickASize';
import ProductBuy from './ProductBuy/ProductBuy';

const ProductPageAbout = ({ item }) => {
    const [pickedSize, setPickedSize] = useState('');

    const hadnleSizeClick = event => {
        setPickedSize(event.target.value);
    }

    return (
        <div className="productPageAbout">
            <h2 className="productPageAbout__name">
                {item.brandName} {item.modelName}
            </h2>
            <p className="productPageAbout__color">
                Color: {item.color}
            </p>
            <ProductPickASize
                item={item}
                clickHandler={hadnleSizeClick}
                pickedSize={pickedSize}
            />
            <p className="productPageAbout__littleDescription">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo illum pariatur eum rem tenetur. Quaerat, culpa nam aut soluta ipsum dolorum eius eum libero. Explicabo accusantium consequuntur sapiente sed minus molestiae rerum a vitae illum voluptatum esse, quae beatae tempora id blanditiis itaque. Quis debitis minus delectus, voluptatum quisquam veniam!
            </p>
            <ProductBuy item={item} pickedSize={pickedSize} />
        </div>
    )
}

export default ProductPageAbout;