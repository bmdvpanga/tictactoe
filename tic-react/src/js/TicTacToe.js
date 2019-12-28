import React, { Component } from 'react'; 
import Tile from './Tile';
import '../css/TicTacToe.css';
import SoundCheckbox from './SoundCheckbox';
import TileMenu from './TileMenu';
import GameModeMenu from './GameModeMenu';

class TicTacToe extends Component {

  //The only state a TicTacToe component has
  //is the game object recieved from the TTT python server
  constructor(props){
    super();
    this.setTTTGameState = this.setTTTGameState.bind(this);
    this.createBoard = this.createBoard.bind(this);
    this.state = { 
      currentGame: {
        game_message: "Game Output Here",  
        game_over: false,
        board: {
          1:"Empty",
          2:"Empty",
          3:"Empty",
          4:"Empty",
          5:"Empty",
          6:"Empty",
          7:"Empty",
          8:"Empty",
          9:"Empty"
        }
      }//end current Game
    }///end state
  }//end function
  
  //callback function which is given as a prop to the Tile children
  setTTTGameState(game){
    this.setState({currentGame: game}); 
    // The idea is to create a dummy object perform operations on it and then replace the component's state with the updated object
    // for setting the state of the nested board
    let currentGame = this.state.currentGame
    currentGame.board = game.board
    this.setState(currentGame);
  }

  // Returns an HTML table representing a board.
  createBoard(){
      let board = []
      // Outer loop to create parent
      for (let i = 0; i <= 6; i+=3) {
        let children = []
        // Inner loop to create children
        for (let j = 1; j <= 3; j++) {
          // will create keys 1 - 9
          children.push(<td key={i+j}>
          
          <Tile game_over = {this.state.currentGame.game_over} 
            game_message = {this.state.currentGame.game_message} 
            boardKey = {i+j}  callback = {this.setTTTGameState}
            current_move = {this.state.currentGame.board[i + j]}
            />
    
            </td>);
        }
        // Add the children
        board.push(<tr key={i}>{children}</tr>);
      }
      return board
  }

  //The "board", is just a 3x3 table of Tiles
  //Passes the current player to each tile, so they know what symbol to mark the tile with
  render() {
    return (
      <div id ="TicTacToe">
        <table>
          <tbody>
            {this.createBoard()}
          </tbody>   
      </table>
        <div id="gameOutput">{this.state.currentGame.game_message}</div>
        <br></br>
        <SoundCheckbox></SoundCheckbox>
        <br></br>
        <TileMenu></TileMenu>
        <br></br>
        <GameModeMenu callback={this.setTTTGameState}></GameModeMenu>
      </div>
    );
  }
}

export default TicTacToe;