import React from 'react';

import './composants.css';

export default function Logo(props) {
    // return <div className='content'>
    //     <h2>MURPHY M</h2>
    //     <h2>MURPHY M</h2>
    // </div>

    return <svg className='svg' viewBox="0 0 960 300">
        <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="80%">{props.name}</text>
            <text text-anchor="middle" x="52%" y="80%">{props.name}</text>

        </symbol>

        <g class="g-ants">
            <use xlinkHref="#s-text" class="text-copy"></use>
            <use xlinkHref="#s-text" class="text-copy"></use>
            <use xlinkHref="#s-text" class="text-copy"></use>
            <use xlinkHref="#s-text" class="text-copy"></use>
            <use xlinkHref="#s-text" class="text-copy"></use>
            <use xlinkHref="#s-text" class="text-copy"></use>
        </g>
    </svg>
}