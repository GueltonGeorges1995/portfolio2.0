import React, { useState } from 'react'
import Particles from 'react-particles-js';
import './home.scss'
const homeBackground = {
    "particles": {
        "number": {
            "value": 50
        },
        "density": {
            'enable': true,
            'value_area': 800
        },
        "color": {
            "value": "#f9f3f4"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#ccc"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 2
        },
        "line_linked": {
            "enable": true,
            "distance": 200
        },
        "move": {
            "enable": true,
            "speed": 2
        }
    }
}

const Home = () => {
    return (
        <div id='particles-js'>
            {/* Particles en backgrouns */}
            <Particles params={homeBackground} className='particles-height' />
            {/* Titre avec le bouton */}
            <div className="btext">
                <h1 className=''>Hello I'm <span className='text-danger'>Georges Guelton.</span><br /> I'm a full stack web developer.</h1>
                <a href="#about" className="btn btn-outline-light btn-self btn-lg" >Get Started</a>
            </div>
        </div>
    )
}

export default Home;
