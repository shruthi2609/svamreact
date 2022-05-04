
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux"
import { Provider } from 'react-redux';
import App from "./AppCoreRedux"
import reducer from './reducers';
const store=createStore(
  reducer
)
ReactDOM.render(
  <>
<Provider store={store}>
<App></App>
</Provider>
  </>,
  document.getElementById('root')
);

 
