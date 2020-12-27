import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFirebaseDatabase } from '../../../firebase/firebase';
import { addGoodsData } from '../../../redux/goods/goodsSlice';

import SearchedItem from './SearchedItem';
import './SearchField.scss';

const SearchField = ({ colorTheme }) => {
    const [searchComponentClassName, setSearchComponentClassName]
        = useState('searchComponent');
    const [inputValue, setInputValue] = useState('');
    const [downloadStatus, setDownloadStatus] = useState(false);

    const onInputValueChanged = e => {
        if (downloadStatus === true) {
            setInputValue(e.target.value);
        }
    }

    const dispatch = useDispatch();

    // get all goods data from database or redux store
    let allGoods = useSelector(state => state.allGoods.allGoodsData);
    useEffect(() => {
        if (searchComponentClassName === 'searchComponent searchComponent-active' &&
            allGoods.length === 0) {
            getFirebaseDatabase().ref('/goods').on('value', (data) => {
                let response = data.val();
                dispatch(addGoodsData(response));
                setDownloadStatus(true);
            });
        }
    });

    // filter data based on input value
    const searchingGoods = allGoods.filter(item => {
        const fullName = item.brandName.toLowerCase() + ' ' + item.modelName.toLowerCase();
        const comparableInputValue = inputValue.trim().toLowerCase();
        if (comparableInputValue.length > 0 && fullName.includes(comparableInputValue)) {
            return true
        }
        return false
    })

    // show filtered items to user
    const searchedItems = searchingGoods.map(item => (
        <SearchedItem key={item.id} item={item} />
    ))

    const showSearchField = () => {
        if (searchComponentClassName === 'searchComponent') {
            setSearchComponentClassName('searchComponent searchComponent-active');
        }
    }

    // hide search field if user clicked outside of it
    const useOutsideSearchField = (ref) => {
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setSearchComponentClassName('searchComponent');
                    setInputValue('');
                }
            }

            document.addEventListener('click', handleClickOutside);
            return () => {
                document.removeEventListener('click', handleClickOutside)
            }
        }, [ref])
    }
    const wrapperRef = useRef(null);
    useOutsideSearchField(wrapperRef);

    return (
        <div className={searchComponentClassName} ref={wrapperRef}>
            <div className="searchField__wrapper">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill={colorTheme.searchButton.backgroundColor} xmlns="http://www.w3.org/2000/svg" onClick={showSearchField}>
                    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                </svg>
                <input
                    type="text"
                    value={inputValue}
                    className="searchField"
                    onChange={onInputValueChanged} />
            </div>
            <ul className="searchedItems">
                {searchedItems}
            </ul>
        </div>
    )
}

export default SearchField;