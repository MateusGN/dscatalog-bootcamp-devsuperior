import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Form from './Form'
import List from './List'
import './style.scss'

const Products = () => {
    return (
        <div>
            <Switch>
                <Route path = '/admim/products' exact>
                    <List />
                </Route>
                <Route path = '/admim/products/create'>
                    <Form />
                </Route>
                <Route path = '/admim/products/:productId'>
                    <div>
                        PQP!!!
                    </div>
                </Route>
            </Switch>
        </div>
    );
}

export default Products;