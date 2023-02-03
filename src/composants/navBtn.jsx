import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


import './composants.css';


export default function NavBtn(props) {
    const navIsOpen = useSelector((state) => state.nav.open);
    const dispatch = useDispatch();


    function toggleNav() {
        dispatch({
            type: "nav/toggleNav",
            payload: "no-need"
        });
    }


    const openNav = 'nav-btn';
    const closeNav = 'nav-btn-close';

    return <button onClick={() => toggleNav()}
        className={navIsOpen ? closeNav : openNav}>
        <span></span>
        <span></span>
        <span></span>
    </button>
}