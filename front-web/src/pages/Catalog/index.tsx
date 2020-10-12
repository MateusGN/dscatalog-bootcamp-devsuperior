import React from 'react'
import ProductCard from './components/ProductCard'
import './style.scss'

const Catalog = () => {
    return (
        <div className='catalog-container'>
            <h1 className='catalog-title'>
                Caálogo de Produtos                 
            </h1>

            <div className='catalog-product'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

            </div>
        </div>
    );
}


export default Catalog;
