import React, { Component } from 'react';

import './projects.scss';
import Project from './Project';
import SoloProject from './SoloProject';

// Import images
import chefWebsiteImg from '../../assets/images/projects/websiteChef.png'
import projetDesignImg from './../../assets/images/projects/portfolioDesign.png'
import firstPortfolio from '../../assets/images/projects/firstPortfolio.png'
import labsImg from '../../assets/images/projects/labs.png'
import jsDomImg from '../../assets/images/projects/jsDom.png'

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            btnAll: 'btn btn-outline-danger btn-sm  active btn-self',
            btnFrontEnd: 'btn btn-outline-danger btn-sm btn-self',
            btnBackEnd: 'btn btn-outline-danger btn-sm btn-self',
            projects: [
                {
                    name: 1,
                    test: 2,
                    id: 1,
                },
                {
                    name: 3,
                    test: 4,
                    id: 2
                }
            ]
        }
    }



    render() {

        return (

            <div className='projects-section pt-5' id='project'>
                <h2 className='text-center text-danger pt-5'>Projects</h2>
                <div className='text-center underline-title bg-dark'></div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <ul className="nav nav-pills mb-3 tesxt-center " id="pills-tab" role="tablist">
                                    <li className="nav-item mx-2">
                                        <a className={this.state.btnAll} id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">ALL</a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className={this.state.btnFrontEnd} id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Front-End</a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className={this.state.btnBackEnd} id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Back-End</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* ALL PROJECTS */}
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            {/* FIRST ROW */}
                            <div className="row mt-5">
                                {/*1ST CARD*/}
                                <div className="col-md-4 col-12 text-center my-1">
                                    {/* CARD CHEF PROJECT */}
                                    <Project title='Chef Website'
                                        content='First project I had to do with Molengeek. It was the final step to achieve HTML and CSS'
                                        modalTitle='Chef Website'
                                        modalContent='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sequi inventore explicabo veritatis? Inventore expedita deleniti, officiis sunt repudiandae distinctio ducimus. Nesciunt, dolores modi sed architecto itaque quis explicabo facere!'
                                        img={chefWebsiteImg}
                                        linkView='https://gueltongeorges1995.github.io/Le-site-du-chef/'
                                        linkCode='https://github.com/GueltonGeorges1995/Le-site-du-chef'
                                    />
                                </div>
                                {/* 2ND CARD */}
                                <div className="col-md-4 col-12 text-center my-1">
                                    {/* CARD CHEF PROJECT */}
                                    <Project title='Portfolio Design'
                                        content="It's a template for a porfolio with some animations"
                                        modalTitle='Chef Website'
                                        modalContent='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sequi inventore explicabo veritatis? Inventore expedita deleniti, officiis sunt repudiandae distinctio ducimus. Nesciunt, dolores modi sed architecto itaque quis explicabo facere!'
                                        img={projetDesignImg}
                                        linkView='https://github.com/GueltonGeorges1995/Portfolio-Design'
                                        linkCode='https://gueltongeorges1995.github.io/Portfolio-Design/'
                                    />
                                </div>

                                <div className="col-md-4 col-12 text-center my-1">
                                    {/* CARD CHEF PROJECT */}
                                    <Project title='First Portfolio'
                                        content='First version of my portfolio'
                                        modalTitle='Chef Website'
                                        modalContent='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sequi inventore explicabo veritatis? Inventore expedita deleniti, officiis sunt repudiandae distinctio ducimus. Nesciunt, dolores modi sed architecto itaque quis explicabo facere!'
                                        img={firstPortfolio}
                                        linkView='https://github.com/GueltonGeorges1995/portofio-react'
                                        linkCode='https://gueltongeorges1995.github.io/portofio-react/'
                                    />
                                </div>

                            </div>
                            {/* SECOND ROW */}
                            <div className="row mt-5">
                                <div className="col-md-4 col-12 text-center my-1">
                                    {/* CARD CHEF PROJECT */}
                                    <Project title='JS DOM'
                                        content='First project I had to do with Molengeek. It was the final step to achieve HTML and CSS'
                                        modalTitle='Chef Website'
                                        modalContent='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sequi inventore explicabo veritatis? Inventore expedita deleniti, officiis sunt repudiandae distinctio ducimus. Nesciunt, dolores modi sed architecto itaque quis explicabo facere!'
                                        img={jsDomImg}
                                        linkView='https://github.com/GueltonGeorges1995/projet-js-dom'
                                        linkCode='https://gueltongeorges1995.github.io/projet-js-dom/'
                                    />
                                </div>
                                <div className="col-md-4 col-12 text-center my-1">
                                    {/* CARD CHEF PROJECT */}
                                    <SoloProject title='Chef Website'
                                        content='First project I had to do with Molengeek. It was the final step to achieve HTML and CSS'
                                        modalTitle='Chef Website'
                                        modalContent='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sequi inventore explicabo veritatis? Inventore expedita deleniti, officiis sunt repudiandae distinctio ducimus. Nesciunt, dolores modi sed architecto itaque quis explicabo facere!'
                                        img={labsImg}
                                        linkCode='https://github.com/GueltonGeorges1995/Labs'
                                    />
                                </div>
                                <div className="col-md-4 col-12 text-center my-1">
                                    {/* CARD CHEF PROJECT */}

                                </div>
                            </div>
                        </div>




                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="row mt-5">
                                {/*1ST CARD*/}
                                <div className="col-md-4 col-12 text-center my-1">
                                    {/* CARD CHEF PROJECT */}
                                    <Project title='Chef Website'
                                        content='First project I had to do with Molengeek. It was the final step to achieve HTML and CSS'
                                        modalTitle='Chef Website'
                                        modalContent='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sequi inventore explicabo veritatis? Inventore expedita deleniti, officiis sunt repudiandae distinctio ducimus. Nesciunt, dolores modi sed architecto itaque quis explicabo facere!'
                                        img={chefWebsiteImg}
                                        linkView='https://gueltongeorges1995.github.io/Le-site-du-chef/'
                                        linkCode='https://github.com/GueltonGeorges1995/Le-site-du-chef'
                                    />
                                </div>
                                {/* 2ND CARD */}
                                <div className="col-md-4 col-12 text-center my-1">
                                    {/* CARD CHEF PROJECT */}
                                    <Project title='Portfolio Design'
                                        content='First project I had to do with Molengeek. It was the final step to achieve HTML and CSS'
                                        modalTitle='Chef Website'
                                        modalContent='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sequi inventore explicabo veritatis? Inventore expedita deleniti, officiis sunt repudiandae distinctio ducimus. Nesciunt, dolores modi sed architecto itaque quis explicabo facere!'
                                        img={projetDesignImg}
                                        linkView='https://github.com/GueltonGeorges1995/Portfolio-Design'
                                        linkCode='https://gueltongeorges1995.github.io/Portfolio-Design/'
                                    />
                                </div>

                                <div className="col-md-4 col-12 text-center my-1">
                                    {/* CARD CHEF PROJECT */}
                                    <Project title='First Portfolio'
                                        content='First project I had to do with Molengeek. It was the final step to achieve HTML and CSS'
                                        modalTitle='Chef Website'
                                        modalContent='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sequi inventore explicabo veritatis? Inventore expedita deleniti, officiis sunt repudiandae distinctio ducimus. Nesciunt, dolores modi sed architecto itaque quis explicabo facere!'
                                        img={firstPortfolio}
                                        linkView='https://github.com/GueltonGeorges1995/portofio-react'
                                        linkCode='https://gueltongeorges1995.github.io/portofio-react/'
                                    />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-4  col-12 text-center my-1">
                                    {/* CARD CHEF PROJECT */}
                                    <Project title='JS DOM'
                                        content='First project I had to do with Molengeek. It was the final step to achieve HTML and CSS'
                                        modalTitle='Chef Website'
                                        modalContent='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sequi inventore explicabo veritatis? Inventore expedita deleniti, officiis sunt repudiandae distinctio ducimus. Nesciunt, dolores modi sed architecto itaque quis explicabo facere!'
                                        img={jsDomImg}
                                        linkView='https://github.com/GueltonGeorges1995/projet-js-dom'
                                        linkCode='https://gueltongeorges1995.github.io/projet-js-dom/'
                                    />
                                </div>
                                <div className="col-md-4 col-12 text-center my-1">
                                    {/* CARD CHEF PROJECT */}
                                </div>
                                <div className="col-md-4 col-12 text-center my-1">
                                    {/* CARD CHEF PROJECT */}

                                </div>
                            </div>
                        </div>


                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div className="row mt-5">
                                <div className="col-md-4 col-12 text-center my-1">
                                    {/* CARD CHEF PROJECT */}
                                    <SoloProject title='Chef Website'
                                        content='First project I had to do with Molengeek. It was the final step to achieve HTML and CSS'
                                        modalTitle='Chef Website'
                                        modalContent='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et sequi inventore explicabo veritatis? Inventore expedita deleniti, officiis sunt repudiandae distinctio ducimus. Nesciunt, dolores modi sed architecto itaque quis explicabo facere!'
                                        img={labsImg}
                                        linkCode='https://github.com/GueltonGeorges1995/Labs'
                                    />
                                </div>
                                <div className="col-md-4 col-12 text-center my-1">
                                    {/* CARD CHEF PROJECT */}

                                </div>
                                <div className="col-md-4 col-12 text-center my-1">
                                    {/* CARD CHEF PROJECT */}

                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
