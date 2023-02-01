import React from 'react';
import { GiFiles } from 'react-icons/gi';
import { SiHomeadvisor } from 'react-icons/si';
import { HiUser } from 'react-icons/hi';
import { BiMailSend, BiErrorCircle } from 'react-icons/bi';

import './composants.css';

function getID(id) {
    switch (id) {
        case 0:
            return "#home";
        case 1:
            return "#projets";
        case 2:
            return "#cv";
        case 3:
            return "#contact";
        default:
            return "#home";
    }
}

function getIcon(id) {
    switch (id) {
        case 0:
            return <SiHomeadvisor className='nav-icon' fontSize={22} fill='#183B56' />
        case 1:
            return <GiFiles className='nav-icon' fontSize={22} fill='#183B56' />
        case 2:
            return <HiUser className='nav-icon' fontSize={22} fill='#183B56' />
        case 3:
            return <BiMailSend className='nav-icon' fontSize={22} fill='#183B56' />
        default:
            return <BiErrorCircle className='nav-icon' fontSize={23} fill='#183B56' />
    }
}

export default function NavElm(props) {
    const link = getID(props.id);
    return <a href={link} className='nav-elm'>
        {getIcon(props.id)}
        <p className='nav-elm-txt'>{props.name}</p>
    </a>
}