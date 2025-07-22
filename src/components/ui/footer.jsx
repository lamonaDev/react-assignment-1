import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    React.useEffect(_ => {
        AOS.init({ duration: 500 });
    }, [])
    return (
    <footer className="mt-auto bg-dark text-white py-3">
        <div className="container">
        <div className="row">
            <div data-aos="fade" data-aos-delay="300" className="col-md-4 mb-1 text-center">
            <h5 className='mt-4'>About Us</h5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis.
            </p>
            </div>
            <div data-aos="fade" data-aos-delay="400" className="col-md-4 mb-1 text-center">
            <h5 className='mt-2'>Quick Links</h5>
            <ul className="list-unstyled">
                <li>
                <Link to={`/${String("Home").toLocaleLowerCase()}`} className="text-decoration-none text-white">Home</Link>
                </li>
                <li>
                <Link to={`/${String("About").toLocaleLowerCase()}`} className="text-decoration-none text-white">About</Link>
                </li>
                <li>
                <Link to={`/${String("Skills").toLocaleLowerCase()}`} className="text-decoration-none text-white">Skills</Link>
                </li>
                <li>
                <Link to={`/${String("Contact").toLocaleLowerCase()}`} className="text-decoration-none text-white">Contact</Link>
                </li>
            </ul>
            </div>
            <div data-aos="fade" data-aos-delay="500" className="col-md-4 mb-1 text-center">
            <h5 className='mt-4'>Follow Us</h5>
            <ul className="list-inline social-icons mt-4">
                <li className="list-inline-item">
                <a href="#" className="text-white">
                    <i className="bi bi-facebook"></i>
                </a>
                </li>
                <li className="list-inline-item">
                <a href="#" className="text-white">
                    <i className="bi bi-twitter"></i>
                </a>
                </li>
                <li className="list-inline-item">
                    <a href="#" className="text-white">
                <i className="bi bi-instagram"></i>
                </a>
                </li>
            </ul>
            </div>
        </div>
        <hr className="mb-3" />
        <div className="row">
            <div className="col-md-12 text-center">
            <p>© 2025 Your Company. All rights reserved.</p>
            </div>
        </div>
        </div>
    </footer>
    );
}; export default Footer;