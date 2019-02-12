import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import TicTacToe from './js/TicTacToe';
import * as serviceWorker from './js/serviceWorker';

/*Renders the DOM in the container defined in index.html
Can be thought of as the MAIN RENDER/STARTING POINT
for the  entire React/TicTacToe application. TicTacToe component is the parent 
(different from and OOP Parent, doesn't inherit all of its data automatically -- more like a 
DOM Parent)*/
ReactDOM.render(<div><TicTacToe/></div>, document.getElementById('reactContainer'));

/* If you want your app to work offline and load faster, you can change
unregister() to register() below. Note this comes with some pitfalls.
Learn more about service workers: http://bit.ly/CRA-PWA */
serviceWorker.unregister();