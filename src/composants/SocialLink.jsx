import React from 'react';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';

import './composants.css';

function getSocialIcon(social) {
    const linkedin = (<FaLinkedinIn className='social-icon' />);
    const insta = (<FaInstagram className='social-icon' />);
    const fb = (<FaFacebookF className='social-icon' />);

    switch (social) {
        case "linkedin":
            return linkedin;
        case "instagram":
            return insta;
        case "facebook":
            return fb;
        default:
            break;
    }
}

//Home work infos
export default function SocialLink(props) {
    const social = getSocialIcon(props.social);
    const link = (props.link !== '' && props.link !== null && props.link !== undefined) ? props.link : null;
    return <a href={link} rel='noreferrer' target="_blank" className='social'>
        {social}
    </a>
}