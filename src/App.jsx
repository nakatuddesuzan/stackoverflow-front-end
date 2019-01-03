import React from 'react';
import LandingPage from './components/landingpage';
import Notifications from 'react-notify-toast';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import store from './store/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Notifications />
            <Route path="/" exact component={LandingPage} />
            {/* <Route exact path="/signup" exact component={SignUp} /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
