import React from 'react';
import { Button } from '../button/button';
import './product-card.css';

export const ProductCard = ({productIsNew, productIsSale}) => {

    return (
        <div className='product-card'>
            {productIsNew ? <div className='product-card__new'>New</div> : null}
            {productIsSale ? <div className='product-card__sale'>25% OFF</div> : null}
            <div className='product-card__image'>
            </div>
            <div className='product-card__name-price'>
                <div className='product-card__name'>
                    Potato
                </div>
                <div className='product-card__price'>
                    %25/<span>KG</span>
                </div>
            </div>
            <div className='product-card__description'>
                It is a long established fact that a reader will be distracted by.
            </div>
            <div className='product-card__btn-shop'>
                <Button
                    type={'primary'} size="s" >{'SHOP NOW'}
                </Button>
            </div>
        </div>
    )
}
