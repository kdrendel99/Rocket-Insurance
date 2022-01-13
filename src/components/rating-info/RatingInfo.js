import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { makeApiCall } from './../../actions/index'


function RatingInfo(props){
  const [quoteSuccess, setQuoteSuccess] = useState(null)
  const [quoteFailure, setQuoteFailure] = useState(null)
  const history = useHistory();
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const addressOneRef = useRef()
  const addressTwoRef = useRef()
  const cityRef = useRef()
  const regionRef = useRef()
  const postalRef = useRef()


  useEffect(() => {
    if (props.quote !== null){
      setQuoteSuccess(props.quote)
      // history.push("/quote-overview")
    }
  },[props.quote])

  useEffect(() => {
    if (props.error !== null) setQuoteSuccess(props.error)
  },[props.error])

  const handleNewQuoteSubmission = (newQuote) => {
    const { dispatch } = props;
    dispatch(makeApiCall(newQuote))
  }

  async function handleSubmit(e){
    e.preventDefault()

    const userQuoteSubmission = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      address: {
        line_1: addressOneRef.current.value,
        line_2: addressTwoRef.current.value,
        city: cityRef.current.value,
        region: regionRef.current.value,
        postal: postalRef.current.value,
      }
    }
    // console.log(userQuoteSubmission)

    handleNewQuoteSubmission(userQuoteSubmission)
  }

  return (
    <React.Fragment>
      <section id="hero" className="d-flex align-items-center">

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-12 d-flex flex-row justify-content-center">
              <h1>Get a quote</h1>
            </div>

            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" >
              <form onSubmit={handleSubmit}>
              {/* FIRST NAME  */}
                <div className="my-2">
                  <input type="text" className="form-control" id="clientFirstName" placeholder="First name" ref={firstNameRef}/>
                </div>

              {/* LAST NAME  */}
                <div className="my-2">
                  <input type="text" className="form-control" id="clientLastName" placeholder="Last name" ref={lastNameRef}/>
                </div>

              {/* ADDRESS LINE 1  */}
                <div className="my-2">
                  <input type="text" className="form-control" placeholder="Address line 1" ref={addressOneRef}/>
                </div>

              {/* ADDRESS LINE 2  */}
                <div className="my-2">
                  <input type="text" className="form-control" placeholder="Address line 2" ref={addressTwoRef}/>
                </div>

              {/* CITY  */}
                <div className="my-2">
                  <input type="text" className="form-control" placeholder="City" ref={cityRef}/>
                </div>

              {/* REGION  */}
                <div className="my-2">
                  <input type="text" className="form-control" placeholder="Region" ref={regionRef}/>
                </div>

              {/* POSTAL (ZIP CODE) */}
                <div className="my-2">
                  <input type="text" className="form-control" placeholder="Postal code" ref={postalRef}/>
                </div>

                <button type="submit" className="btn btn-primary mt-2 w-100">Submit</button>
                </form>
            </div>
          <div className="container">
            {/* <p style={{color:"white"}}>{props.quote ? props.quote.policy_holder.first_name : 'hello world'}</p> */}
          </div>
        </div>
      </div>
    </section>



    {/* END OF HERO  */}

    {/* MAIN SECTION  */}
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

      {/* END OF ABOUT SECTION  */}
    </main>

    </React.Fragment>
  );
}

RatingInfo.propTypes = {};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    quote: state.quote,
    error: state.error
  }
}

RatingInfo = connect(mapStateToProps)(RatingInfo);

export default RatingInfo;
