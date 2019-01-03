import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './navbar';
import Footer from './footer';

const landingPage = () => (
  <React.Fragment>
    <NavBar />
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

        <div className="index">
          <div className="sform sformindex">
            <div className="flex">
              <label htmlFor="dname">
                <b>Display Name</b>
              </label>
              <input type="text" placeholder="Sue" name="dname" required />
            </div>
            <br />
            <br />
            <div className="flex">
              <label htmlFor="email">
                <b>Email Address</b>
              </label>
              <input
                type="email"
                placeholder="sue@gmail.com"
                name="email"
                required
              />
            </div>
            <br />
            <br />
            <div className="flex">
              <label htmlFor="psw">
                <b>Password</b> 
              </label>
              &nbsp;
              {/* &nbsp; */}
              <input type="password" placeholder="" name="psw" required />
            </div>
            <button type="submit" className="btn-index">
              Sign up
            </button>
          </div>
          <br />
          <br />
          <div>
            <b>Already have an account? </b>
            <a href="login.html">Login</a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </form>
  </React.Fragment>
);

export default landingPage;
