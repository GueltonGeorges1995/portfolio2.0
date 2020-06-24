import React, { Component } from 'react'
import './about.scss'

import profile from '../../assets/images/about/profile.jpg'
export default class About extends Component {
    render() {
        return (
            <div className='about-section' id='about'>
                {/* Contenu about */}
                <div className="container pt-5">
                    {/* Title */}
                    <h2 className='text-center pt-5 text-danger'>About</h2>
                    <div className='text-center underline-title bg-dark'></div>

                    {/* Icones about*/}
                    <div className="row mt-5">

                        {/* Icones fast */}
                        <div className="col-md-3 col-12 text-center">
                            <div className="round-icones bg-danger d-flex justify-content-center align-items-center center">
                                <i className="fas fa-tachometer-alt text-light icones"></i>
                            </div>
                            <div className="pt-4">
                                <h4 className='text-dark'>FAST</h4>
                                <p className='text-dark'>Fast load times and lag free interaction, my highest priority.</p>
                            </div>
                        </div>

                        {/* Icones responsive */}
                        <div className="col-md-3 col-12 text-center">
                            <div className="round-icones bg-danger d-flex justify-content-center align-items-center center">
                                <i className="fas fa-mobile-alt text-light icones"></i>
                            </div>
                            <div className="pt-4">
                                <h4 className='text-dark'>RESPONSIVE</h4>
                                <p className='text-dark'>My layouts will work on any device, big or small.</p>
                            </div>
                        </div>

                        {/* Icones Intuitive */}
                        <div className="col-md-3 col-12 text-center">
                            <div className="round-icones bg-danger d-flex justify-content-center align-items-center center">
                                <i className="fas fa-lightbulb text-light icones"></i>
                            </div>
                            <div className="pt-4">
                                <h4 className='text-dark'>INTUITIVE</h4>
                                <p className='text-dark'>Strong preference for easy to use, intuitive UX/UI.</p>
                            </div>
                        </div>

                        {/* Icones responsive */}
                        <div className="col-md-3 col-12 text-center">
                            <div className="round-icones bg-danger d-flex justify-content-center align-items-center center">
                                <i className="fas fa-rocket text-light icones"></i>
                            </div>
                            <div className="pt-4">
                                <h4 className='text-dark'>DYNAMIC</h4>
                                <p className='text-dark'>Websites don't have to be static, I love making pages come to life.</p>
                            </div>
                        </div>
                    </div>


                    {/* Photos et progress bar */}
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="row mt-5">
                            <div className="col-md-3 col-12 text-center">
                                <img src={profile} alt="" className='img-fluid border-img border-danger rounded-lg border-img' />
                            </div>
                            <div className="col-md-3 col-12">
                                <h3 className='text-danger font-weight-bold'>
                                    Who am I ?
                                </h3>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <p className='text-dark '>
                                        I'm a Front-End Developer junior. I've just finished my internship at Molengeek which has a reputation for providing "ready made employees" able to contribute immediately in the work place. If you have any questions feel free to send me a message.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="progress mt-2">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '95%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">HTML</div>
                                </div>
                                <div className="progress mt-4">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">CSS / SCSS</div>
                                </div>
                                <div className="progress mt-4">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">JS</div>
                                </div>
                                <div className="progress mt-4">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">REACT JS</div>
                                </div>
                                <div className="progress mt-4">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '85%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">WORDPRESS</div>
                                </div>
                                <div className="progress mt-4">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">PHP LARAVEL</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
