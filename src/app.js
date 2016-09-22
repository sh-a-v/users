import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './store';
import Header from './shared/components/header';
import Users from './containers/users';
import './app.css';

// Remove this when material-ui@0.16.0 will be released
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div className="app">
            <Header />
            <div className="app-content">
              <Users />
            </div>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
