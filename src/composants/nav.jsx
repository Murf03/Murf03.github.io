import React from 'react';

import NavElm from './navElm';

import './composants.css';
import NavBtn from './navBtn';
import { useSelector } from 'react-redux';

//Home work infos

export default function Nav(props) {
    const navIsOpen = useSelector((state) => state.nav.open);

    const isNavOpen = 'nav-is-open';
    const isNavClosed = 'nav-is-closed';

    return <nav>
        <div className='nav-elm-btn'><NavBtn /></div>
        <ul className={navIsOpen ? isNavOpen : isNavClosed}>
            <li className='nav-elm-li'><NavElm id={0} name="Accueil" /></li>
            <li className='nav-elm-li'><NavElm id={1} name="Projets" /></li>
            <li className='nav-elm-li'><NavElm id={2} name="Infos" /></li>
        </ul>
    </nav>
}