import React from 'react';

import './composants.css';
import SocialLink from './SocialLink';

//Home work infos

export default function Socials(props) {
    const linkedin = "https://www.linkedin.com/in/murphy-mbani/";
    return <div className='socials'>
        <SocialLink social="linkedin" link={linkedin} />
        {/* <SocialLink social="instagram" />
        <SocialLink social="facebook" /> */}
    </div>
}