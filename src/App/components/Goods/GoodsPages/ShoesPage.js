import React from 'react';
import { useSelector } from 'react-redux';

import { addShoesData } from '../../../redux/goods/shoesSlice';
import { setLoadingStatus } from '../../../redux/goods/shoesSlice';
import useDownloadGoods from '../useDownloadGoods';

import '../Goods.scss';

import LoadingPlaceholder from '../../LoadingPlacerholder/LoadingPlaceholder';
import GoodsInnerTop from '../GoodsInnerTop/GoodsInnerTop';
import GoodsItemCard from '../GoodsItemCard/GoodsItemCard';


const ShoesPage = () => {
    const shoesData = useSelector(state => state.shoes.shoesData);
    const loadingStatus = useSelector(state => state.shoes.loadingStatus);

    useDownloadGoods(
        shoesData,
        '/goods/shoes',
        loadingStatus,
        setLoadingStatus,
        addShoesData
    );

    const GoodsItems = shoesData.map(item => (
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

export default ShoesPage;