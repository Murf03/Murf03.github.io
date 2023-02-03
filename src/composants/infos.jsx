import React from 'react';

import './composants.css';
import StackElm from './stackElm';
import Button from './button';
import Socials from './socials';
import SocialLink from './SocialLink';

export default function Infos(props) {
    const stacks = ["front", "mobile", "back"];
    const mail = "murphymbani@outlook.fr";
    return <div id='infos' className='infos-cv-bloc'>
        <div className='infos-cv'>
            <h2>Mes infos</h2>
            <div className='infos'>
                <div className='btns'>
                    <h3>CV</h3>
                    <Button id={0} />
                    <Button id={1} />
                </div>
                <div className='stacks'>
                    {stacks.map(e => <StackElm key={e} type={e} />)}
                </div>
            </div>
            <span></span>
            <SocialLink social="mail" link={"mailto:" + mail} />
            <p className='mail'>{mail}</p>
            <Socials />
        </div>
    </div>
}