import React from 'react';

import './composants.css';

export default function Footer(props) {
    return <footer>
        <div className='footer-top'>
            <a href='#home' className='back-top'>Retourner en haut</a>
        </div>
        <div className='footer-bot'>
            <p className='copyright'>© Murphy Mbani</p>
            <p className='year'>2023</p>
        </div>
    </footer>
}