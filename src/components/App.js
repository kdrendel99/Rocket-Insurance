import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from "./header/Header";
import Home from "./home/Home";
import QuoteOverview from "./quote-overview/QuoteOverview";
import RatingInfo from "./rating-info/RatingInfo";
import Footer from "./footer/Footer";

function App() {
  return (
    <React.Fragment>
      <React.StrictMode>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>
            <Switch>
            <Route path ="/rating-info" component={RatingInfo}/>
            </Switch>
            <Switch>
              <Route path="/quote-overview" component={QuoteOverview}/>
            </Switch>
            <Footer/>
        </Router>
      </React.StrictMode>
    </React.Fragment>
  );
}

export default App;