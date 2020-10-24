import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './style.scss'
import { ReactComponent as Setinha } from 'core/assets/images/Seta.svg'
import ProductPrice from 'core/components/ProductPrice';
import { makeRequest } from 'core/utils/request';
import { Product } from 'core/types/Products';
import ProductInfoLoader from '../Loaders/ProductInfoLoader';
import ProductDescriptionLoader from '../Loaders/ProductDescriptionLoader';

type ParamsType = {
    productId: string;
}

const ProductDetail = () => {

    const { productId } = useParams<ParamsType>();
    const [product, setProduct] = useState<Product>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `/products/${productId}` })
            .then(response => setProduct(response.data))
            .finally(() => setIsLoading(false));
    }, [productId]);

    return (
        <div className='product-details-container '>
            <div className='product-details card-base border-radius-20'>
                <Link to='/products' className='product-details-goback'>
                    <Setinha className='icon-goback' />
                    <h3 className='text-goback'>Voltar</h3>
                </Link>
                <div className='row'>
                    <div className="col-6 pr-5">
                        {isLoading ? <ProductInfoLoader /> : (
                            <>
                                <div className='product-details-card text-center'>
                                    <img src={product?.imgUrl} alt={product?.name} className='product-details-image' />
                                </div>
                                <h1 className='product-details-name'>{product?.name}</h1>
                                {product?.price && <ProductPrice price={product?.price} />}
                            </>
                        )}
                    </div>
                    <div className="col-6 product-details-card">
                        {isLoading ? <ProductDescriptionLoader /> : (
                            <>
                                <h1 className='product-description-title'>
                                    Descrição do Produto
                               </h1>
                                <p className='product-description-text'>
                                    {product?.description}
                                </p>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProductDetail;