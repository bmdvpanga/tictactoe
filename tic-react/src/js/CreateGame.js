import React from 'react';
import { BASE_URL } from './requests';

/*Child component of GameModeMenu*/
class CreateGame extends React.Component{

    //props should be a gameMode, and a function pointer for a 
    //callback function which gets passed a JSON representation of 
    //the current game
    constructor(props){
        super();
        this.requestNewGameFromTTTServer = this.requestNewGameFromTTTServer.bind(this);
        //This component has its own version of the Game Mode from its parent component
        this.state = {
            gameMode: "localGame"
        }
    }

    //get the new props (game mode from Game Menu parent) and store it in state
    UNSAFE_componentWillReceiveProps(newProps) {
        this.setState({gameMode: newProps.gameMode})
    }

    //Requests a new game to be started on the TicTacToe Python back-end. The new game has to be created with a GameMode
    //from the GameMode menu component.
    requestNewGameFromTTTServer(event){
        console.log("Fired the request new game function.")
        if (this.state.gameMode !== undefined){
            console.log("The game mode was not undefined.");
            let joined = BASE_URL +  '/games/?gameMode=' + this.state.gameMode;
            console.log(joined);
            
            //fetch requests wraps everything in a promise
            let request = fetch(joined, {method: 'POST'})
            .then(response => response.json(), response => console.log(response))
            .then(json => this.props.callback(json), json => console.log(json))
            .catch(); //looks like a catch function can take an arrow function lambda thing as a parameter

            console.log(request)
        }
            
    }

    render(){
        return(<button type="button" className="btn btn-success" onClick = {this.requestNewGameFromTTTServer}>Create Game</button>);
    }
}

export default CreateGame;