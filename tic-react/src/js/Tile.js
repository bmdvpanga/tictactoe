import React, { Component } from 'react';
import '../css/TicTacToe.css';
import {BASE_URL} from './requests'

/*ES6 JavaScript class syntax. Tile is a child component of TicTacToe*/
class Tile extends Component {
   
    constructor(props){
        super(props);
        this.state = {
          currentPlayer: "N/A", //Placeholder text so that the game board does not collapse. TODO: Make the grid a fixed size within it's container which will adjust to the device or size of browser window.
          gameMessage: this.props.gameMessage,
          currentMove: "N/A"
        }
        
        this.playMove = this.playMove.bind(this); //bind playMove so it knows what 'this' is when the function is called.  
        this.sendMovetoTTTServer = this.sendMovetoTTTServer.bind(this);
    }
  
    //Reupdate the tile state after the TTT parent is updated. This function is called on the creation of a new game.
    //apparently, this function is deprecated for complicated technical reasons.
    //https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops
    UNSAFE_componentWillReceiveProps(newProps){
      console.log("called componentWillReceiveProps")
      this.setState({currentPlayer: newProps.currentPlayer});
      this.setState({gameMessage: newProps.gameMessage})
    }
    
    sendMovetoTTTServer(){
      //currently send the move to the first game in the python games hash
      console.log(this.props.boardKey);
      fetch(BASE_URL + "games/" + "1", 
      {method: 'PUT', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },body: JSON.stringify({"boardKey": this.props.boardKey})})
            .then(response => response.json())
            .then(json => this.props.callback(json))
            .catch(error => console.error("Problem with sending the move request.")); 
    }

    //In a single player game -- still need to communicate with server to check if a move is valid or not etc.
    playMove(event){
        if (this.state.currentPlayer !== "N/A"){
          this.sendMovetoTTTServer(); //only send moves to the server if there is a currentPlayer (This current player could be empty string)
          console.log("check state of the game board.")
          this.setState({currentMove: this.state.currentPlayer});
        }
    }


    /* A quick note here: Tried to use .innerHTML (which seems like a huge no-no, and a nasty blend
    of vanilla JS paradigms with React), so why do that when can just supply the HTML 
    myself in this render method, or use JSX to embed some JS varaibles into the
    markup? */
    render() {
    return (
      <div onClick={this.playMove} className="Tile">
        {this.state.currentMove}
      </div>
    );
  }
}

export default Tile;