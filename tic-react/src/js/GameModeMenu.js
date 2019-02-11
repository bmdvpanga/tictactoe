import React from 'react';
import CreateGame from './CreateGame'


/*
    This is the parent of CreateGame. Bad practice to use Bootstrap in React in this fashion?
*/
class GameModeMenu extends React.Component{

    
    constructor(){
        super();
        //make it a localGame by default. There is no reason for it to be undefined at any point, doesn't benefit the program
        this.state = {
            gameMode: "local"
        }
        this.setGameMode = this.setGameMode.bind(this);
        this.getGame = this.getGame.bind(this);
    }

    //set the gameMode state
    //not that setState does not immediately set the state of a component
    setGameMode(event){
        console.log("The value grabbed from " + event.target+ " is: " + event.target.value);
        this.setState({gameMode: event.target.value}); //set the gameMode inside our component's state, the state isn't set immediately which is fine, setState() requests that the state is set, doesn't call it
        //console.log("The player selected the game mode: " + this.state.gameMode.id + " on the front end");
    }

    //callback function to get the current game from the CreateGame component
    getGame(game){
        //now we pass it right back up to the TicTacToe parent
        //https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17
        console.log("GameModeMenu has the current game: " + game);
        this.props.callback(game);
    }

    /*render function
    ref returns JavaScript object of type. Don't need to specify value.
    https://stackoverflow.com/questions/29108779/how-to-get-selected-value-of-a-dropdown-menu-in-reactjs
    https://getbootstrap.com/docs/4.0/components/forms/
    form-group is a bootstrap class. See link above.
    */
    
    render(){
        return(
            <div>
                <div className="form-group">
                    Game Type:
                    <select className="form-control" value={this.state.gameMode} onChange={this.setGameMode}>
                    <option value ="local">Local Two Player Game</option>
                    <option value ="online">Online Game</option>
                    <option value ="computer">Game vs. Computer</option>
                    </select>
                </div>
                <br></br>
                <CreateGame callback={this.getGame} gameMode={this.state.gameMode}></CreateGame>
            </div>
               
        );
    }
}

export default GameModeMenu;