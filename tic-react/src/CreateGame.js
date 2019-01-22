import React from 'react';

class CreateGame extends React.Component{

    constructor(){
        super();
        this.requestNewGameFromTTTServer = this.requestNewGameFromTTTServer.bind(this);
    }

    requestNewGameFromTTTServer(event){
        console.log("requestNewGameFromTTTServer() was called");
    }

    render(){
        return(<button type="button" class="btn btn-success" onClick = {this.requestNewGameFromTTTServer}>Create Game</button>);
    }
}

export default CreateGame;