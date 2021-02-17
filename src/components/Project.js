/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../assets/mode.css';
import project from '../images/project.JPG';



export default function Project() {
    return (
        <div  id="project">
            <div className="pt-24 lg:pt-16 xl:pt-16 pb-2 xl:pb-24">
                <div className="w-full text-center">
                    <p className="font-bold text-4xl lg:text-5xl xl:text-5xl">Project</p> 
                    <p className="text-2xl leading-tight text-gray-600 pb-4 lg:text-3xl xl:text-3xl">Example of a project what<br/> I have done</p>
                </div>
                <div className="py-0">
                    <div className="container m-auto px-6">
                        <div className="lg:flex justify-between items-center">
                            <div className="lg:w-8/12">
                                <img src={project} alt="Project" className="rounded-xl"/>
                            </div>
                            <div className="lg:w-4/12 order-2 lg:pl-24 lx:pl-24">
                                <h1 className="text-3xl xl:text-4xl font-bold leading-tight mt-4 mb-2">Project review</h1>
                                <p className="text-xl xl:text-2xl text-gray-600">
                                    The project is about a web aplication 
                                    that helps to manage an IT Company. 
                                    The aplication includes for example: 
                                    login system, adding files page or 
                                    database of created projects by the 
                                    company.
                                    </p>
                                <div className="py-5">
                                    <a href="https://softwarehouse.vercel.app/" target="_blank" className="bg-indigo-600 mt-5 px-5 py-1 text-white rounded-full text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-1xl">More <i className="fa fa-hand-o-left"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}
