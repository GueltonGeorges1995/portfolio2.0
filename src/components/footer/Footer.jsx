import React from 'react';
import './footer.scss';
export const Footer = () => {
    return (
        <div className='bg-dark footer-section py-5 mt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5 p-0 d-flex align-items-center">
                        <h6 className='text-light'>© 2020 Georges Guelton All Rights Reserved</h6>
                    </div>
                    <div className="col-5 p-0 d-flex justify-content-end">
                        <a href="https://github.com/GueltonGeorges1995" target='_blank' className='hover-red'><i className="ml-3 fab fa-github text-light"></i></a>
                        <a href="https://www.linkedin.com/in/georges-guelton-664809194/" target='_blank' className='hover-red'><i className="ml-3 fab fa-linkedin text-light"></i></a>
                        <a href="mailto:georges.guelton@gmail.com" target='_blank' className='hover-red'><i className="ml-3 fas fa-envelope text-light"></i></a>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    )
}