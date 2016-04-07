import React from 'react'
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './App'
import RootReducer from './reducers/scores'
import scss from './static/styles/base.scss'

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

let store = createStore(
  RootReducer,
  applyMiddleware(thunkMiddleware)
);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#app')
)
