import React, { Component } from 'react';

import Header from './shared/components/header';
import Users from './containers/users';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-content">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
