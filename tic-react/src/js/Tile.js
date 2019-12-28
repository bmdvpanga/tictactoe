import React, { Component } from 'react';
import '../css/TicTacToe.css';
import {BASE_URL} from './requests'
import urljoin from 'url-join';

class Tile extends Component {
   
    constructor(props){
        super(props);
        this.state = {
          // Placeholder text so that the game board does not collapse.  
          game_message: null,
          game_over: null,
          current_move: props.current_move
        }
        
        this.playMoveRequest = this.playMoveRequest.bind(this); // bind playMove so it knows what 'this' is when the function is called.  
        this.playMoveAfterAsyncResponse = this.playMoveAfterAsyncResponse.bind(this);
        this.sendMovetoTTTServer = this.sendMovetoTTTServer.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }
  
    // Reupdate the tile state after the TTT parent is updated. This function is called on the creation of a new game.
    // apparently, this function is deprecated for complicated technical reasons.
    // https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops
    UNSAFE_componentWillReceiveProps(newProps){
      this.setState({current_move: newProps.current_move});
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

    // Calls this function as soon as the json response is received
    // from the move request, then passes the entire json to the callback function in the TTT file
    handleResponse(json){
      this.playMoveAfterAsyncResponse(json);
      this.props.callback(json); 
    }

    // In a single player game -- still need to communicate with server to check if a move is valid or not etc.
    playMoveRequest(event){
        // Only send moves to the server if the game hasn't started yet, (the message is still the default front-end message)
        if (this.props.game_message !== "Game Output Here"){
          this.sendMovetoTTTServer(); 
        }
    }

    // When the promise is resolved, we use the message sent back along with the game state to determine whether or not the tile 
    // data can be updated.
    playMoveAfterAsyncResponse(json){
      // If the move was valid then go ahead and update the current player so it can be set in the tile. 
      // TODO: Use HTTP status codes instead of checking the message?
      if (!json.game_message.includes("invalid") && !this.state.game_over){
        this.setState({current_move: this.state.current_move});
      }  
    }

    //TODO: Maybe can have an update board function in TTT
    render() {
      return (
        <div onClick={this.playMoveRequest} className="Tile">
          {this.state.current_move}
        </div>
      );
  }
}

export default Tile;