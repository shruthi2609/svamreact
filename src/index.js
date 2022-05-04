
import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import App from "./App"
import reducers from "./reducers"
const store=configureStore(
    {
        reducer:{
            userReducer:reducers
        }
    }
)
ReactDOM.render(
  <>
<Provider store={store}>
<App></App>
</Provider>
  </>,
  document.getElementById('root')
);

 
