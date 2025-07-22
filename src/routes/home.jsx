import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
const FeaturesSection = () => {
    useEffect(_ => {
        AOS.init({ duration: 500 });
    },[]);
    return (
        <Fragment>
            <section id='homeSection'>
                <div className='icons-container'>
                    <i id='icon' data-aos="fade-down" data-aos-delay="200" class="bi bi-braces" ></i>
                    <i id='icon' data-aos="fade-down" data-aos-delay="300" class="bi bi-braces-asterisk"></i>
                    <i id='icon' data-aos="fade-down" data-aos-delay="400" class="bi bi-code"></i>
                    <i id='icon' data-aos="fade-down" data-aos-delay="500" class="bi bi-code-slash"></i>
                    <i id='icon' data-aos="fade-down" data-aos-delay="600" class="bi bi-database"></i>
                </div>
                <h2 className='homeSectionTitle' data-aos="fade-up">Full-Stack Engineer</h2>
            </section>
        </Fragment>
    );
};

export default FeaturesSection;