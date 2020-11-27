import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { changeColorTheme } from '../../redux/colorThemeSlice';
import { getFirebaseDatabase } from '../../firebase/firebase';

import './ProductPage.scss';
import ProductPagePhotos from './ProcutPagePhotos/ProductPagePhotos';
import ProductPageAbout from './ProductPageAbout/ProductPageAbout';
import ProductPageReviews from './ProductPageReviews/ProductPageReviews';
import Footer from '../Footer/Footer';

const ProductPage = () => {
    const [productItem, setProductItem] = useState({});

    const dispatch = useDispatch();
    dispatch(changeColorTheme({ colorTheme: 'white' }));

    const history = useHistory();
    const requestedUrl = history.location.pathname.replace("/product", "");

    useEffect(() => {
        getFirebaseDatabase().ref(`/goods${requestedUrl}`).on('value', (data) => {
            let response = data.val();
            setProductItem(response);
        });
    }, [requestedUrl]);

    return (
        <section className="productPage">
            <div className="container">
                <div className="productPage__inner">
                    <ProductPagePhotos item={productItem} />
                    <ProductPageAbout item={productItem} />
                    <ProductPageReviews item={productItem} />
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default ProductPage;