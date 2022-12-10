import React from 'react';
import { ProductCard } from '../product-card';
import './products-list.css';

export const ProductsList = () => {
    const productIsSale = false;
    const productIsNew = false;
    return (
        <div className='products-list'>
        {/* {[1,2,3,4,5,6,7,8].map((item)=> {
        return <ProductCard
        productIsNew={!productIsNew} index={item}/>
        })} */}
            <ProductCard
                productIsNew={!productIsNew} />
            <ProductCard />
            <ProductCard
                productIsSale={!productIsSale} />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard
                productIsNew={!productIsNew} />
            <ProductCard
                productIsSale={!productIsSale} />
        </div>


    )
}
