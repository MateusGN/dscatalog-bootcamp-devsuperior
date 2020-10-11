import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './core/components/Navbar'
import Admim from './pages/Admim'
import Catalog from './pages/Catalog'
import Home from './pages/Home'

const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/catalog">
                    <Catalog />
                </Route>
                <Route path="/admim">
                    <Admim />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;