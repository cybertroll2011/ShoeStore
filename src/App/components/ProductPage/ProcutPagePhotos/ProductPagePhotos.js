import React from 'react';
import './ProductPagePhotos.scss';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductPagePhotos = ({ item }) => {
    let images = [];
    if (item.photos) {
        item.photos.map(img => {
            return images.push(
                <img key={item.photos.indexOf(img)} src={img} alt="" />
            )
        })
    }

    const CarouselImages = () => (
        <Carousel
            swipeable={true}
            emulateTouch={true}
            showStatus={false}
            dynamicHeight={true}>
            {images}
        </Carousel>
    )

    return (
        <div className="productPagePhotos">
            <CarouselImages />
        </div>
    )
}

export default ProductPagePhotos;