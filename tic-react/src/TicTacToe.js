import React, { Component } from 'react'; //don't quite understand the {} syntax of this import statement 
import Tile from './Tile';
import './TicTacToe.css';

/*
  This Component/Class is will be the parent component
  for a Tile, and it will represent the TicTacToe game board

*/
class TicTacToe extends Component {

  //What's being rendered, the board, is just a 3x3 table of Tiles
  render() {
    return (
      <div className="TicTacToe">
        <table>
            <tr>
                <td><Tile>Tile Placeholder</Tile></td>
                <td><Tile>Tile Placeholder</Tile></td>
                <td><Tile>Tile Placeholder</Tile></td>
            </tr>
            <tr>
                <td><Tile>Tile Placeholder</Tile></td>
                <td><Tile>Tile Placeholder</Tile></td>
                <td><Tile>Tile Placeholder</Tile></td>
            </tr>
            <tr>
                <td><Tile>Tile Placeholder</Tile></td>
                <td><Tile>Tile Placeholder</Tile></td>
                <td><Tile>Tile Placeholder</Tile></td>
            </tr>
                
        </table>
      </div>
    );
  }
}

export default TicTacToe;
