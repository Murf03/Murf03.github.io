import React from 'react';

import './composants.css';

export default function Logo(props) {

    return <svg className='svg' viewBox="0 0 960 300">
        <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="80%">{props.name}</text>
            <text textAnchor="middle" x="52%" y="80%">{props.name}</text>

        </symbol>

        <g className="g-ants">
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
        </g>
    </svg>
}