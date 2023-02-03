import React from 'react';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

import './composants.css';

function getSocialIcon(social) {
    const linkedin = (<FaLinkedinIn className='social-icon' />);
    const insta = (<FaInstagram className='social-icon' />);
    const fb = (<FaFacebookF className='social-icon' />);
    const mail = (<BiMailSend className='social-icon' />);

    switch (social) {
        case "linkedin":
            return linkedin;
        case "instagram":
            return insta;
        case "facebook":
            return fb;
        case "mail":
            return mail;
        default:
            break;
    }
}

//Home work infos
export default function SocialLink(props) {
    const target = props.social === "mail" ? null : "_blank";
    const social = getSocialIcon(props.social);
    const link = (props.link !== '' && props.link !== null && props.link !== undefined) ? props.link : null;
    return <a href={link} rel='noreferrer' target={target} className='social'>
        {social}
    </a>
}