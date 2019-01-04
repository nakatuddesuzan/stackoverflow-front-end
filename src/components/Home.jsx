
import React from 'react';
import LandingPage from "./landingpage";
// import "../assets/styles.css";
import SignUp from './SignUp';

class Home extends React.Component {
  state = {
  };
  render() {
    return (
      <React.Fragment>
        <SignUp />
      </React.Fragment>
    );
  }
}

export default Home;