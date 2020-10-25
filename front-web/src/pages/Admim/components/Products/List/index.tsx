import React from 'react'
import Buttons from '../../Buttons';
import './style.scss'

const List = () => {

    return (
        <div className='admim-products-list'>
            <Buttons link='/admim/products/create'/>
        </div>
    );
}

export default List;