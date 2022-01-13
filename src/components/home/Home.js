import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from 'react-router-dom'
import rocket from './../../images/rocket.png'


function Home(props){


  return (
    <React.Fragment>
      <section id="hero" className="d-flex align-items-center home">

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Fly high - with confidence</h1>
              {/* style={{color:"#7a59e4"}} */}
              <h2>Keeping you insured to the moon and back.</h2>
              <div>
                <a><Link to="/rating-info" className="btn-get-started">Get a quote</Link></a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <div className="d-flex flex-row justify-content-center">
                <img src={rocket} className="img animated" alt=""/>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* END OF HERO  */}

      {/* MAIN SECTION  */}
      <main id="main">
        <section id="about" className="about" >
          <div className="container">

            <div className="row justify-content-between">
              <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                <img src="assets/img/about-img.svg" className="img-fluid" alt=""/>
              </div>
              <div className="col-lg-6 pt-5 pt-lg-0">
                <h3>Voluptatem dignissimos provident quasi</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <i className="bx bx-receipt"></i>
                    <h4>Corporis voluptates sit</h4>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
                  <div className="col-md-6" >
                    <i className="bx bx-cube-alt"></i>
                    <h4>Ullamco laboris nisi</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* END OF ABOUT SECTION  */}

        {/* SERVICES SECTION  */}

        <section id="services" className="services section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Coverage</h2>
              <p>Rates you can rock-et out to</p>
            </div>

            <div className="row">
              <div className="col-lg-6 d-flex align-items-stretch" >
                <div className="icon-box">
                  <div className="icon"><i className="bx bxl-dribbble"></i></div>
                  <h4 className="title"><a href="">Deductible</a></h4>
                  <p className="description">With rates as low as $500, you won't have to break the bank if an alien attacks.</p>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-stretch" >
                <div className="icon-box">
                  <div className="icon"><i className="bx bxl-dribbble"></i></div>
                  <h4 className="title"><a href="">Asteroid Collision Limit</a></h4>
                  <p className="description">Up to one million dollars in coverage lets you fly more confidently.</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

    </React.Fragment>
  );
}

Home.propTypes = {
};

export default Home;

