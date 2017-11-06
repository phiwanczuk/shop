import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { store } from './store'

import MoviesSearch from './components/MoviesSearch'
import LoadingIndicator from './components/LoadingIndicator'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={MoviesSearch}/>
          <Route path="/movie/:id" component={MovieView}/>
        </Router>
      </Provider>
    );
  }
}

export default App;
