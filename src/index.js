import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reducers from "./redux/reducers";
import { Provider } from "react-redux";
const store = createStore(
    reducers,//logic
    { users: [] }//initial state, data
);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));