import React from 'react';
import { ConceptAdvertising } from '../concept-advertising/concept-advertising';
import { Menu } from '../menu/menu';
import './content-page.css';

export const ContentPage = () => {
    const reverse = false;
    const btnIsTrue = false;
    const listIsTrue = false;
    return (
        <div className='content-page__wrapper'>
            <Menu />
            <ConceptAdvertising
                reverse={reverse}
                btnIsTrue={btnIsTrue}
                listIsTrue={!listIsTrue} />
            <ConceptAdvertising
                reverse={!reverse}
                btnIsTrue={!btnIsTrue}
                listIsTrue={listIsTrue} />
            <ConceptAdvertising
                reverse={reverse}
                btnIsTrue={!btnIsTrue}
                listIsTrue={listIsTrue} />
         
        </div>
    )
}
