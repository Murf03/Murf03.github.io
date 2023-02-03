import React from 'react';

import './composants.css';
const img = "../images/me.jpg";

export default function HomeDesc(props) {
    return <div id='#home-desc' className='home'>
        <span></span>
        <div className='home-div'>
            <div className='home-desc'>
                <p className='home-top'>Bonjour, je m'appelle</p>
                <h2>Murphy M. Mbani.</h2>
                <p className='home-bot'>Je suis Développeur web et mobile junior.<br />Bienvenu.e sur mon portfolio.</p>
            </div>
            <img src={img} alt='Murphy Mbani' />
        </div>
        <span></span>
    </div>
}