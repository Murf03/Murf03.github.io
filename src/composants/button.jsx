import React from 'react';
import { HiOutlineEye, HiOutlineDownload } from 'react-icons/hi';

import './composants.css';

export default function Button(props) {
    const voir = (<a href="./CV_Murphy_Mbani.pdf" className='btn' target="_blank">
        Voir<HiOutlineEye className='btn-icon' fontSize={20} />
    </a>);
    const dl = (<a href="./CV_Murphy_Mbani.pdf" className='btn' download="CV_Murphy_Mbani">
        Télécharger<HiOutlineDownload className='btn-icon' fontSize={20} />
    </a>);
    return props.id === 0 ? voir : dl
}