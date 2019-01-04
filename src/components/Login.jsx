import React, { Component } from 'react';
import { connect } from 'react-redux';
import login from '../store/actions/logInActions';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.login();
  }

  login() {
    const { logIn } = this.props;
    const { email, password } = this.state;
    logIn({ email, password });
  }

  render() {
    const { password, email } = this.state;
    return (
      <div className="body-div">
        <div className="sform">
          <div>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <br />
            <input
              type="email"
              placeholder="sue@gmail.com"
              name="email"
              value={email}
              onChange={this.onChange}
              required
            />
            <br />
            <br />
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <br />
            <input
              type="password"
              placeholder=""
              name="password"
              value={password}
              onChange={this.onChange}
              required
            />
            <br />
            <br />
            <a href="profile.html">
              <button type="submit" onClick={this.onSubmit}>
                Log In
              </button>
            </a>
            <br />
            <br />
            <br />
          </div>
          <div>
            Don't have an account?
            <a className="link" href="signup.html">
              {' '}
              Sign up
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => state;
export const mapDispatchToProps = dispatch => ({
  logIn: logInData => dispatch(login(logInData))
});
export { LogIn };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
