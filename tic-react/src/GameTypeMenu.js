import React, { Component } from 'react';

class GameTypeMenu extends React.Component{

    //render function
    render(){
        return(
            <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">GameType
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <li>Local Two Player</li>
                <li class = "disabled">Computer</li>
                <li class = "disabled">Online Game</li>
            </ul>
            </div>
        );
    }
}

export default GameTypeMenu;