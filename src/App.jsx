import React from 'react';

class App extends React.Component {
  state = {
    name: 'Suzan',
  };

  renderGreeting = () => (
    <h1>Welcome!!! {this.state.name}!</h1>
  );

  render() {
    return this.renderGreeting();
  }
}

export default App;
