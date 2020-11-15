import React from 'react';
import { useDispatch } from 'react-redux';
import { changeColorTheme } from '../../redux/colorThemeSlice';
import TitlePageLeft from './TitlePageLeft/TitlePageLeft';
import TitlePageRight from './TitlePageRight/TitlePageRight';

const TitlePageItem = (
    {
        item,
        index,
        titleItemsAmount,
        handleWheelEvent,
        handleTouchStart,
        handleTouchEnd,
        colorTheme,
        prevTitlePageItem,
        nextTitlePageItem
    }) => {

    const dispatch = useDispatch();
    dispatch(changeColorTheme({ colorTheme: item.colorTheme }));

    return (
        <div
            className="titlePage__item"
            onWheel={event => handleWheelEvent(event, index)}
        >
            <div className="titlePage__item-name">{item.modelName}</div>
            <TitlePageLeft
                item={item}
                index={index}
                titleItemsAmount={titleItemsAmount}
                prevTitlePageItem={prevTitlePageItem}
                nextTitlePageItem={nextTitlePageItem}
                colorTheme={colorTheme}
            />
            <div className="titlePage__item-middle">
                <img src={item.photo} alt=""
                    onTouchStart={handleTouchStart}
                    onTouchEnd={event => handleTouchEnd(event, index)} />
            </div>
            <TitlePageRight colorTheme={colorTheme} />
        </div>
    )
}

export default TitlePageItem;