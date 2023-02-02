import React from 'react';

import { BsPhone } from 'react-icons/bs';
import { FaServer } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';

import './composants.css';
import Techno from './techno';

function getIconFromType(type) {
    const fontSize = 23;
    const color = "#183B56";
    switch (type) {
        case "mobile":
            return (<BsPhone className='stack-icon' fontSize={fontSize} color={color} />);
        case "front":
            return (<MdComputer className='stack-icon' fontSize={fontSize} color={color} />);
        case "back":
            return (<FaServer className='stack-icon' fontSize={fontSize} color={color} />);
        default:
            break;
    }
}

function getTechnosFromType(type) {
    switch (type) {
        case "mobile":
            return ["React Native", "Flutter"];
        case "front":
            return ["React", "HTML", "CSS", "JS"];
        case "back":
            return ["Node.js", "Express", "MongoDB"];
        default:
            break;
    }
}

export default function StackElm(props) {
    const type = props.type;
    // const mobileTechnos = ["React Native", "Flutter"];
    // const frontTechnos = ["React", "HTML", "CSS", "JS"];
    // const backTechnos = ["Node.js", "Express", "MongoDB"];
    const icon = getIconFromType(type);
    const technos = getTechnosFromType(type);
    return <div className='stack-elm'>
        {icon}
        <p> - </p>
        <div className='technos'>
            {technos.map(e => <Techno name={e} />)}
        </div>
    </div>
}