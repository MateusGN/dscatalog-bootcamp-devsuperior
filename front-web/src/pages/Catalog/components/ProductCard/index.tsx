import React from 'react'
import './style.scss'
import {ReactComponent as ProductImage} from '../../../../core/assets/images/product.svg'
import ProductPrice from '../../../../core/components/ProductPrice'


const ProductCard = () => {
    return (
        <div className='card-base border-radius-10 product-card'>
            <ProductImage />
            <div className="product-info">
                <h6 className='product-name'>Computador Desktop - Intel Core i7</h6>
                <ProductPrice price='2779,00'/>
            </div>
        </div>
    );
}

export default ProductCard;