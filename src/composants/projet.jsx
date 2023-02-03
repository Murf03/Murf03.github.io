import React from 'react';
import Thumb from './thumb';
import Techno from './techno';

import './composants.css';
import Indicator from './indicator';

export default function Projet(props) {
    const link = (props.link !== '' && props.link !== null && props.link !== undefined) ? props.link : null;
    return <a href={link} rel='noreferrer' target="_blank" className='projet'>
        <Thumb name={props.name} />
        <div className='projet-desc'>
            <span></span>
            <Indicator link={link !== null} />
            <div className='technos'>
                {props.technos.map(e => <Techno key={e} name={e} />)}
            </div>
            <p>{props.description}</p>
        </div>
    </a>
}