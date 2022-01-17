import React from 'react';
import "./Footer.scss"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

export default function Footer() {
    
    return (
       
        <footer className="footer">
            <div className="container">
                <div className="footer__socials">
                    <a href="#" className="footer__social">
                        <LinkedInIcon />
                    </a>
                    <a href="#" className="footer__social">
                        <GitHubIcon />
                    </a>
                    <a href="#" className="footer__social">
                        <MailIcon />
                    </a>
                </div>
                <ul className="footer__links">
                    <li className="footer__link">
                        <a href="#" className="footer__link">link</a>
                    </li>
                    <li className="footer__link">
                        <a href="#" className="footer__link">link</a>
                    </li>
                    <li className="footer__link">
                        <a href="#" className="footer__link">link</a>
                    </li>
                    <li className="footer__link">
                        <a href="#" className="footer__link">link</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}


