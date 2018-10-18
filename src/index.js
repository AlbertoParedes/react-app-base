import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './redux/reducers/reducers';

import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';

const browserHistory = createBrowserHistory();
const store = createStore(allReducers);

render(
  <Provider store={store}>
    <Router history={browserHistory} path="/" component={Home}>
      <div>
        <Route exact path={`${process.env.PUBLIC_URL}`} component={Home} />
        <Route exact path={`${process.env.PUBLIC_URL}/signin`} component={SignIn} />
      </div>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
