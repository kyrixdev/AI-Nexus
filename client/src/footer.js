import React from 'react';
import logo from './Images/Logo-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="w-full custom-border text-center ">
            <div className="my-12">
                <img src={logo} width={300} alt="Logo" className="mx-auto" />
                <h3 className='text-xl text-center font-semiBold text-gray-500'>Central Location for AI Resources<span className='pinky'>.</span></h3>
            </div>
            <div className='flex row justify-center space-x-4'>
                <a href="https://www.linkedin.com/in/kyrix/" target="opener">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className='text-gray-400 hover:text-gray-600'/>
                </a>
                <a href="https://www.linkedin.com/in/kyrix/" target="opener">
                    <FontAwesomeIcon icon={faTwitter} size="2x" className='text-gray-400 hover:text-gray-600'/>
                </a>
            </div>
            <p className='text-gray-700 my-2 font-medium'>Coded with &#128150; 2023</p>
        </footer>
    );
};

export default Footer;