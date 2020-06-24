import React, { useState, useEffect } from 'react';
import './contact.scss';
export const Contact = () => {

    const [subjectInput, setSubjectInput] = useState();

    const [messageInput, setMessageInput] = useState();

    const [newMessage, setNewMessage] = useState([]);


    const handleChangeSubject = (e) => {
        setSubjectInput(e.target.value)
    }

    const handleChangeMessage = (e) => {
        setMessageInput(e.target.value)
    }

    const handleClickSubmit = () => {
        setNewMessage({subject: subjectInput, message: messageInput});
        return newMessage
    }

    return (
        <>
            <div id='contact' className='mt-5 contact-section pt-5'>
                <h2 className='text-center pt-5 text-danger'>Contact</h2>
                <div className='text-center underline-title bg-dark'></div>
                <div className='container mt-5'>
                    <form onSubmit={handleClickSubmit} 
                    action={`mailto:georges.guelton@gmail.com?subject=${subjectInput}&body=${messageInput}`}  method="post" encType="text/plain">
                        <div className="form-group">
                            <label >Subject</label>
                            <input type="text"   className="form-control" value={subjectInput} onChange={handleChangeSubject} required  id='subject' />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" required rows="3" value={messageInput} onChange={handleChangeMessage}  id='message'></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-danger" >Submit</button>
                    </form>
                    <div className="row">
                        <div className="col-12 mt-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.7002623040416!2d4.3387406516252645!3d50.8552345658953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c38c20e33ca9%3A0x34eb0c02b7c73b01!2sPlace%20de%20la%20Minoterie%2C%201080%20Molenbeek-Saint-Jean!5e0!3m2!1sfr!2sbe!4v1577193532696!5m2!1sfr!2sbe" allowFullScreen=""></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

