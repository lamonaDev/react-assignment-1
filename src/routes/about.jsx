import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
const About = _ => {
    useEffect(_ => {
            AOS.init({ duration: 500 });
    },[]);
    return (
        <Fragment>
            <section id='aboutSection' >
                <h2 className='aboutSectionTitle' data-aos="fade" data-aos-delay="100">About Section</h2>
                <div className='aboutSectionDataContainer'>
                    <div className='dataContainer' data-aos="fade-down" data-aos-delay="200">
                        <h3 className='dataContainerNumber'>200</h3>
                        <h4 className='dataContainerDescription'>Team Member</h4>
                    </div>
                    <div className='dataContainer' data-aos="fade-down" data-aos-delay="300">
                        <h3 className='dataContainerNumber'>354</h3>
                        <h4 className='dataContainerDescription'>Projects</h4>
                    </div>
                    <div className='dataContainer' data-aos="fade-down" data-aos-delay="400">
                        <h3 className='dataContainerNumber'>1200</h3>
                        <h4 className='dataContainerDescription'>Line of Code</h4>
                    </div>
                    <div className='dataContainer' data-aos="fade-down" data-aos-delay="500">
                        <h3 className='dataContainerNumber'>1700</h3>
                        <h4 className='dataContainerDescription'>Files Downloaded</h4>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default About;