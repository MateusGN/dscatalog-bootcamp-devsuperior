import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import NavBar from './core/components/Navbar'
import Admim from './pages/Admim'
import Catalog from './pages/Catalog'
import ProductDetail from './pages/Catalog/components/ProductDetails'
import Home from './pages/Home'

const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/products" exact>
                    <Catalog />
                </Route>
                <Route path="/products/:productId">
                    <ProductDetail />
                </Route>
                <Redirect from="/admim" to="/admim/products" exact/>
                <Route path="/admim">
                    <Admim />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;