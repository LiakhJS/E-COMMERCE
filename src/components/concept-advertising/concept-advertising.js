import React from 'react';
import './concept-advertising.css';
import { Button } from '../button/button';
import { List } from '../list';
import { AdvertInform } from '../advert-inform';

export const ConceptAdvertising = ({ reverse, btnIsTrue, listIsTrue }) => {
    return (
        <div className={reverse ? 'concept-advert__wrapper' : 'concept-advert__wrapper reverse'} >
            <div className={reverse ? 'concept-advert__img' : 'concept-advert__img reverse'} >
            </div>
            <div className='concept-advert'>
                <AdvertInform />
                {listIsTrue ? <List /> : null}
                {btnIsTrue ? <div className='concept-advert__btn'>
                    <Button
                        type={'primary'} size="m" >{'SHOP NOW'}
                    </Button>
                </div> : null}

            </div>
        </div>
    )
}
