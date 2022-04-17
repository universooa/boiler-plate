import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import 'antd/dist/antd.css'
import {Provider} from 'react-redux';
import { applyMiddleware,createStore } from 'redux';

import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers'; //index.js 알아서 찾음

const createStoreWithMiddleWare= applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider
    store={createStoreWithMiddleWare(Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
  >
  <React.StrictMode>
    <div>hello</div>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
