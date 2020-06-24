import React, { useState, useEffect } from 'react';

import './app.scss';

import Home from './components/home/Home';

import About from './components/about/About';

import Projects from './components/projects/Projects';

import { Contact } from './components/contact/Contact';

import { Footer } from './components/footer/Footer';

// import Scrollspy from 'react-scrollspy'

const App = () => {

    const [navActive1, setNavActive1] = useState(true);
    const [navActive2, setNavActive2] = useState(false);
    const [navActive3, setNavActive3] = useState(false);
    const [navActive4, setNavActive4] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let myScroll = window.scrollY
            if (myScroll < 150) {
                console.log('home');
                setNavActive1(true);
                setNavActive2(false);
                setNavActive3(false);
                setNavActive4(false);

            }
            if (myScroll > 150 && myScroll < 1000) {
                console.log('about')
                setNavActive1(false);
                setNavActive2(true);
                setNavActive3(false);
                setNavActive4(false);
            }
            if (myScroll > 1000 && myScroll < 2200) {
                console.log('project')
                setNavActive1(false);
                setNavActive2(false);
                setNavActive3(true);
                setNavActive4(false);
            }
            if (myScroll > 2200) {
                console.log('contact')
                setNavActive1(false);
                setNavActive2(false);
                setNavActive3(false);
                setNavActive4(true);
            }
        })
    }, [])


    const handleClickNavActive1 = () => {
        setNavActive1(true);
        setNavActive2(false);
        setNavActive3(false);
        setNavActive4(false);
    }

    const handleClickNavActive2 = () => {
        setNavActive1(false);
        setNavActive2(true);
        setNavActive3(false);
        setNavActive4(false);
    }

    const handleClickNavActive3 = () => {
        setNavActive1(false);
        setNavActive2(false);
        setNavActive3(true);
        setNavActive4(false);
    }

    const handleClickNavActive4 = () => {
        setNavActive1(false);
        setNavActive2(false);
        setNavActive3(false);
        setNavActive4(true);
    }



    return (
        <div>
            <div id='home'></div>
            <Home />
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top p-0" id='nav'>
                <div className="container">
                    <a className="navbar-brand " href="#">Georges Guelton</a>
                    <button className="navbar-toggler text-light" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-light"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav text-center">
                            <li className='nav-item'>
                                {}
                                <a className={navActive1 ? 'nav-link py-3 bg-danger' : 'nav-link py-3'} href="#home" onClick={handleClickNavActive1}>Home</a>
                                {/* <a className="nav-link active py-3" href="#home" onClick={handleClickNavActive1}>Home</a> */}
                            </li>
                            <li className='nav-item'>
                                <a className={navActive2 ? 'nav-link py-3 bg-danger' : 'nav-link py-3'} href="#about" onClick={handleClickNavActive2}>About</a>
                            </li>
                            <li className='nav-item'>
                                <a className={navActive3 ? 'nav-link py-3 bg-danger' : 'nav-link py-3'} href="#project" onClick={handleClickNavActive3}>Projects</a>
                            </li>
                            <li className='nav-item'>
                                <a className={navActive4 ? 'nav-link py-3 bg-danger' : 'nav-link py-3'} href="#contact" onClick={handleClickNavActive4}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}
export default App;
