import React, { Component } from 'react';
import { Provider } from 'react-redux'

import { store } from './store'

import MoviesSearch from './components/MoviesSearch'
import LoadingIndicator from './components/LoadingIndicator'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
      <LoadingIndicator/>
      </div>
      </Provider>
    );
  }
}

export default App;
