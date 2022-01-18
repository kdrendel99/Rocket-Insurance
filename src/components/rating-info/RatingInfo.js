import React, { useRef, useEffect, useState } from "react";
import './rating.css'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { callPostRequest } from './../../actions/index'
import custOne from './../../images/han.png'
import custTwo from './../../images/luke.png'
import custThree from './../../images/man.png'
import custFour from './../../images/woman.png'
import Submit from './Submit'

function RatingInfo(props){
  const [newQuote, setNewQuote] = useState(false)
  const [quoteFailure, setQuoteFailure] = useState(false)
  const [inputIsValid, setInputIsValid] = useState()
  const history = useHistory();

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const addressOneRef = useRef()
  const addressTwoRef = useRef()
  const cityRef = useRef()
  const regionRef = useRef()
  const postalRef = useRef()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (newQuote && !props.isLoading && props.error == null){
      history.push("/quote-overview")
    }
  },[props])

  useEffect(() => {
    if (props.error !== null && !props.isLoading) setQuoteFailure(props.error)
  },[props.error])

  const handleNewQuoteSubmission = (newQuote) => {
    const { dispatch } = props;
    dispatch(callPostRequest(newQuote))
  }

  const isFieldLongerThanTwoChars = (currField) => {
    let current = currField.trim()
    if (current.length >= 2 ) return true;
    else return false
  } 

  const validateInput = (userQuote) => {
    const inputsValid = {}
    validate(userQuote)
    function validate(obj){
      for (let key in obj) {
        if (typeof obj[key] === "object") {
            validate(obj[key]);   
        } 
        else if (isFieldLongerThanTwoChars(obj[key])) inputsValid[key] = 'is-valid'
        else inputsValid[key] = 'is-invalid'
        }
      }
      setInputIsValid(inputsValid)
      return !Object.values(inputsValid).includes('is-invalid')
    }
  

  async function handleSubmit(e){
    e.preventDefault()
    setNewQuote(true)

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
    if(validateInput(userQuoteSubmission)){
      console.log('our new quote to send: ', userQuoteSubmission)
      handleNewQuoteSubmission(userQuoteSubmission)
    }
  }

  const getIsValid = (field) => {
    let defaultClass = "form-control "
    if (inputIsValid !== undefined){
      return defaultClass + inputIsValid[field]
    } else return defaultClass;
  }

  return (
    <React.Fragment>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-12 d-flex flex-row justify-content-center">
              <h1 className="mt-0">Get a quote</h1>
            </div>

            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <form onSubmit={handleSubmit}>
                <h5 className="error">{quoteFailure ? '* Oops! Something went wrong. Please try again.' : null}</h5>
              {/* FIRST NAME  */}
                <div className="my-3">
                  <input type="text" className={getIsValid('first_name')} id="clientFirstName" placeholder="First name" ref={firstNameRef}/>
                </div>

              {/* LAST NAME  */}
                <div className="my-3">
                  <input type="text" className={getIsValid('last_name')} id="clientLastName" placeholder="Last name" ref={lastNameRef}/>
                </div>

              {/* ADDRESS LINE 1  */}
                <div className="my-3">
                  <input type="text" className={getIsValid('line_1')} placeholder="Address line 1" ref={addressOneRef}/>
                </div>

              {/* ADDRESS LINE 2  */}
                <div className="my-3">
                  <input type="text" className={getIsValid('line_2')} placeholder="Address line 2" ref={addressTwoRef}/>
                </div>

              {/* CITY  */}
                <div className="my-3">
                  <input type="text" className={getIsValid('city')} placeholder="City" ref={cityRef}/>
                </div>

              {/* REGION  */}
                <div className="my-3">
                  <input type="text" className={getIsValid('region')} placeholder="Region" ref={regionRef}/>
                </div>

              {/* POSTAL (ZIP CODE) */}
                <div className="my-3">
                  <input type="text" className={getIsValid('postal')} pattern="[0-9]{5}" placeholder="Postal code" ref={postalRef}/>
                </div>
                  <Submit isLoading={props.isLoading}/>
                </form>
            </div>
            <div className="col-lg-6 order-1 order-lg-1 d-flex flex-column justify-content-center pt-0 astronaut"/>
        </div>
      </div>
    </section>


    <div className="wave">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
      </svg>
    </div>

    <main id="main">
      <section id="about" className="about customers-info">
          <div className="container">

            <div className="row justify-content-between">
              <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                <div className="row">
                <div className="col-lg-6 col-md-3 col-sm-12 d-flex align-items-stretch">
                  <div className="icon-box">
                    <div className="icon"><img src={custOne} className="img-fluid cust" alt=""/></div>
                    <h4 className="title">Han S.</h4>
                    <div className="stars"><p className="bi bi-star-fill"/><p className="bi bi-star-fill"/><p className="bi bi-star-fill"/><p className="bi bi-star-fill"/><p className="bi bi-star"/></div>
                    <p className="description">Where would I be without these guys?</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-3 col-sm-12 d-none d-md-flex align-items-stretch">
                  <div className="icon-box">
                    <div className="icon"><img src={custTwo} className="img-fluid cust" alt=""/></div>
                    <h4 className="title">Luke S.</h4>
                    <div className="stars"><p className="bi bi-star-fill"/><p className="bi bi-star-fill"/><p className="bi bi-star-fill"/><p className="bi bi-star-fill"/><p className="bi bi-star-fill"/></div>
                    <p className="description">Rocket Insurance cares about my investment.</p>
                  </div>
                </div>

                <div className="col-md-3 d-none d-md-flex d-lg-none d-sm-none align-items-stretch">
                <div className="icon-box">
                    <div className="icon"><img src={custThree} className="img-fluid cust" alt=""/></div>
                    <h4 className="title">David R.</h4>
                    <div className="stars"><p className="bi bi-star-fill"/><p className="bi bi-star-fill"/><p className="bi bi-star-fill"/><p className="bi bi-star-fill"/><p className="bi bi-star-fill"/></div>
                    <p className="description">Switching to Rocket Insurance was an easy decision.</p>
                  </div>
                </div>

                <div className="col-md-3 d-none d-md-flex d-lg-none d-sm-none align-items-stretch">
                <div className="icon-box">
                    <div className="icon"><img src={custFour} className="img-fluid cust" alt=""/></div>
                    <h4 className="title">Reese B.</h4>
                    <div className="stars"><p className="bi bi-star-fill"/><p className="bi bi-star-fill"/><p className="bi bi-star-fill"/><p className="bi bi-star-fill"/><p className="bi bi-star"/></div>
                    <p className="description">I can now fly worry-free thanks to Rocket Insurance!</p>
                  </div>
                </div>
            </div>

              </div>
              <div className="col-lg-6 pt-5 pt-lg-0">
                <h3>See why our customers love us</h3>
                <p>
                  Here at Rocket Insurance, we're all space enthusiasts just like you. We understand the importance of great coverage, and what it means to be treated like family.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <i className="bx bx-receipt"></i>
                    <h4>We reward you.</h4>
                    <p>With great piloting comes great rewards. That's why Rocket Insurance offers incident-free discounts for excellent pilots like you.</p>
                  </div>
                  <div className="col-md-6" >
                    <i className="bx bx-cube-alt"></i>
                    <h4>We expect the unexpected</h4>
                    <p>Whether that means getting caught in an asteroid field or stuck in an electromagnetic storm, we've got a policy for it.</p>
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

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    quote: state.quote,
    error: state.error
  }
}

RatingInfo = connect(mapStateToProps)(RatingInfo);

export default RatingInfo;
