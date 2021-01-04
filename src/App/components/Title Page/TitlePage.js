import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFirebaseDatabase } from '../../firebase/firebase';
import { setTitlePageItems } from '../../redux/titlePageSlice';
import { setLoadingStatus } from '../../redux/titlePageSlice';
import { colorThemesPack } from './titlePageColorThemesPack';

import TitlePageItem from './TitlePageItem';
import LoadingPlaceholer from '../LoadingPlacerholder/LoadingPlaceholder';

import './TitlePage.scss';

const TitlePage = () => {
    const [currentItem, setCurrentItem] = useState(0);
    const [touchStartPos, setTouchStartPos] = useState(0);

    const colorTheme = useSelector(state => state.colorTheme.colorTheme);
    const colorThemes = colorThemesPack;
    let currentColorTheme = colorThemes[colorTheme];

    const dispatch = useDispatch();
    const loadingStatus = useSelector(state => state.titlePageItems.loadingStatus);
    const titlePageItemsData = useSelector(state => state.titlePageItems.titlePageItems);

    useEffect(() => {
        if (loadingStatus === 'idle') {
            dispatch(setLoadingStatus('loading'));
            getFirebaseDatabase().ref('/titlePageItems').on('value', (data) => {
                let response = data.val().titlePageItems;
                dispatch(setTitlePageItems(response));
                dispatch(setLoadingStatus('succeeded'));
            });
        }
    }, [])

    const nextTitlePageItem = (index) => {
        setTimeout(() => {
            if (index < titlePageItemsData.length - 1) {
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

    const TitlePageItems = titlePageItemsData.map(item => {
        if (titlePageItemsData.indexOf(item) === currentItem) {
            return <TitlePageItem
                key={item.id}
                item={item}
                index={titlePageItemsData.indexOf(item)}
                titleItemsAmount={titlePageItemsData.length}
                handleWheelEvent={handleWheelEvent}
                handleTouchStart={handleTouchStart}
                handleTouchEnd={handleTouchEnd}
                colorTheme={currentColorTheme}
                nextTitlePageItem={nextTitlePageItem}
                prevTitlePageItem={prevTitlePageItem}
            />
        }
        return false
    })

    return (
        <div className="titlePage" style={currentColorTheme}>
            <div className="container">
                <div className="titlePage__inner">
                    {TitlePageItems.length > 0 ? TitlePageItems :
                        <LoadingPlaceholer loadingStatus={loadingStatus} />}
                </div>
            </div>
        </div>
    )
}

export default TitlePage;