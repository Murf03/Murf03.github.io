import React from 'react';

import './composants.css';

export default function Indicator(props) {
    const isOk = props.link;
    const good = "indicator good";
    const bad = "indicator";
    const myClass = isOk ? good : bad;
    return <div className={myClass}>
    </div>
}