//This list of imports is getting long. Is there a way to import all of the Javascript/React components inside of the current directory?
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import ParentComponent from './js/TicTacToe'
import TicTacToe from './js/TicTacToe';
import GameModeMenu from './js/GameModeMenu'
import TileMenu from './js/TileMenu'
import SoundCheckbox from './js/SoundCheckbox'
import CreateGame from './js/CreateGame'
import * as serviceWorker from './js/serviceWorker';

/*renders the dom in the container defined in index.html
can be thought of as the main render starting point
for the React/TicTacToe application. 

Seperating everything with breaks
seems like bad practice, should probably be controlled with CSS, in future. 
GameTypeMenu is parent of CreateGame so the components can exchange data 
(different from and OOP Parent, doesn't inherit all of its data -- DOM Parent)*/
ReactDOM.render(
    <div>
        <TicTacToe/>   
        <br></br>
        <TileMenu/>
        <br></br>
        <SoundCheckbox/>
        <br></br>
        <GameModeMenu/>
    </div>
                , document.getElementById('reactContainer'));

/* If you want your app to work offline and load faster, you can change
unregister() to register() below. Note this comes with some pitfalls.
Learn more about service workers: http://bit.ly/CRA-PWA */
serviceWorker.unregister();
