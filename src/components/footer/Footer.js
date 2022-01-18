import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from 'react-router-dom'
import './footer.css'

function Footer(props){


  return (
    <React.Fragment>
      <footer id="footer">

        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4>Join Our Newsletter</h4>
                <p>Learn more about our comprehensive coverage and moon people services</p>
                  <input type="email" name="email"/>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Rocket Insurance</h3>
                <p>
                  Rocket Insurance<br/>
                  Galactic Sector 010101<br/>
                  Milky Way<br/><br/>
                  <strong>Phone:</strong> +1 (111)-111-1111<br/>
                  <strong>Email:</strong> info@rocketinsurance.com<br/>
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">Privacy policy</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://www.wbur.org/onpoint/2017/08/10/protecting-earth-aliens">Alien Security</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://www.nasa.gov/">Space Navigation</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/rating-info">Asteroid Collision</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://aeon.co/essays/what-can-we-do-to-save-the-universe-from-certain-death">Exogorth Sy-O Protection</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="https://media.giphy.com/media/3ornjSL2sBcPflIDiU/giphy.gif">Han Solo Meet and Greet</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>Connect with us to stay up to date on discounts, bundled insurance packages, and misc space stuff.</p>
                <div className="social-links mt-3">
                  <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="/" className="google-plus"><i className="bx bxl-skype"></i></a>
                  <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>
  </React.Fragment>
  );
}

Footer.propTypes = {};

export default Footer;