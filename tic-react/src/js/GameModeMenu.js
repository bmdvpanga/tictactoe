import React from 'react';
import CreateGame from './CreateGame'


/*
    This is the parent of CreateGame
    This seems like bad practice to use bootstrap, here. Especially without any funtionality provided, yet.
    What is the point of using React, then?
*/
class GameModeMenu extends React.Component{

    
    constructor(){
        super();
        this.state = {
            gameMode: undefined
        }
        this._gameMode = undefined; //uneccessary undefined set, but I like it for clarity, this isn't actually part of a component's React STATE functionality, but it is passed into the state
                                    //once setGameMode is called
        this.setGameMode = this.setGameMode.bind(this);
    }

    //set the gameMode state
    //not that setState does not immediately set the state of a component
    setGameMode(event){
        this.setState({gameMode: this._gameMode}); //set the gameMode inside our component's state, the state isn't set immediately which is fine, setState() requests that the state is set, doesn't call it
        console.log("setGameMode() was called and state of the GameModeMenu component should be updated shortly to have a gameMode of" + this._gameMode.id);//debug
        /*note that gameMode.value is long indicating the ordinal position of the list element inside a given <ol>
        as taken from https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement*/
        //console.log("The player selected the game mode: " + this.state.gameMode.id + " on the front end");
    }

    /*render function
    ref returns JavaScript object of type. Don't need to specify value.
    class = "disabled" effect was not appearing 
    CURRENTLY BUGGED. THE ONLY GAME MODE THAT IS BEING SENT TO COMPONENT LISTENER IS onlineGame. Send the game mode to 
    CreateGame child*/

    render(){
        return(
            <div>
                <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Game Mode
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" role="menu">
                    <li ref = {(a) => this._gameMode = a } onClick = {this.setGameMode} id = "twoPlayer">Local Two Player</li>
                    <li  ref = {(b) => this._gameMode = b }  onClick = {this.setGameMode} id = "computer">Computer</li>
                    <li  ref = {(c) => this._gameMode = c }  onClick = {this.setGameMode} id = "onlineGame">Online Game</li>
                </ul>
                </div>
                <br></br>
                <CreateGame gameMode={this.state.gameMode}></CreateGame>
            </div>    
        );
    }
}

export default GameModeMenu;