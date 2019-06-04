'''Flask web server and controller. Stateless as possible.'''

#Flask also has JSON support, but this seems to be classical way to do JSON in Python.
import json 
from flask import Flask
from flask import abort
from flask import request #request has a different context within each method
from flask_cors import CORS, cross_origin

#Import Game class from the Game file.
from game import Game

app = Flask(__name__)
#CORS broswer prevention issue, start the Flask appplication.
CORS(app) 

#Store all of the game references in a dictionary. TODO: Determine whether or not this is too much state and if the dictionary should be stored in a seperate file/class.
games = {} #Indices start at 1.

#Testing flask sever is up
@app.route('/')
def test_server():
    #Try to see if we can print a test json object message to the console when the endpoint is hit from the front-end
    json_message = json.dumps(['foo', {'bar': ('baz', None, 1.0, 2)}])
    return json_message
   
'''This is a POST endpoint, which should create a new game and stores it in a Game object.
Get is an endpoint which retrieves the status of the current game?'''
@app.route('/games/', methods=['POST', 'GET'])
def createNewGame():
    #If the method is GET, then return the entire games dictionary.
    if(request.method == "GET"):
        json_message = json.dumps(games, default=lambda o: o.__dict__)

    #If the method is POST, then only return the game that was just created as json
    elif(request.method == "POST"):
        games[Game.gameCount] = Game(request.args.get('gameMode','')) #add check for correct game mode
        json_message = json.dumps(games[Game.gameCount], default=lambda o: o.__dict__)
    
    return json_message              

    '''TODO: 
        1. research the endpoint for PUT so that it operates on the same hash
        2. flask via internet for remote testing'''

#records the move that is made by the user through PUT request. unfinished for 'best practice' leave verbs out of the url
#https://blog.mwaysolutions.com/2014/06/05/10-best-practices-for-better-restful-api/
@app.route('/games/<int:game_id>', methods=['PUT', 'GET'])
def makeMove(game_id):
    #if game is not in games dictionary
    if(game_id not in games.keys()):
        abort(404)

    if (request.method == "PUT"): 
        #Look for the gameObject associated with the game_id.
            
        boardKey = request.get_json().get("boardKey")
        '''stores status if move made is valid or not need to update this so that this is done on Game class
        current implementation makes controller too stateful'''
        moveStatus = games[game_id].validateMove(boardKey)

        if(moveStatus):
            games[game_id].board[boardKey] = games[game_id].currentPlayer
            games[game_id].currentPlayer = "X" if games[game_id].currentPlayer == "O" else "O"
            
            
    #regardless of put or get, return the updated game specified by game_id
    json_message = json.dumps(games[game_id], default=lambda o: o.__dict__)
    return json_message          