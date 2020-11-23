import React from 'react';
import { useSelector } from 'react-redux';

import { addPantsData } from '../../../redux/goods/pantsSlice';
import { setLoadingStatus } from '../../../redux/goods/pantsSlice';
import useDownloadGoods from '../useDownloadGoods';

import '../Goods.scss';

import LoadingPlaceholder from '../../LoadingPlacerholder/LoadingPlaceholder';
import GoodsInnerTop from '../GoodsInnerTop/GoodsInnerTop';
import GoodsItemCard from '../GoodsItemCard/GoodsItemCard';

const PantsPage = () => {
    const pantsData = useSelector(state => state.pants.pantsData);
    const loadingStatus = useSelector(state => state.pants.loadingStatus);

    useDownloadGoods(
        pantsData,
        '/goods/pants',
        loadingStatus,
        setLoadingStatus,
        addPantsData
    );

    const GoodsItems = pantsData.map(item => (
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

export default PantsPage;