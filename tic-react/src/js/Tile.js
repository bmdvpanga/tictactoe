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
        
        this.playMoveRequest = this.playMoveRequest.bind(this); //bind playMove so it knows what 'this' is when the function is called.  
        this.playMoveAfterAsyncResponse = this.playMoveAfterAsyncResponse.bind(this);
        this.sendMovetoTTTServer = this.sendMovetoTTTServer.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }
  
    //Reupdate the tile state after the TTT parent is updated. This function is called on the creation of a new game.
    //apparently, this function is deprecated for complicated technical reasons.
    //https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops
    UNSAFE_componentWillReceiveProps(newProps){
      this.setState({currentPlayer: newProps.currentPlayer});
      this.setState({gameMessage: newProps.gameMessage})
    }
    
    sendMovetoTTTServer(){
      //currently send the move to the first game in the python games hash
      fetch(BASE_URL + "games/" + "1", 
      {method: 'PUT', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },body: JSON.stringify({"boardKey": this.props.boardKey})})
            .then(response => response.json())//Turn the response into json as soon as the asynchronous (promise?) is resolved.
            .then(this.handleResponse) // I think this means that as as soon as the asynchronous call is complete, then call the function.
            .catch(error => console.error("Problem with sending the move request.")); 
    }

    handleResponse(json){
      this.props.callback(json); 
      this.playMoveAfterAsyncResponse(json);
    }

    //In a single player game -- still need to communicate with server to check if a move is valid or not etc.
    playMoveRequest(event){
        if (this.state.currentPlayer !== "N/A"){
          this.sendMovetoTTTServer(); //only send moves to the server if there is a currentPlayer (This current player could be empty string)
        }
    }

    //When the promise is resolved, we use the message sent back along with the game state to determine whether or not the tile data can be updated.
    playMoveAfterAsyncResponse(json){
      console.log("Check state of the game board, so that we can figure out whether or not a move was invalid.")
      //for debugging.
      console.log(json.gameMessage)
      if (!json.gameMessage.includes("invalid")){
        this.setState({currentMove: json.currentPlayer});
      }  
    }

    /* A quick note here: Tried to use .innerHTML (which seems like a huge no-no, and a nasty blend
    of vanilla JS paradigms with React), so why do that when can just supply the HTML 
    myself in this render method, or use JSX to embed some JS varaibles into the
    markup? */
    render() {
    return (
      <div onClick={this.playMoveRequest} className="Tile">
        {this.state.currentMove}
      </div>
    );
  }
}

export default Tile;