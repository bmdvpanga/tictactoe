import React, { Component } from 'react'; //don't quite understand the {} syntax of this import statement 
import Tile from './Tile';
import '../css/TicTacToe.css';

/*
  This Component/Class is will be the parent component
  for a Tile and GameMode (which is the parent of Create Game) and it will represent the TicTacToe game board

*/
class TicTacToe extends Component {

  constructor(props){
    super();
    this.state = {
      1: "Empty Tile",
      2: "Empty Tile",
      3: "Empty Tile",
      4: "Empty Tile",
      5: "Empty Tile",
      6: "Empty Tile",
      7: "Empty Tile",
      8: "Empty Tile",
      9: "Empty Tile"
    }
  }

  //What's being rendered, the board, is just a 3x3 table of Tiles
  render() {
    return (
      <div className="TicTacToe">
        <table>
            <tr>
                <td><Tile/></td>
                <td><Tile/></td>
                <td><Tile/></td>
            </tr>
            <tr>
                <td><Tile/></td>
                <td><Tile/></td>
                <td><Tile/></td>
            </tr>
            <tr>
                <td><Tile/></td>
                <td><Tile/></td>
                <td><Tile/></td>
            </tr>  
        </table>
        <div id="gameOutput">Game Output Here</div>
      </div>
    );
  }
}

export default TicTacToe;
