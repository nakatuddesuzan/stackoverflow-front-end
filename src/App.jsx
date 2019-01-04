import React from 'react';
import LandingPage from './components/landingpage';
import Notifications from 'react-notify-toast';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import store from './store/store';
import Login from './components/Login';
import Root from './Root';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Root>
              <Notifications />
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/login" component={Login} />
            </Root>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
