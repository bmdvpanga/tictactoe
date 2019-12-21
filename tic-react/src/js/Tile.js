import React, { Component } from 'react';
import '../css/TicTacToe.css';
import {BASE_URL} from './requests'
import urljoin from 'url-join';

class Tile extends Component {
   
    constructor(props){
        super(props);
        this.state = {
          // Placeholder text so that the game board does not collapse. 
          // TODO: Make the grid a fixed size within it's container which will adjust to the device or size of browser window.
          // TODO: Figure out if can just use current_player. Why need two?
          current_player: "N/A", 
          game_message: this.props.game_message,
          game_over: this.props.game_over,
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
      this.setState({current_player: newProps.current_player});
      this.setState({game_message: newProps.game_message})
      this.setState({game_over: newProps.game_over})
    }
    
    // Make a PUT request to the back end of TTT for updating the dict
    sendMovetoTTTServer(){
      //currently send the move to the first game in the python games hash
      fetch(urljoin(BASE_URL, "games", "1"), 
      {method: 'PUT', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },body: JSON.stringify({"boardKey": this.props.boardKey})})
            .then(response => response.json())//Turn the response into json as soon as the asynchronous (promise?) is resolved.
            .then(this.handleResponse) // I think this means that as as soon as the asynchronous call is complete, then call the function.
            .catch(error => console.error("Problem with sending the move request.")); 
    }

    handleResponse(json){
      this.playMoveAfterAsyncResponse(json);
      this.props.callback(json); 
    }

    // In a single player game -- still need to communicate with server to check if a move is valid or not etc.
    playMoveRequest(event){
        // Only send moves to the server if there is a current_player (This current player could be empty string)
        if (this.state.current_player !== "N/A"){
          this.sendMovetoTTTServer(); 
        }
    }

    // When the promise is resolved, we use the message sent back along with the game state to determine whether or not the tile data can be updated.
    playMoveAfterAsyncResponse(json){
      // If the move was valid then go ahead and update the current player so it can be set in the tile. 
      // TODO: Use HTTP status codes instead of checking the message?
      if (!json.game_message.includes("invalid")){
        this.setState({currentMove: this.state.current_player});
      }  
    }

    //TODO: Maybe can have an update board function in TTT
    render() {
    console.log("tile render, game over: " + this.state.game_over)
    if (!this.state.game_over){
      return (
        <div onClick={this.playMoveRequest} className="Tile">
          {this.state.currentMove}
        </div>
      );
    }  
  }
}

export default Tile;