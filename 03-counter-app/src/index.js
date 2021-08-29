import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import './index.css'
//import FirstApp from './FirstApp'

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp value={0} />, divRoot)
// ReactDOM.render(<FirstApp greeting='Hi' />, divRoot)
