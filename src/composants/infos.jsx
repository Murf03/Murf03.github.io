import React from 'react';

import './composants.css';
import StackElm from './stackElm';
import Button from './button';
import Socials from './socials';

export default function Infos(props) {
    const stacks = ["front", "mobile", "back"];
    return <div id='infos' className='infos-cv-bloc'>
        <div className='infos-cv'>
            <h3>Mes infos</h3>
            <div className='infos'>
                <div className='btns'>
                    <h3>CV</h3>
                    <Button id={0} />
                    <Button id={1} />
                </div>
                <div className='stacks'>
                    {stacks.map(e => <StackElm type={e} />)}
                </div>
            </div>
            <span></span>
            <p className='mail'>murphymbani@outlook.fr</p>
            <Socials />
        </div>
    </div>
}