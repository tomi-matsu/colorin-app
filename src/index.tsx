import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
// import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import itemsReducer from './reducers/itemsReducer';
import { getItems } from "./actions/itemsAction"
// import tesstore from './store';

// const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// ミドルウェアの導入
// const store = createStore(
//   itemsReducer,
//   storeEnhancers(applyMiddleware(thunk)),
// )

const store = createStore(
  itemsReducer,
  applyMiddleware(thunk)
)

store.dispatch(getItems())

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default store
