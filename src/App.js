import React, { Component } from 'react';
import { Provider } from 'react-redux'

import { store } from './store'

import MoviesSearch from './components/MoviesSearch'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
      <MoviesSearch/>
      </div>
      </Provider>
    );
  }
}

export default App;
