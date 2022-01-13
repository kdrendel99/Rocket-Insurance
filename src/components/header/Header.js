import React from "react";
import { Link, useHistory } from 'react-router-dom'
import './header.css'
import PropTypes from "prop-types";

function Header(props){
  
  return (
    <React.Fragment>
      <header id="header" className="fixed-top d-flex align-items-center justify-content-between">
        <div className="container-fluid g-4 d-flex justify-content-between">

        <h1 className="logo pt-1"><span>Rocket Insurance</span></h1>
          <nav id="navbar" className="navbar" >
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/rating-info">Get a quote</Link>
                </li>

            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div> 
      </header>  
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
  }
}

export default Header;