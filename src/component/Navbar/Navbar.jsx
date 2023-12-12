import React, { useEffect, useState } from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Add an event listener to the window scroll event
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  return (
    <>
    <nav
      className={`navbar navbar-expand-lg ${
        scrolling ? `${style.bggray} shadow` : 'bg-transparent'
      } ${style.navbar} ${style.nav} fixed-top`}
      id="nav"> 
    
  <div className={style.container}>
    <a className="navbar-brand" to="/home"><img src="images/oa.png" className={`img-fluid ${style.rnavlogo}`} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${style.navbarnav}`}>
        <li className={`nav-item pt-2 pt-lg-0 me-3 ${style.navitem}`}>
          <a className={`nav-link px-0 position-relative text-capitalize ${style.navlink} ${style.active}`}aria-current="page" to="/home">Home</a>
        </li>
        <li className={`nav-item  pt-2 pt-lg-0 me-3 ${style.navitem}`}>
          <a className={`nav-link  px-0 position-relative text-capitalize ${style.navlink}`} to="/specialized">All Courses</a>
        </li>
        <li className={`nav-item  pt-2 pt-lg-0 me-3 ${style.navitem}`}>
          <a className={`nav-link  px-0 position-relative text-capitalize ${style.navlink}`} to="/specialized">About</a>
        </li>
        <li className={`nav-item  pt-2 pt-lg-0 me-3 ${style.navitem}`}>
          <Link className={`nav-link  px-0 position-relative text-capitalize ${style.navlink}`}  to="/specialized">Team</Link>
        </li>
        <li className={`nav-item  pt-2 pt-lg-0 me-3 ${style.navitem}`}>
          <a className={`nav-link px-0 position-relative text-capitalize ${style.navlink}`}  to="/home">Pricing</a>
        </li>
        <li className={`nav-item  pt-2 pt-lg-0 me-3 ${style.navitem}`}>
          <a className={`nav-link px-0 position-relative text-capitalize ${style.navlink}`}  to="/home">Journal</a>
        </li>
        <li className={`nav-item  pt-2 pt-lg-0 me-3 ${style.navitem}`}>
          <a className={`nav-link px-0 position-relative text-capitalize ${style.navlink}`}  to="/home">Contact</a>
        </li>
        <li cclassName={`nav-item  pt-2 pt-lg-0 me-3 ${style.navitem}`}>
          <a className={`nav-link   position-relative text-capitalize px-2  rounded-pill  ${style.navlink} ${style.ola} ${style.bgorange}`} to="/home">
            CERTIFICATE<span className="pb-2 pt-1 px-2 rounded-circle ms-2   bg-white text-black"><i className="mb-2 fa-solid fa-paper-plane" /></span></a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </>
  )
}
