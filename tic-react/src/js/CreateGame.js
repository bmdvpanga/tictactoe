import React from 'react';
import { PROXY_URL } from './requests';

/*Child component of GameModeMenu*/
class CreateGame extends React.Component{

    constructor(props){
        super();
        this.requestNewGameFromTTTServer = this.requestNewGameFromTTTServer.bind(this);
    }

    //Requests a new game to be started on the TicTacToe Python back-end. The new game has to be created with a GameType 
    //from the GameTypeMenu Component
    requestNewGameFromTTTServer(event){
        console.log("requestNewGameFromTTTServer() was called");
        //fetch requests wraps everything in a promise
        fetch(/*PROXY_URL +*/ 'http://127.0.0.1:5000/games/' + this.props.gameMode)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(); //looks like a catch function can take an arrow function lambda thing as a parameter
    }

    render(){
        return(<button type="button" class="btn btn-success" onClick = {this.requestNewGameFromTTTServer}>Create Game</button>);
    }
}

export default CreateGame;