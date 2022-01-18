import React from "react";
import { Link } from 'react-router-dom'
import './header.css'

function Header(props){
  
  return (
    <React.Fragment>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">

          <div className="logo">
          <h1 className="text-light"><a href="/"><span>Rocket Insurance</span></a></h1>
          </div>

          <nav id="navbar" className="navbar">
            <Link to="/">Home</Link>
            <Link to="/rating-info" className="getstarted">Get a quote</Link>
          </nav>

        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;