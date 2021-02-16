import React, { useEffect, useState } from 'react';
import '../assets/mode.css';
import me from '../images/me.jpeg';
import content from '../content';
import Typical from 'react-typical';
import { Link as ScrollLink } from 'react-scroll';


export default function Header() {

    const [animated,setAnimated] = useState(false);
        useEffect(() => {
            setAnimated(true);    
        },[])

    return (
        <div id="header">
            <div className="flex flex-col items-center justify-center md:flex-row-reverse md:justify-between pt-24 pb-16"> 
                {/* Me picture */}
                <div className="w-1/2">
                    <div className=" mx-auto max-w-full mr:auto md:px-24 lg:px-32 lg:py-0 xl:px-48 xl:py-10">
                        <img className={`${animated?"":"translate-y-10 opacity-0"} transform transition duration-2000 ease-in-out rounded-full`} src={me} alt="Me" />
                    </div>
                </div>
                {/* Text */}
                <div className="w-64 md:w-1/2 lg:w-1/2 xl:w-1/2 flex items-center">
                    <div className={`${animated?"":"translate-y-10 opacity-0"} transform transition duration-2000 ease-in-out font-bold mx-auto lg:text-3xl xl:text-4xl 2xl:3xl lg:px-12 lg:py-10`}>
                        <p>{content.header.text[0]}</p> 
                        <p>{content.header.text[1]}</p>
                        {content.header.text[2]} 
                        <Typical
                            steps={content.header.typical}
                            loop={Infinity}
                            className="inline-block"
                        />
                        <br/>
                        {/* Button with arrow */}
                        <ScrollLink to="about" smooth={true}>
                            <button className="animate-float bg-indigo-600 mt-5 px-5 py-1 text-white rounded-full text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-1xl">
                                More <i className="fa fa-arrow-down"></i>
                            </button>
                        </ScrollLink>
                    </div>
                </div>     
            </div>
        </div>

    )
}
