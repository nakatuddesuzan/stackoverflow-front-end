import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import signup from '../store/actions/signUpActions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.signup2();
  }

  signup2() {
    const { signUp } = this.props;
    const { username, email, password } = this.state;
    signUp({ username, email, password });
  }

  render() {
    const { username, password, email } = this.state;
    return (
      <div className="index">
        <div className="sform sformindex">
          <div className="flex">
            <label htmlFor="dname">
              <b>Display Name</b>
            </label>
            <input
              type="text"
              placeholder="Sue"
              name="dname"
              name="username"
              value={username}
              onChange={this.onChange}
              required
            />
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
              value={email}
              onChange={this.onChange}
              required
            />
          </div>
          <br />
          <br />
          <div className="flex">
            <label htmlFor="password">
              <b>Password</b>
            </label>
            &nbsp;
            {/* &nbsp; */}
            <input
              type="password"
              placeholder=""
              name="password"
              value={password}
              onChange={this.onChange}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and 
              one uppercase and lowercase letter, and at 
              least 8 or more characters"
              required
            />
          </div>
          <button type="submit" onClick={this.onSubmit} className="btn-index">
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
    );
  }
}

export const mapStateToProps = state => state;
export const mapDispatchToProps = dispatch => ({
  signUp: signupData => dispatch(signup(signupData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
