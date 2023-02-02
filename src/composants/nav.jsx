import React from 'react';

import NavElm from './navElm';

import './composants.css';

//Home work infos

export default function Nav(props) {
    return <nav>
        <NavElm id={0} name="Accueil" />
        <NavElm id={1} name="Projets" />
        <NavElm id={2} name="Infos" />
    </nav>
}