import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { makeRequest } from 'core/utils/request'
import ProductCard from './components/ProductCard'
import { ProductsResponse } from 'core/types/Products'
import './style.scss'
import ProductCardLoader from './components/Loaders/ProductCardLoader'
import Pagination from 'core/components/Pagination'

const Catalog = () => {
    const quantity = 10;
    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        const params = {
            page: activePage,
            linePerPage: quantity,
        }
        setIsLoading(true);

        makeRequest({ url: '/products', params })
            .then(response => setProductsResponse(response.data))
            .finally(() => {
                setIsLoading(false)
            })
    }, [activePage]);
    return (
        <div className='catalog-container'>
            <h1 className='catalog-title'>
                Catálogo de Produtos
            </h1>
            <div className='catalog-product'>
                {isLoading ? <ProductCardLoader quantity={quantity}/> : (
                    productsResponse?.content.map(products => (
                        <Link to={`/products/${products.id}`} key={products.id}>
                            <ProductCard product={products} />
                        </Link>
                    ))
                )}
            </div>
            {productsResponse && 
            <Pagination 
                pages={productsResponse.totalPages}
                activePage={activePage}
                onChange = {page => setActivePage(page)}
                />}
        </div>
    );
}

export default Catalog;