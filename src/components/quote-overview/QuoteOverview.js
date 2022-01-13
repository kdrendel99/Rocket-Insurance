import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { makeApiCall } from './../../actions/index'


function QuoteOverview(props){
  const [deductibles, setDeductibles] = useState()
  const [asteroid, setAsteroid] = useState()
  useEffect(() => {
    handleNewQuoteSubmission()
  },[])

  useEffect(() => {
    if (props.quote !== null ){
      setDeductibles(props.quote?.variable_options?.deductible?.values)
      setAsteroid(props.quote?.variable_options?.asteroid_collision?.values)
    }
  },[props.quote])

  const handleNewQuoteSubmission = () => {
    const { dispatch } = props;
    dispatch(makeApiCall('test'))
  }

  return (
    <React.Fragment>
      <section id="hero" className="d-flex align-items-center">

        <div className="container"style={{border:"5px solid green"}}>

          <div className="d-flex justify-content-center">
            <h1>Quote overview</h1>
          </div>

          <div className="row gy-4 py-3"style={{border:"5px solid blue"}}>

            {/* <form> */}
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Welcome, {props.quote?.policy_holder.first_name}!</h1>
            </div>

            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h5>Interested to learn more about our policy coverages?</h5>
              <br/>
              <h6>You've come to the right place.</h6>
            </div>

          </div>

          <div className="col-lg-12 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <div className="py-2">
              <h5>Deductible</h5>
              <select className="form-select" aria-label="Default select example">
                <option defaultValue>{deductibles? [deductibles[0]] : 'loading...'}</option>
                {deductibles?.map(value => (
                <option value={value} key={value}>{value}</option>
                ))}
              </select>
            </div>

            <div className="py-2">
              <h5>Asteroid Collision Limit</h5>
              <select className="form-select" aria-label="Default select example">
                <option defaultValue>{asteroid? [asteroid[0]] : 'loading...'}</option>
                {asteroid?.map(value => (
                <option value={value} key={value}>{value}</option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-4 w-100">Submit</button>
        </div>

      </section>



      {/* END OF HERO  */}

      <main id="main">
        <section id="about" className="about">
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
      </main>
    </React.Fragment>
  );
}

QuoteOverview.propTypes = {};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    quote: state.quote,
    error: state.error
  }
}

QuoteOverview = connect(mapStateToProps)(QuoteOverview);

export default QuoteOverview;