import React from 'react';
import './App.scss';

import Header from './components/Header/Header';
import TitlePage from './components/Title Page/TitlePage';

const App = () => {
    return (
        <div className="App">
            <Header />
            <TitlePage />
        </div>
    )
}

export default App;