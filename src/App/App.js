import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import GoToTop from './components/GoToTop/GoToTop';
import TitlePage from './components/Title Page/TitlePage';
import Goods from './components/Goods/Goods';
import ShoesPage from './components/Goods/GoodsPages/ShoesPage';
import TshirtsPage from './components/Goods/GoodsPages/TshirtsPage';
import HoodiesPage from './components/Goods/GoodsPages/HoodiesPage';
import PantsPage from './components/Goods/GoodsPages/PantsPage';
import ProductPage from './components/ProductPage/ProductPage';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <GoToTop />
                <Switch>
                    <Route path="/" exact component={TitlePage} />
                    <Route path="/goods" exact component={Goods} />
                    <Route path="/shoes" exact component={ShoesPage} />
                    <Route path="/tshirts" exact component={TshirtsPage} />
                    <Route path="/hoodies" exact component={HoodiesPage} />
                    <Route path="/pants" exact component={PantsPage} />
                    <Route path="/product" component={ProductPage} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;