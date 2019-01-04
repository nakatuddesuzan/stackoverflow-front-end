import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './navbar';
import Footer from './footer';
import SignUp from './SignUp';

const landingPage = (props) => {
  
  const {children} = props;

  return (
    <React.Fragment>
      <form>
        <div className="div1">
          <div className="div2">
            <h1>StackOverflow-lite app </h1>
            <h2>Learn, Collaborate, Excel, Develop</h2>
            <p>
              Join the world's largest developer community
              <br />
              <br />
              Become a world class developer by asking as many <br />
              <br /> questions as you can!!!!!
            </p>
          </div>
          <SignUp />
          
        </div>
        <br />
        <br />
      </form>
    </React.Fragment>
  );
}

export default landingPage;
