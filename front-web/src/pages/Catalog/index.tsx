import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { makeRequest } from '../../core/utils/request'
import ProductCard from './components/ProductCard'
import { ProductsResponse } from '../../core/types/Products'
import './style.scss'

const Catalog = () => {

    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();

    useEffect(() => {
        const params = {
            page: 0,
            linePerPage: 10,
        }
        makeRequest({ url: '/products', params }).then(response => setProductsResponse(response.data));
    }, []);
    return (
        <div className='catalog-container'>
            <h1 className='catalog-title'>
                Catálogo de Produtos
            </h1>
            <div className='catalog-product'>
                {productsResponse?.content.map(products => (
                    <Link to = {`/products/${products.id}`} key={products.id }>
                        <ProductCard product = {products}/>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Catalog;