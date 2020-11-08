import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFirebaseDatabase } from './firebase/firebase';
import { addShoesData } from './redux/goods/shoesSlice';
import { changeColorTheme } from './redux/colorThemeSlice';

import './App.scss';

import Header from './components/Header/Header';
import TitlePage from './components/Title Page/TitlePage';

const App = () => {
    const dispatch = useDispatch();
    const shoesDataStatus = useSelector(state => state.shoes.status);

    useEffect(() => {
        getFirebaseDatabase().ref().on('value', (data) => {
            let response = data.val()[0];
            dispatch(addShoesData({ shoesData: response }));
            dispatch(changeColorTheme({ colorTheme: "blue"}));
        });
    })

    return (
        <div className="App">
            <Header />
            <TitlePage />
        </div>
    )
}

export default App;