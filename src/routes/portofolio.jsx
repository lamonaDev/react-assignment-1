import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './portfolio.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import ReactImage from '../assets/react1.svg';
import HtmlImage from '../assets/html5.svg';
import JsImage from '../assets/js.svg';
import NextJs from '../assets/next.svg';
import NodeImage from '../assets/node.svg';
import TsImage from '../assets/ts.svg';
const Portfolio = () => {
    React.useEffect(_ => {
        AOS.init({duration: 500});
    },[]);
    return (
        <Fragment>
            <section className='portfolioContainer'>
                <h3 className='portfolioHeader' data-aos="fade" data-aos-delay="200">My Skills</h3>
                <div className='parent'>
                    <div data-aos="fade" data-aos-delay="300" className='div1 rounded shadow'>
                        <img className='image' src={ReactImage} alt="REACT" />
                    </div>
                    <div data-aos="fade" data-aos-delay="400" className='div2 rounded shadow'>
                        <img className='image' src={HtmlImage} alt="HTML" />
                    </div>
                    <div data-aos="fade" data-aos-delay="600" className='div3 rounded shadow'>
                        <img className='image' src={JsImage} alt="JS" />
                    </div>
                    <div data-aos="fade" data-aos-delay="800" className='div4 rounded shadow'>
                        <img className='image' src={NextJs} alt="NEXT-JS" />
                    </div>
                    <div data-aos="fade" data-aos-delay="700" className='div5 rounded shadow'>
                        <img className='image' src={NodeImage} alt="NODE-JS" />
                    </div>
                    <div data-aos="fade" data-aos-delay="500" className='div6 rounded shadow'>
                        <img className='image' src={TsImage} alt="TS" />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default Portfolio;