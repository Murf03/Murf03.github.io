import React from 'react';

import './composants.css';

function getExt(name) {
    const pngs = ["words", "biillz-app", "ls"];
    if (pngs.includes(name)) {
        return ".png";
    }
    return ".jpg";
}

export default function Thumb(props) {
    const ext = getExt(props.name);
    const fileName = '../images/' + props.name + ext;
    const alt = "Projet " + props.name;
    return <div className='thumb'>
        <img src={fileName} alt={alt} />
    </div>
}