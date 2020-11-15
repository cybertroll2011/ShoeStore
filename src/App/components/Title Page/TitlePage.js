import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFirebaseDatabase } from '../../firebase/firebase';
import { setTitlePageItems } from '../../redux/titlePageSlice';
import { setLoadingStatus } from '../../redux/goods/shoesSlice';
import { colorThemesPack } from './titlePageColorThemesPack';
import TitlePageItem from './TitlePageItem';

import './TitlePage.scss';

const TitlePage = () => {
    const [currentItem, setCurrentItem] = useState(0);
    const [touchStartPos, setTouchStartPos] = useState(0);

    const colorTheme = useSelector(state => state.colorTheme.colorTheme);
    const colorThemes = colorThemesPack;
    let currentColorTheme = colorThemes[colorTheme];

    const dispatch = useDispatch();
    const shoesDataStatus = useSelector(state => state.shoes.status);
    const shoesData = useSelector(state => state.titlePageItems);

    useEffect(() => {
        if (shoesDataStatus === 'idle') {
            dispatch(setLoadingStatus('loading'));
            getFirebaseDatabase().ref('/titlePageItems').on('value', (data) => {
                let response = data.val().titlePageItems;
                dispatch(setTitlePageItems(response));
                dispatch(setLoadingStatus('succeeded'));
            });
        }
    })

    const nextTitlePageItem = (index) => {
        setTimeout(() => {
            if (index < shoesData.length - 1) {
                setCurrentItem(index + 1)
            }
        }, 300)
    }

    const prevTitlePageItem = (index) => {
        setTimeout(() => {
            if (index > 0) {
                setCurrentItem(index - 1)
            }
        }, 300)
    }

    const handleWheelEvent = (event, itemIndex) => {
        if (event.deltaY >= 10) {
            nextTitlePageItem(itemIndex);
        } else if (event.deltaY <= -10) {
            prevTitlePageItem(itemIndex);
        }
    }

    const handleTouchStart = (event) => {
        setTouchStartPos(event.changedTouches[0].clientY);
    }

    const handleTouchEnd = (event, itemIndex) => {
        const touchEndPos = event.changedTouches[0].clientY;
        if ((touchStartPos - touchEndPos) > 10) {
            nextTitlePageItem(itemIndex);
        } else if ((touchEndPos - touchStartPos) > 10) {
            if (itemIndex > 0) {
                window.onbeforeunload = event => {
                    event.preventDefault();
                    event.returnValue = "";
                }
                setCurrentItem(itemIndex - 1);
            }
        }
    }

    const Loader = () => {
        if (shoesDataStatus === 'loading') {
            return (
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )
        }
        return false
    }
    const TitlePageItems = shoesData.map(item => {
        if (shoesData.indexOf(item) === currentItem) {
            return <TitlePageItem
                key={item.id}
                item={item}
                index={shoesData.indexOf(item)}
                titleItemsAmount={shoesData.length}
                handleWheelEvent={handleWheelEvent}
                handleTouchStart={handleTouchStart}
                handleTouchEnd={handleTouchEnd}
                colorTheme={currentColorTheme}
                nextTitlePageItem={nextTitlePageItem}
                prevTitlePageItem={prevTitlePageItem}
            />
        }
        return
    })

    return (
        <div className="titlePage" style={currentColorTheme}>
            <div className="container">
                <div className="titlePage__inner">
                    {TitlePageItems.length > 0 ? TitlePageItems : <Loader />}
                </div>
            </div>
        </div>
    )
}

export default TitlePage;