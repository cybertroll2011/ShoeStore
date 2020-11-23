import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changeColorTheme } from '../../../redux/colorThemeSlice';
import './GoodsInnerTop.scss';

const GoodsInnerTop = () => {
    const [filterClassName, setFilterClassName] = useState('goods__inner-filter-wrapper');

    const dispatch = useDispatch();
    dispatch(changeColorTheme({ colorTheme: 'white' }));

    const toggleFilter = () => {
        if (filterClassName === 'goods__inner-filter-wrapper') {
            setFilterClassName(
                'goods__inner-filter-wrapper goods__inner-filter-wrapper-active'
            )
        } else {
            setFilterClassName(
                'goods__inner-filter-wrapper'
            )
        }
    }

    return (
        <div className="goods__inner-top">
            <div className="goods__inner-title">
                <h2>Our products</h2>
            </div>
            <div className={filterClassName}>
                <div className="goods__inner-filter">
                    <NavLink
                        to="/goods"
                        className="goods__inner-filter-link">
                        <span className="goods__inner-filter-link-bg"></span>
                        <span className="goods__inner-filter-link-text">
                            All goods
                    </span>
                    </NavLink>
                    <NavLink
                        to="/shoes"
                        className="goods__inner-filter-link">
                        <span className="goods__inner-filter-link-bg"></span>
                        <span className="goods__inner-filter-link-text">
                            Shoes
                    </span>
                    </NavLink>
                    <NavLink
                        to="/tshirts"
                        className="goods__inner-filter-link">
                        <span className="goods__inner-filter-link-bg"></span>
                        <span className="goods__inner-filter-link-text">
                            T-Shirts
                    </span>
                    </NavLink>
                    <NavLink
                        to="/hoodies"
                        className="goods__inner-filter-link">
                        <span className="goods__inner-filter-link-bg"></span>
                        <span className="goods__inner-filter-link-text">
                            Hoodies
                    </span>
                    </NavLink>
                    <NavLink
                        to="/pants"
                        className="goods__inner-filter-link">
                        <span className="goods__inner-filter-link-bg"></span>
                        <span className="goods__inner-filter-link-text">
                            Pants
                    </span>
                    </NavLink>
                </div>
                <button
                    onClick={toggleFilter}
                    className="goods__inner-filter-toggle">
                    <span className="goods__inner-filter-toggle-triangle">
                        triangle
                    </span>
                </button>
            </div>
        </div>
    )
}

export default GoodsInnerTop;