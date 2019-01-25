import React from 'react';


/*
    This seems like bad practice to use bootstrap, here. Especially without any funtionality provided, yet.
    What is the point of using React, then?
*/
class GameTypeMenu extends React.Component{


    constructor(){
        super();
        this._gameMode = undefined; //uneccessary, but I like it for clarity
        this.sendModeToTTTServer = this.sendModeToTTTServer.bind(this);
    }

    sendModeToTTTServer(event){
        console.log("sendModeToTTTServer() was called");
        console.log("ref attribute gives the event listener: " + this._gameMode);
        /*note that gameMode.value is long indicating the ordinal position of the list element inside a given <ol>
        as taken from https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement*/
        console.log("The player selected the game mode: " + this._gameMode.id + " on the front end");
        //this.gameMode = undefined;
    }

    /*render function
    ref returns JavaScript object of type. Don't need to specify value.
    class = "disabled" effect was not appearing 
    CURRENTLY BUGGED. THE ONLY GAME MODE THAT IS BEING SENT TO COMPONENT LISTENER IS onlineGame*/

    render(){
        return(
            <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Game Type
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <li ref = {(a) => this._gameMode = a } onClick = {this.sendModeToTTTServer} id = "twoPlayer">Local Two Player</li>
                <li  ref = {(a) => this._gameMode = a }  onClick = {this.sendModeToTTTServer} id = "computer">Computer</li>
                <li  ref = {(a) => this._gameMode = a }  onClick = {this.sendModeToTTTServer} id = "onlineGame">Online Game</li>
            </ul>
            </div>
        );
    }
}

export default GameTypeMenu;