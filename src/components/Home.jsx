
import React from 'react';
import LandingPage from "./landingpage";
import "../assets/styles.css";

class Home extends React.Component {
  state = {
  };
  render() {
    return (
      <React.Fragment>
        {/* <div className="jumbotron2"> */}
        <LandingPage />
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default Home;