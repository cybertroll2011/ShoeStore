import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';

//styled components
import Header from './components/Header/Header';
import GoToTop from './components/GoToTop/GoToTop';

//title page
import TitlePage from './components/Title Page/TitlePage';

// goods pages
import Goods from './components/Goods/Goods';
import ShoesPage from './components/Goods/GoodsPages/ShoesPage';
import TshirtsPage from './components/Goods/GoodsPages/TshirtsPage';
import HoodiesPage from './components/Goods/GoodsPages/HoodiesPage';
import PantsPage from './components/Goods/GoodsPages/PantsPage';
import ProductPage from './components/ProductPage/ProductPage';

// user
import User from './components/UserCabinet/UserCabinet';
import UserLogin from './components/UserCabinet/UserAccount/UserLogin/UserLogin';
import UserRegistration from './components/UserCabinet/UserAccount/UserRegistration/UserRegistration';

//user autologin using cookies
import useAutoLogin from './components/UserCabinet/UserAccount/UserLogin/useAutologin';

//cart
import Cart from './components/Cart/Cart';

const App = () => {
    useAutoLogin();
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
                    {/* <Route path="/product" render={() => <ProductPage />} /> */}
                    <Route path="/account" exact component={User} />
                    <Route path="/account/signin" exact component={UserLogin} />
                    <Route path="/account/registration" exact component={UserRegistration} />
                    <Route path="/cart" exact component={Cart} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;