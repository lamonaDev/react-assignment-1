import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './nav.css';
import { Link, Links } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function collapseNav() {
  window.document.querySelector("#nav-button").classList.contains("collapsed")
  ? "" : window.document.getElementById("navbarNav").classList += ("collapsed");
}
const Navbar = () => {
    useEffect(_ => {
              AOS.init({ duration: 500 });
      },[]);
  return (
    <nav className="navbar navbar-expand-lg bg-dark  navbar-dark" id='nav'>
      <div className="container">
        <Link data-aos="fade" data-aos-delay="300" to={"/home"} className="navbar-brand text-white">
          Starter Framework
        </Link>
        <button
          id='nav-button'
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse justify-content-end py-4" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item m-3">
              <Link data-aos="fade" data-aos-delay="400" to='/home' onClick={collapseNav} className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link data-aos="fade" data-aos-delay="500" to="/about" onClick={collapseNav} className="nav-link text-white">
                About
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link data-aos="fade" data-aos-delay="600" to='/skills' onClick={collapseNav} className="nav-link text-white">
                Skills
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link data-aos="fade" data-aos-delay="700" to='/contact' onClick={collapseNav} className="nav-link text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}; export default Navbar;