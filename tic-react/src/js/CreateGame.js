import React from 'react';
import { PROXY_URL } from './requests';

/*Child component of GameModeMenu*/
class CreateGame extends React.Component{

    constructor(props){
        super();
        this.requestNewGameFromTTTServer = this.requestNewGameFromTTTServer.bind(this);
        //This component has its own version of the Game Mode from its parent component
        this.state = {
            gameMode: "localGame"
        }
    }

    //get the new props (game mode from Game Menu parent) and store it in state
    componentWillReceiveProps(newProps) {
        //this.props.gameMode = newProps.gameMode; props are only a read only property, so cannot do this
        this.setState({gameMode: newProps.gameMode})
    }

    //Requests a new game to be started on the TicTacToe Python back-end. The new game has to be created with a GameType 
    //from the GameTypeMenu Component
    requestNewGameFromTTTServer(event){
        console.log("requestNewGameFromTTTServer() was called and the value it got from the GameModeMenu is " + this.state.gameMode );//we want the id because CreateGame is passed an HTML element as a prop from
                                                                                                                                      //the game type menu stuff
        //gameMode
        if (this.state.gameMode !== undefined){
            //fetch requests wraps everything in a promise
            fetch(/*PROXY_URL +*/ 'http://127.0.0.1:5000/games/' + "?gameMode=" + this.state.gameMode)
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(); //looks like a catch function can take an arrow function lambda thing as a parameter
        }
            
    }

    render(){
        return(<button type="button" class="btn btn-success" onClick = {this.requestNewGameFromTTTServer}>Create Game</button>);
    }
}

export default CreateGame;