import React from 'react';

import './composants.css';
import Logo from './logo';
import Nav from './nav';

export default function Header(props) {
    return <header id="home">
        <Logo name="MURF." />
        <Nav />
    </header>
}