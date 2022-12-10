import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';


export const ListItem = ({ children }) => {
    return (
        <li className='concept-advert__list-item'>
            <BsFillCheckCircleFill className='concept-advert__list-item-icon' />
            {children}
        </li>
    )
}
