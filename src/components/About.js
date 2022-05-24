/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../assets/mode.css';
import html from '../images/About/html.png';
import css from '../images/About/css.png';
import js from '../images/About/js.png';
import bootstrap from '../images/About/bootstrap.png';
import angular from '../images/About/angular.png';
import tailwind from '../images/About/tailwind.png';
import json from '../images/About/json.png';
import php from '../images/About/php.png';
import mysql from '../images/About/mysql.png';
import cplusplus from '../images/About/cplusplus.png';
import nestjs from '../images/About/nestjs.png';
import nodejs from '../images/About/nodejs.png';
import expressjs from '../images/About/expressjs.png';
import mongodb from '../images/About/mongodb.png';
import photoshop from '../images/About/photoshop.png';
import xd from '../images/About/xd.png';
import corel from '../images/About/corel.png';
import useWindowPosition from '../hook/useWindowPosition';


export default function About() {
    const animated = useWindowPosition('about', 0.2);
    return (
            <div id="about">
                <div className={` ${ animated ? '' : 'translate-y-10 opacity-0'} transform transition duration-2000 pb-6`}>
                    <p className="font-bold pt-16 text-center text-4xl lg:text-5xl xl:text-5xl">About me</p>
                    <div className="w-full text-center"> 
                        <p className="text-2xl leading-tight inline-flex text-gray-600 pb-8 lg:text-3xl xl:text-3xl">Some of the main IT technologies <br/>and programming<br className="lg:hidden lx:hidden"/> languages which I used</p>
                    </div>
                    <div className="w-full lg:inline-flex lx:inline-flex">
                        <div className="text-center w-full"> <br/> <br className="md:hidden lg:hidden lx:hidden"/>
                            <p className="font-bold pb-4 text-4xl">Frontend</p>
                            <img className="inline-block text-gray-700 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-center rounded-md bg-gray-100 px-4 py-2 m-2 h-16 md:h-32 lg:h-20 xl:h-24" src={html}/>
                            <img className="inline-block text-gray-700 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-center rounded-md bg-gray-100 px-4 py-2 m-2 h-16 md:h-32 lg:h-20 xl:h-24" src={css}/>
                            <img className="inline-block text-gray-700 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-center rounded-md bg-gray-100 px-4 py-2 m-2 h-16 md:h-32 lg:h-20 xl:h-24" src={js}/> <br/>
                            <img className="inline-block text-gray-700 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-center rounded-md bg-gray-100 px-4 py-2 m-2 h-16 md:h-32 lg:h-20 xl:h-24" src={bootstrap}/>
                            <img className="inline-block text-gray-700 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-center rounded-md bg-gray-100 px-4 py-2 m-2 h-16 md:h-32 lg:h-20 xl:h-24" src={angular}/>
                            <img className="inline-block text-gray-700 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-center rounded-md bg-gray-100 px-4 py-2 m-2 h-16 md:h-32 lg:h-20 xl:h-24" src={tailwind}/> <br/>
                            <img className="inline-block text-gray-700 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-center rounded-md bg-gray-100 px-4 py-2 m-2 h-16 md:h-32 lg:h-20 xl:h-24" src={json}/>
                        </div>
                        <div className="text-center w-full"> <br/> <br className="md:hidden lg:hidden lx:hidden"/>
                            <p className="font-bold pb-4 text-4xl">Backend</p>
                            <img className="inline-block text-gray-700 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-center rounded-md bg-gray-100 px-4 py-2 m-2 h-16 md:h-32 lg:h-20 xl:h-24" src={php}/>
                            <img className="inline-block text-gray-700 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-center rounded-md bg-gray-100 px-4 py-2 m-2 h-16 md:h-32 lg:h-20 xl:h-24" src={mysql}/>
                            <img className="inline-block text-gray-700 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-center rounded-md bg-gray-100 px-4 py-2 m-2 h-16 md:h-32 lg:h-20 xl:h-24" src={cplusplus}/> <br/>
                            <img className="inline-block text-gray-700 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-center rounded-md bg-gray-100 px-4 py-2 m-2 h-16 md:h-32 lg:h-20 xl:h-24" src={nestjs}/>
                            <img className="inline-block text-gray-700 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-center rounded-md bg-gray-100 px-4 py-2 m-2 h-16 md:h-32 lg:h-20 xl:h-24" src={nodejs}/>
                            <img className="inline-block text-gray-700 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-center rounded-md bg-gray-100 px-4 py-2 m-2 h-16 md:h-32 lg:h-20 xl:h-24" src={expressjs}/> <br/>
                            <img className="inline-block text-gray-700 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-center rounded-md bg-gray-100 px-4 py-2 m-2 h-16 md:h-32 lg:h-20 xl:h-24" src={mongodb}/>
                        </div>
                        <div className="text-center w-full"> <br/> <br className="md:hidden lg:hidden lx:hidden"/>
                            <p className="font-bold pb-4 text-4xl">Design</p>
                            <img className="inline-block text-gray-700 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-center rounded-md bg-gray-100 px-4 py-2 m-2 h-16 md:h-32 lg:h-20 xl:h-24" src={photoshop}/>
                            <img className="inline-block text-gray-700 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-center rounded-md bg-gray-100 px-4 py-2 m-2 h-16 md:h-32 lg:h-20 xl:h-24" src={xd}/>
                            <img className="inline-block text-gray-700 transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-center rounded-md bg-gray-100 px-4 py-2 m-2 h-16 md:h-32 lg:h-20 xl:h-24" src={corel}/>
                        </div>  
                    </div>
                </div>    
            </div>
        
    )
}
