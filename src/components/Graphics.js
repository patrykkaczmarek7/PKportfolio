/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import '../assets/mode.css';
import vecvanluke from '../images/vecVanLuke.png';
import adsmaker from '../images/adsmaker.png';
import biernat from '../images/biernat.png';
import geek from '../images/geek.png';
import pk from '../images/pk.png';


export default function Graphics() {

    const [animated,setAnimated] = useState(false);
        useEffect(() => {
            setAnimated(true);    
        },[])

    return (
            <div id="graphics">
                <div className="pt-20 lg:pt-24 xl:pt-12 pb-20 lg:pb-8 xl:pb-8">
                    <div className="w-full text-center">
                        <p className="font-bold text-4xl lg:text-5xl xl:text-5xl">Graphics</p> 
                        <p className="text-2xl leading-tight text-gray-600 pb-4 lg:text-3xl xl:text-3xl">Graphic examples which<br/> I have done</p>
                    </div>
                    <div className={`${animated?"":"translate-y-10 opacity-0"} transform transition duration-2000 ease-in-out flex flex-col items-center p-4`}>
                        <div className="flex flex-col items-center">
                            <div className="swiper flex overflow-x-scroll rounded-xl lg:w-2/5 lg:h-3/5 lx:w-3/5 2xl:w-3/5">
                            <img className="w-full h-full bg-gray-300 rounded-xl" src={vecvanluke} id="slide1"/>
                            <img className="w-full h-full bg-gray-300 rounded-xl" src={adsmaker} id="slide2"/>
                            <img className="w-full h-full bg-gray-300 rounded-xl" src={biernat} id="slide3"/>
                            <img className="w-full h-full bg-gray-300 rounded-xl" src={geek} id="slide4"/>
                            <img className="w-full h-full bg-gray-300 rounded-xl" src={pk} id="slide5"/>
                            </div>
                        </div>
                        <div className="flex font-bold text-2xl">
                            <p><i className="fa fa-long-arrow-left"></i> Swipe <i className="fa fa-long-arrow-right"></i></p>
                        </div>
                    </div> 
                </div>
            </div>
        

    )
}
