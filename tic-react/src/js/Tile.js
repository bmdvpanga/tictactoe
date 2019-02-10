import React, { Component } from 'react';
import '../css/TicTacToe.css';

/*ES6 JavaScript class syntax. Tile is a child component of TicTacToe*/
class Tile extends Component {
    
    //Apparently this is a useless constructor so far
    constructor(props){
        super(props);
        this._tileDiv = undefined;
        //bind playMove so it knows what 'this' is when the 
        //function is called. Can also think of it as binding
        //an event listener to a component
        this.playMove = this.playMove.bind(this);
    }

    //In a single player game still need to communicate with server to check if a move is valid or not etc
    playMove(event){
        console.log(event); //check the type of event
        console.log(this._tileDiv); //check the value of tileDiv here
        this._tileDiv.innerHTML = "X"; //could not set the innerHTML here, said the item was undefined.
    }

    render() {
    
    //ref returns a JavaScript reference to the tag calling the method
    return (
      <div ref={(a)=>this._tileDiv = a} onClick={this.playMove} className="Tile">
        Empty Tile
      </div>
    );
  }
}

export default Tile;
