'''Flask web server and controller. Stateless as possible.'''

#flask also has JSON support, but this seems to be classical way to do JSON in Python
import json 
from flask import Flask
from flask import abort
from flask import request #request has a different context within each method
from flask_cors import CORS, cross_origin

#import Game class from the Game file
from game import Game

app = Flask(__name__)
#CORS broswer prevention issue, start the Flask appplication.
CORS(app) 

#Store all of the games in a dictionary. Too much state, should be stored in a seperate file/class.
games = {}

#testing flask sever is up
@app.route('/')
def hello_world():
    #try to see if we can print a test json object message to the console when the endpoint is hit from the front-end
    json_message = json.dumps(['foo', {'bar': ('baz', None, 1.0, 2)}])
    print(json_message)
    return json_message

'''This is a POST endpoint, which should create a new game
and store it in a Games object which contains a list of
games. I want to create a game with one of three game types already selected. Not sure what the default practice 
is for sending requests whether it should be stored in the header or as params. Not a formal API so maybe doesn't matter
so much.'''
@app.route('/games/', methods=['POST', 'GET'])
def createNewGame():
    print(request.method) 
    print (request.args.get('gameMode',''))
    message = "Created a new Game and stored it in a dictionary."
    print(message)

    #if method is GET, then print the entire games dictionary
    if(request.method == "GET"):
        json_message = json.dumps(games, default=lambda o: o.__dict__)

    #if method is POST, then only print the status of the new game.
    #should there be a method not allowed for other requests?
    elif(request.method == "POST"):
        games[Game.gameCount] = Game(request.args.get('gameMode','')) #add check for correct game mode
                                                                      #handle other game modes somehow gracefully
        json_message = json.dumps(games[Game.gameCount], default=lambda o: o.__dict__)
    return json_message

'''TODO: 
    1. research the endpoint for PUT so that it operates on the same hash
    2. flask via internet for remote testing'''

#records the move that is made by the user through PUT request.
#unfinished
#for 'best practice' leave verbs out of the url
#https://blog.mwaysolutions.com/2014/06/05/10-best-practices-for-better-restful-api/
@app.route('/games/<int:game_id>', methods=['PUT', 'GET'])
def makeMove(game_id):
    print("request method is: ")
    print(request.method) 
    print("game_id is: ")
    print (game_id)
    message = "updating game " + str(game_id)

    #if game is not in games dictionary
    if(game_id not in games.keys()):
        abort(404)

    if (request.method == "PUT"): #otherwise this endpoint should only be hit with a GET
        #look for the gameObject associated with the game_id
        
        boardKey = request.form.get("boardKey")#this is assuming boardKey is provided in the request body
        print("tile key = ", boardKey)

        #stores status if move made is valid or not
        #need to update this so that this is done on Game class
        #current implementation makes controller too stateful
        moveStatus = games[game_id].validateMove(int(boardKey))
        if(moveStatus):
            games[game_id].board[boardKey] = games[game_id].currentPlayer
            games[game_id].currentPlayer = "X" if games[game_id].currentPlayer == "O" else "O"
        
        
    #regardless of put or get, return the game specified by game_id
    json_message = json.dumps(games[game_id], default=lambda o: o.__dict__)
    return json_message