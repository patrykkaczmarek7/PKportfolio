/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../assets/mode.css';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import instagram from '../images/instagram.png';
import email from '../images/email.png';


export default function Contact() {
    return (
        <div  id="contact">
            <div className="pt-2 lg:pt-24 xl:pt-24 pb-24">
                <div className="w-full text-center">
                    <p className="font-bold text-4xl lg:text-5xl xl:text-5xl">Contact</p> 
                    <p className="text-2xl leading-tight text-gray-600 pb-4 lg:text-3xl xl:text-3xl">If you would like <br className="md:hidden lg:hidden xl:hidden"/>to contact me <br/>here are my <br className="md:hidden lg:hidden xl:hidden"/>social media</p>
                </div>
                <div className="grid grid-cols-4 pt-10">
                    <a href="https://www.linkedin.com/in/patryk-kaczmarek-921aa51ba/" target="_blank" className="p-3 place-self-center animate-float hover:bg-gray-800 transition duration-700 ease-in-out rounded-3xl"><img src={linkedin} alt="LinkedIn"/></a>
                    <a href="https://github.com/patrykkaczmarek7" target="_blank" className="p-3 place-self-center hover:bg-gray-800 transition duration-700 ease-in-out rounded-3xl"><img src={github} alt="GitHub"/></a>
                    <a href="https://www.instagram.com/thepatrykzi/" target="_blank" className="p-3 place-self-center animate-float hover:bg-gray-800 transition duration-700 ease-in-out rounded-3xl"><img src={instagram} alt="Instagram"/></a>
                    <a href="mailto:patrykkaczmarek7@gmail.com" target="_blank" className="p-3 place-self-center hover:bg-gray-800 transition duration-700 ease-in-out rounded-3xl"><img src={email} alt="Email"/></a>
                </div>
            </div>
        </div>
    )
}
