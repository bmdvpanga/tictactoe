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

  //The only state a TicTacToe component has
  //is the game object recieved from the TTT python server
  constructor(props){
    super();
    this.getGame = this.getGame.bind(this);
    this.createBoard = this.createBoard.bind(this);
    this.state = { 
      currentGame: {
        gameMessage: "Game Output Here",  
      }//end current Game
    }///end state
  }//end function
  
  getGame(game){
    console.log("TTT class received the " + JSON.stringify(game))
    this.setState({currentGame: game}); 
  }

  //snagged and modified from: https://blog.cloudboost.io/for-loops-in-react-render-no-you-didnt-6c9f4aa73778
  //This funciton is called when the TTT board is rendered, but there is no content inside, yet
  createBoard(){
      let board = []
      // Outer loop to create parent
      for (let i = 0; i <= 6; i+=3) {
        let children = []
        //Inner loop to create children
        for (let j = 1; j <= 3; j++) {
          //will create keys 1 - 9
          //TODO: Find a way to make the game board match the state of whatever game object is passed back on create game, or make the behavior of create game, just that, only getting blank empty games.
          //The boardKey prop is used in the Tile fetch request.
          children.push(<td key={i+j}><Tile gameMessage = {this.state.currentGame.gameMessage} boardKey = {i+j} currentPlayer={this.state.currentGame.currentPlayer} callback = {this.getGame}/></td>);
        }
        //Create the parent and add the children
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