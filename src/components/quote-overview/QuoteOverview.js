import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { callPostRequest, callPutRequest } from './../../actions/index'
import sitting from './../../images/sitting.png'


function QuoteOverview(props){
  const [premium, setPremium] = useState()
  const [deductibles, setDeductibles] = useState()
  const [asteroid, setAsteroid] = useState()
  const [deductibleChanged, setDeductibleChanged] = useState()
  const [asteroidChanged, setAsteroidChanged] = useState()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const dedSelectionChanged = (event) => {
    const currentSelection = event.target.value;
    setDeductibleChanged(currentSelection)
  }

  const astSelectionChanged = (event) => {
    const currentSelection = event.target.value;
    setAsteroidChanged(currentSelection)
  }

  const createNewPutRequest = (currDed, currAst) => {
    if (props.quote !== null){
      const { dispatch } = props;
      // console.log('props = ',props.quote)
      const newPutRequest = {
        quote: {
          quoteId: props.quote.quoteId,
          rating_address: props.quote.rating_address,
          policy_holder: props.quote.policy_holder,
          variable_selections: {
            deductible: currDed,
            asteroid_collision: currAst
          }
        }
      }
      dispatch(callPutRequest(newPutRequest))
    }
  }

  useEffect(() => {
    if (asteroid !== undefined){
      createNewPutRequest(Number(deductibleChanged), asteroid[0])
    }
  },[deductibleChanged])

  useEffect(() => {
    if (deductibles !== undefined){
      createNewPutRequest(deductibles[0], Number(asteroidChanged))
    }
  },[asteroidChanged])
  

  useEffect(() => {
    if (props.quote !== null ){
      console.log(props.quote)
      // console.log('MY PREMIUM == ', props.quote.premium)
      setDeductibles(props.quote?.variable_options?.deductible?.values)
      setAsteroid(props.quote?.variable_options?.asteroid_collision?.values)
      setPremium(props.quote?.premium)
    }
  },[props.quote])


  return (
    <React.Fragment>
      <section id="hero" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center mt-0">
          <div className="row d-flex justify-content-center">

            <div className="d-flex justify-content-center">
              <h2>Welcome, {props.quote?.policy_holder.first_name}!</h2>
            </div>

            <div className="d-flex justify-content-center mb-2">
              <h1>Quote overview</h1>
            </div>

            <div className="d-flex justify-content-center">
              <h6>Interested in learning more about our policy coverages?</h6>
            </div>
            <div className="d-flex justify-content-center">
              <h6>You've come to the right place.</h6>
            </div>

            <div className="d-flex justify-content-center mb-4">
              <h2>My Annual Premium: ${premium}</h2>
            </div>

            <div className="col-lg-8">
              <div className="pt-2">
                <h5 className="pb-2">Deductible</h5>
                <select className="form-select" aria-label="Default select example" onChange={dedSelectionChanged} value={deductibleChanged}>
                  <option defaultValue>{deductibles? [deductibles[0]] : 'loading...'}</option>
                  {deductibles?.map(value => (
                  <option value={value} key={value}>{value}</option>
                  ))}
                </select>
              </div>

              <div className="pt-2 pb-1">
                <h5 className="pb-2">Asteroid Collision Limit</h5>
                <select className="form-select" aria-label="Default select example" onChange={astSelectionChanged} value={asteroidChanged}>
                  <option defaultValue>{asteroid? [asteroid[0]] : 'loading...'}</option>
                  {asteroid?.map(value => (
                  <option value={value} key={value}>{value}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary mt-4 w-100">Submit</button>
            </div>

          </div>
        </div>
      </section>
    {/* END OF HERO  */}

      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                <img src={sitting} className="img-fluid" alt=""/>
              </div>
              <div className="col-lg-6 pt-5 pt-lg-0">
                <h3>Like what you see?</h3>
                <p>
                  If you're ready to get started saving with your new coverage, our 24-hour customer service team is just one click or call away! 
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <i className="bx bx-receipt"></i>
                    <h4>Satisfaction guaranteed</h4>
                    <p>We guarantee our sign up experience to surpass your standards, or your money back.</p>
                  </div>
                  <div className="col-md-6" >
                    <i className="bx bx-cube-alt"></i>
                    <h4>Hassle-free cancellation</h4>
                    <p>If for any reason you decide to cancel your policy, our team can help. No strings attached.</p>
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

QuoteOverview = connect(mapStateToProps)(QuoteOverview);

export default QuoteOverview;