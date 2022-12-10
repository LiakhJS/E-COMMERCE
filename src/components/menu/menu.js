import React from 'react';
import { ProductsList } from '../products-list/products-list';
import './menu.css';

export const Menu = () => {
    return (
        <div className='menu__wrapper'>
            <div className='menu__title'>Our popular menu
            </div>
            <ProductsList />
        </div>
    )
}
