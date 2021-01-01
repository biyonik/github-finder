import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import App from "./components/App";
import AppRouter from './routers/AppRouter';



ReactDOM.render(<App />, document.querySelector('#root'))
// ReactDOM.render(<AppRouter />, document.querySelector('#root'))
