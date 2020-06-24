import React, { Component } from 'react'
import './navBar.scss'
export default class NavBar extends Component {
    // componentDidMount(){
    //     window.addEventListener('scroll' ,() =>{
    //         const isTop = window.scrollY > 100
    //         const nav = document.getElementById('nav')
    //         if(isTop){
    //             nav.classList.add('d-none')
    //         }else {
    //             nav.classList.remove('d-none')
    //         }
    //     })
    // }
    


    render() {
        return (
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark my-nav-top" id='nav'>
                    <div className="container">
                        <a className="navbar-brand " href="#">Georges Guelton</a>
                        <button className="navbar-toggler text-light" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-light"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav text-center">
                                <a className="nav-item nav-link active " href="#particles-js">Home</a>
                                <a className="nav-item nav-link " href="#about">About</a>
                                <a className="nav-item nav-link " href="#">Projects</a>
                                <a className="nav-item nav-link " href="#">Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>
        )
    }
}
