import React from 'react';
// import { link } from 'react-router-dom';
import {FaBars,FaTimes} from "react-icons/fa";
import { useRef } from 'react';

function Navbar() {
 const navRef=useRef();

 const showNavbar =()=>{
    navRef.current.classList.toggle("responsive_nav");
 }

  return (
    <header>
        <h3 className='Logo'>Logo</h3>
        <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Pricing</a>
        <a href="/#">Bills</a>
        <a href="/#">Logout</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaBars/>
        </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaTimes/>
        </button>
    </header>


  )
}

export default Navbar
