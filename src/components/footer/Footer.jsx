import React from 'react';
import { 
    FaFacebookF, FaInstagram, FaTwitter, FaLinkedin
} from 'react-icons/fa';

import ContentWrapper from '../contentWrapper/ContentWrapper';

import './footer.scss';

const Footer = ()=>{
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellat iste voluptas accusantium amet repudiandae laboriosam praesentium, libero nihil maiores temporibus incidunt. Perspiciatis, ut tempora nisi quam quia hic magnam.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF/>
                    </span>
                    <span className="icon">
                        <FaInstagram/>
                    </span>
                    <span className="icon">
                        <FaTwitter/>
                    </span>
                    <span className="icon">
                        <FaLinkedin/>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    ) 
}

export default Footer;