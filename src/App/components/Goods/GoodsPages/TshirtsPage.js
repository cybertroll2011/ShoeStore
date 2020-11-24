import React from 'react';
import { useSelector } from 'react-redux';

import { addTshirtsData } from '../../../redux/goods/tshirtsSlice';
import { setLoadingStatus } from '../../../redux/goods/tshirtsSlice';
import useDownloadGoods from '../useDownloadGoods';

import '../Goods.scss';

import LoadingPlaceholder from '../../LoadingPlacerholder/LoadingPlaceholder';
import GoodsInnerTop from '../GoodsInnerTop/GoodsInnerTop';
import GoodsItemCard from '../GoodsItemCard/GoodsItemCard';
import Footer from '../../Footer/Footer';

const TshirtsPage = () => {
    const tshirtsData = useSelector(state => state.tshirts.tshirtsData);
    const loadingStatus = useSelector(state => state.tshirts.loadingStatus);

    useDownloadGoods(
        tshirtsData,
        '/goods/tshirts',
        loadingStatus,
        setLoadingStatus,
        addTshirtsData
    );

    const GoodsItems = tshirtsData.map(item => (
        <GoodsItemCard key={item.id} item={item} />
    ))


    return (
        <div className="goods">
            <div className="container">
                <div className="goods__inner">
                    <GoodsInnerTop />
                    <div className="goods__items-wrapper">
                        {GoodsItems.length > 0 ? GoodsItems :
                            <LoadingPlaceholder loadingStatus={loadingStatus} />}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TshirtsPage;