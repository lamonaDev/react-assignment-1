import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
function ContactForm() {
    useEffect(_ => {
        AOS.init({ duration: 500 });
    }, []);
    return (
        <Fragment>
        <div className="container my-5" id='contact'>
        <div className="row justify-content-center">
        <div className="col-12 col-md-6">
            <form>
            <div className="mb-5"  data-aos="fade-down" data-aos-delay="300">
                <label htmlFor="fullName" className="form-label teal-label">Full Name</label>
                <div className="input-group">
                <span className="input-group-text" id='icon-holder'><i className="bi bi-person"></i></span>
                <input type="text" className="form-control input-bottom-border" id="fullName" placeholder="ayman" />
            </div>
            </div>
            <div className="mb-5" data-aos="fade-down" data-aos-delay="400" >
                <label htmlFor="email" className="form-label teal-label">email</label>
                <div className="input-group">
                <span className="input-group-text" id='icon-holder'><i className="bi bi-envelope"></i></span>
                <input type="email" className="form-control input-bottom-border" id="email" />
            </div>
            </div>
            <div className="mb-5" data-aos="fade-down" data-aos-delay="500" >
                <label htmlFor="age" className="form-label teal-label">Age</label>
                <div className="input-group">
                <span className="input-group-text" id='icon-holder'><i className="bi bi-hash"></i></span>
                <input type="number" className="form-control input-bottom-border" id="age" />
            </div>
            </div>
            <div className="mb-5" data-aos="fade-down" data-aos-delay="600" >
                <label htmlFor="message" className="form-label teal-label">message</label>
                <div className="input-group">
                <span className="input-group-text" id='icon-holder'><i className="bi bi-chat"></i></span>
                <textarea className="form-control input-bottom-border" id="message" rows="3"></textarea>
            </div>
            </div>
            <button data-aos="fade-up" data-aos-delay="500" type="submit" className="btn teal-button mt-4 shadow"><i className="bi bi-send"></i> SEND MESSAGE</button>
        </form>
        </div>
    </div>
</div>
</Fragment>
); } export default ContactForm;