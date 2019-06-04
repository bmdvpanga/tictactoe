import React, { Component } from 'react';
import '../css/TicTacToe.css';
import {BASE_URL} from './requests'

/*ES6 JavaScript class syntax. Tile is a child component of TicTacToe*/
class Tile extends Component {
   
    constructor(props){
        super(props);
        this.state = {
          moveSpace: "Empty Tile", //in case later on an image will go in the moveSpace or something
          currentPlayer: this.props.currentPlayer
        }
        this.playMove = this.playMove.bind(this); //bind playMove so it knows what 'this' is when the function is called.  
        this.sendMovetoTTTServer = this.sendMovetoTTTServer.bind(this);
    }
  
    //apparently, this function is deprecated for complicated technical reasons.
    //https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops
    UNSAFE_componentWillReceiveProps(newProps){
      console.log("The new props are: " + newProps);
      this.setState({currentPlayer: newProps.currentPlayer});
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
            .then(json => console.log(json))
            .catch(error => console.error("Problem with sending the move request.")); 
    }

    //In a single player game -- still need to communicate with server to check if a move is valid or not etc.
    playMove(event){
        
        console.log("An event occured and called this function. The event is: " + event); //check the type of event
        if (this.state.currentPlayer !== undefined){//if undefined then a new game has not been started
          this.sendMovetoTTTServer();
          console.log("Both current player and the space it will use to display the current player are not null: " 
                      + this.state.moveSpace); 
          this.setState({moveSpace: this.state.currentPlayer});
        }
    }


    /* A quick note here: Tried to use .innerHTML (which seems like a huge no-no, and a nasty blend
    of vanilla JS paradigms with React), so why do that when can just supply the HTML 
    myself in this render method, or use JSX to embed some JS varaibles into the
    markup? */
    render() {
    return (
      <div onClick={this.playMove} className="Tile">
        {this.state.moveSpace}
      </div>
    );
  }
}

export default Tile;