import React from 'react';

import './composants.css';

export default function Techno(props) {
    return <div className='techno'>
        <p className='techno-txt'>#{props.name}</p>
    </div>
}