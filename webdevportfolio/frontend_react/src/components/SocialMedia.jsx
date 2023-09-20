import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import {  FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href="https://github.com/rrahul08" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/rahul-r-7219501a1/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
            </a>
        </div>
      
       
        <div>
        <a href="https://www.instagram.com/the_first_class0518/?hl=en" target="_blank" rel="noopener noreferrer">
            <BsInstagram />
            </a>
        </div>
        <div>
        <a href="https://twitter.com/thefirstclass18" target="_blank" rel="noopener noreferrer">
            <BsTwitter />
            </a>
        </div>
        
    </div>
);

export default SocialMedia;