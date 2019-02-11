import React, { Component } from 'react'; //don't quite understand the {} syntax of this import statement 
import Tile from './Tile';
import '../css/TicTacToe.css';
import SoundCheckbox from './SoundCheckbox';
import TileMenu from './TileMenu';
import GameModeMenu from './GameModeMenu';

/*
  This Component/Class is the parent component
  for all other TicTicToe related components, so they can all
  easily pass data to eachother.
*/
class TicTacToe extends Component {

  //the only state a TicTacToe component has
  //is the game object recieved from the TTT python server
  constructor(props){
    super();
    this.getGame = this.getGame.bind(this);
    this.testState = this.testState.bind(this);//for debugging
    this.state = { //could probably just init the currentGame to undefined here, but this shows exactly what should be in the TTT object
      currentGame:  {
        board: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
          6: "",
          7: "",
          8: "",
          9: "",
        },//end the board
        currentPlayer: "",
        gameType: "",
        gameMessage: "Game Output Here"  
      }//end current Game
    }///end state
  }//end function
  
  getGame(game){
    console.log("The TTT parent component recieved the game object: " + JSON.stringify(game));
    console.log("The current player of the game is: " + game.currentPlayer);
    this.setState({currentGame: game}); 
    this.testState()//for debugging
  }

  testState(){
    console.log("Test state function executed and the value of this.state.currentGame.currentPlayer is: " + this.state.currentGame.currentPlayer);
  }

  //The "board", is just a 3x3 table of Tiles
  //Passes the current player to each tile, so they know what symbol to mark the tile with
  render() {
    return (
      <div id ="TicTacToe">
        <table>
            <tr>
                <td><Tile currentPlayer={this.state.currentGame.currentPlayer}/></td>
                <td><Tile currentPlayer={this.state.currentGame.currentPlayer}/></td>
                <td><Tile currentPlayer={this.state.currentGame.currentPlayer}/></td>
            </tr>
            <tr>
                <td><Tile currentPlayer={this.state.currentGame.currentPlayer}/></td>
                <td><Tile currentPlayer={this.state.currentGame.currentPlayer}/></td>
                <td><Tile currentPlayer={this.state.currentGame.currentPlayer}/></td>
            </tr>
            <tr>
                <td><Tile currentPlayer={this.state.currentGame.currentPlayer}/></td>
                <td><Tile currentPlayer={this.state.currentGame.currentPlayer}/></td>
                <td><Tile currentPlayer={this.state.currentGame.currentPlayer}/></td>
            </tr>  
        </table>
        <div id="gameOutput">{this.state.currentGame.gameMessage}</div>
        <br></br>
        <SoundCheckbox></SoundCheckbox>
        <br></br>
        <TileMenu></TileMenu>
        <br></br>
        <GameModeMenu callback={this.getGame}></GameModeMenu>
      </div>
    );
  }
}

export default TicTacToe;
