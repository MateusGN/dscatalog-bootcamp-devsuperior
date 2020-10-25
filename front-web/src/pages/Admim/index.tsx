import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Categories from './components/Categories'
import NavBar from './components/NavBar'
import Products from './components/Products'
import Users from './components/Users'
import './style.scss'

const Admim = () => {
    return (
        <div className = 'admim-container'>
            <NavBar />
            <div className = 'admim-content'>
                <Switch>
                    <Route path='/admim/products'>
                        <Products />
                    </Route>
                    <Route path='/admim/categories'>
                        <Categories />
                    </Route>
                    <Route path='/admim/users'>
                        <Users />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}


export default Admim;
