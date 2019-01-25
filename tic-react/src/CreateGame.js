import React from 'react';
import Requests from './requests';

class CreateGame extends React.Component{

    constructor(){
        super();
        this.requestNewGameFromTTTServer = this.requestNewGameFromTTTServer.bind(this);
    }

    //Requests a new game to be started on the TicTacToe Python back-end
    requestNewGameFromTTTServer(event){
        console.log("requestNewGameFromTTTServer() was called");
        //fetch requests wraps everything in a promise
        fetch(proxyurl + 'http://127.0.0.1:5000/')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(); //looks like a catch function can take an arrow function lambda thing as a parameter
    }

    render(){
        return(<button type="button" class="btn btn-success" onClick = {this.requestNewGameFromTTTServer}>Create Game</button>);
    }
}

export default CreateGame;