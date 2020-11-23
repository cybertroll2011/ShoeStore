import React from 'react';
import { useSelector } from 'react-redux';

import { addGoodsData } from '../../redux/goods/goodsSlice';
import { setLoadingStatus } from '../../redux/goods/goodsSlice';
import useDownloadGoods from './useDownloadGoods';

import './Goods.scss';

import LoadingPlaceholder from '../LoadingPlacerholder/LoadingPlaceholder';
import GoodsInnerTop from './GoodsInnerTop/GoodsInnerTop';
import GoodsItemCard from './GoodsItemCard/GoodsItemCard';


const Goods = () => {
    const allGoodsData = useSelector(state => state.allGoods.allGoodsData);
    const loadingStatus = useSelector(state => state.allGoods.loadingStatus);

    useDownloadGoods(
        allGoodsData,
        '/goods',
        loadingStatus,
        setLoadingStatus,
        addGoodsData
    );

    const GoodsItems = allGoodsData.map(item => (
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

export default Goods;