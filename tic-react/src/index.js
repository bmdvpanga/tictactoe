//This list of imports is getting long. Is there a way to import all of the Javascript/React components inside of the current directory?
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import TicTacToe from './js/TicTacToe';
import GameTypeMenu from './js/GameTypeMenu'
import TileMenu from './js/TileMenu'
import SoundCheckbox from './js/SoundCheckbox'
import CreateGame from './js/CreateGame'
import * as serviceWorker from './js/serviceWorker';

/*renders the dom in the container defined in index.html
can be thought of as the main render starting point
for the React/TicTacToe application*/
ReactDOM.render(
    <div>
        <TicTacToe />
        <br></br>
        <GameTypeMenu/>
        <br></br>
        <TileMenu/>
        <br></br>
        <SoundCheckbox/>
        <br></br>
        <CreateGame/>
    </div>
                , document.getElementById('reactContainer'));

/* If you want your app to work offline and load faster, you can change
unregister() to register() below. Note this comes with some pitfalls.
Learn more about service workers: http://bit.ly/CRA-PWA */
serviceWorker.unregister();
