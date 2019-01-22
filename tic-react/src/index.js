import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import TicTacToe from './TicTacToe';
import GameTypeMenu from './GameTypeMenu'
import * as serviceWorker from './serviceWorker';

//renders the dom in the container defined in index.html
//can be thought of as the main render starting point
//for the React/TicTacToe application
ReactDOM.render(<div><TicTacToe />
    <br></br>
    <GameTypeMenu/></div>
                , document.getElementById('reactContainer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
