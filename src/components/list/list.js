import React from 'react';
import { ListItem } from '../list-item';
import './list.css';

export const List = () => {
    return (
        <ul className='concept-advert__list'>
            {['100% Natural', ' Super healthy', 'Premium quality', 'Incredible taste'].map((item) => {
                return <ListItem children={item} key={item} />
            })}
        </ul>
    )
}
