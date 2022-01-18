import React from "react";
import { Link } from 'react-router-dom'
import './header.css'
import logo from './../../images/logo-blue.png'

function Header(props){
  
  return (
    <React.Fragment>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">

          <div className="logo">
          {/* <h1 className="text-light"><a href="/"><span>Rocket Insurance</span></a></h1> */}
          <a><img src={logo} alt="" class="img-fluid"/></a>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li><Link to="/"className="home-text">Home</Link></li>
              <li className="house-icon"><Link to="/" className="bi bi-house-fill"></Link></li>
              <li><Link to="/rating-info" className="getstarted">Get a quote</Link></li>
            </ul>
          </nav>

        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;