import React from 'react';

import './composants.css';
import Projet from './projet';

export default function Projets(props) {
    return <div id='projets' className='projets-div'>
        <h2>Mes Projets</h2>
        <div className='indicator-info'>
            <div className='indicator-info-logo'></div>
            <p className='indicator-info-txt'>Projet cliquable : Ouvre une nouvelle fenêtre vers le projet</p>
        </div>
        <div className='projets'>
            <Projet name="biillz" link="https://biillz.com" technos={["HTML", "CSS", "JS"]} description="Site pour présenter l'application mobile biillz" />
            <Projet name="biillz-app" link="https://play.google.com/store/apps/details?id=com.biillz&gl=FR" technos={["React Native"]} description="Application mobile pour tickets de caisses" />
            <Projet name="kasa" link="https://murf03.github.io/projet-7" technos={["React", "CSS"]} description="Site pour plateforme de location apparts" />
            <Projet name="panetiere" link="https://murf03.github.io/projet-4/" technos={["HTML", "CSS", "JS"]} description="Projet SEO et corrections de bugs" />
            <Projet name="words" technos={["Flutter"]} description="Projet Personnel : Mots Mêlés/Mots Croisés" />
            <Projet name="ls" technos={["Flutter"]} description="Projet Personnel : Partage d'histoires courtes" />
        </div>
    </div>
}