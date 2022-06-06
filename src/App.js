import React, { useState } from "react";
import Header from './components/Header';
import Project from './components/Project';
import Graphics from './components/Graphics';
import About from './components/About';
import Contact from './components/Contact';
import './assets/mode.css';
import logo from './images/logo.png';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link as ScrollLink } from 'react-scroll';




function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  return (
    <>
      {/* APP  */}
      <div className="App">
        {/* Change color mode  */}
        <div className={darkMode ? "dark-mode" : "light-mode"}>
          {/* Navbar */}
        <nav className="flex flex-wrap items-center fixed top-0 w-screen z-40 mx-auto lg:justyfy-beetween bg-black mb-3">
            <div className="container mx-auto flex flex-wrap items-center justify-between text-white">
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start text-white">
              <ScrollLink to="header" smooth={true}>
                <img className="px-3 py-3 cursor-pointer" src={logo} alt="Logo" />
              </ScrollLink>

                <button
                  className="text-white cursor-pointer text-xl leading-none px-6 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <i className="fa fa-bars"></i>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center text-white" +
                  (navbarOpen ? "flex text-justify" : " hidden")
                }
                id="example-navbar-danger"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-white float-right text-right">
                  <li className="flex px-6 py-1"><span style={{ color: darkMode ? "grey" : "yellow" }}>🌣</span>
                    <div className="switch-checkbox">
                      <label className="switch">
                      <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                      <span className="slider round"></span>
                      </label>
                    </div>
                    <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☾</span>
                  </li>
                  <ScrollLink to="about" smooth={true}><li className="px-6 py-3 cursor-pointer text-xl transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">About me</li></ScrollLink>
                  <ScrollLink to="project" smooth={true}><li className="px-6 py-3 cursor-pointer text-xl transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">Project</li></ScrollLink>
                  <ScrollLink to="graphics" smooth={true}><li className="px-6 py-3 cursor-pointer text-xl transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">Graphics</li></ScrollLink>
                  <ScrollLink to="contact" smooth={true}><li className="px-6 py-3 cursor-pointer text-xl transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">Contact</li></ScrollLink>
                </ul>
              </div>
            </div>
          </nav>
          <Header/>
          <About/>
          <Project/>
          <Graphics/>
          <Contact/>
        </div>
      </div> 
    </> 

  );
}

export default App;
