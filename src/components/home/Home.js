import React from "react";
import { Link } from 'react-router-dom'
import rocket from './../../images/rocket.png'
import blob from './../../images/blob.png'
import man from './../../images/man-phones.png'
import './home.css'

function Home(){

  return (
    <React.Fragment>
      <section id="hero" className="d-flex align-items-center home">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Fly higher - with confidence</h1>
              <h2>Keeping you insured to the moon and back.</h2>
              <div>
                <a><Link to="/rating-info" className="btn-get-started rounded-pill">Get a quote</Link></a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <div className="d-flex flex-row justify-content-center align-items-center">
              <img src={blob} className="blob" alt=""/>
                <img src={rocket} className="img animated" style={{position:"absolute"}}alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container">

            <div className="row justify-content-between">
              <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                <img src={man} className="img-fluid" alt=""/>
              </div>
              <div className="col-lg-6 pt-5 pt-lg-0">
                <h3>Why Rocket Insurance?</h3>
                <p>
                  We get it. Owning a rocket is no easy task. That's why we're universally renown for our exceptional coverage and policies.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <i className="bx bx-receipt"></i>
                    <h4>Broad coverage</h4>
                    <p>Whether it be a fender-bender with NASA, or the inevitable heat death of the universe, we've got you covered.</p>
                  </div>
                  <div className="col-md-6" >
                    <i className="bx bx-receipt"></i>
                    <h4>Cost Effective</h4>
                    <p>We save our customers an average of nearly $900 a year through our exclusive rewards program.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Coverage</h2>
              <p>Rates you can rock-et out to</p>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12 d-flex align-items-stretch" >
                <Link to="/rating-info" className="icon-box">
                <div className="icon"><i className="fas fa-piggy-bank"></i></div>
                  <h4 className="title"><a href="">Deductible</a></h4>
                  <p className="description">With rates as low as $500, you won't have to break the bank when an alien attacks.</p>
                </Link>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 d-flex align-items-stretch" >
                <Link to="/rating-info" className="icon-box">
                  <div className="icon"><i className="fas fa-meteor"></i></div>
                  <h4 className="title"><a href="">Asteroid Collision Limit</a></h4>
                  <p className="description">We offer up to one million dollars in coverage, allowing you to fly more confidently.</p>
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Home;

