import React from 'react';
import { useSelector } from 'react-redux';

import { addHoodiesData } from '../../../redux/goods/hoodiesSlice';
import { setLoadingStatus } from '../../../redux/goods/hoodiesSlice';
import useDownloadGoods from '../useDownloadGoods';

import '../Goods.scss';

import LoadingPlaceholder from '../../LoadingPlacerholder/LoadingPlaceholder';
import GoodsInnerTop from '../GoodsInnerTop/GoodsInnerTop';
import GoodsItemCard from '../GoodsItemCard/GoodsItemCard';

const HoodiesPage = () => {
    const hoodiesData = useSelector(state => state.hoodies.hoodiesData);
    const loadingStatus = useSelector(state => state.hoodies.loadingStatus);

    useDownloadGoods(
        hoodiesData,
        '/goods/hoodies',
        loadingStatus,
        setLoadingStatus,
        addHoodiesData
    );

    const GoodsItems = hoodiesData.map(item => (
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
        </div>
    )
}

export default HoodiesPage;