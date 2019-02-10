
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
gameList = []
'''games = {
   0: {
    board: {}
    currentPlayer:
    gameType:
    gameCount:

   },



}
'''

#testing flask
@app.route('/')
def hello_world():
    message = 'Server is up and running!'
    #try to see if we can print a message to the console when the endpoint is hit
    print(message)
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
        games[Game.gameCount] = Game(request.args.get('gameMode',''))
        json_message = json.dumps(games[Game.gameCount], default=lambda o: o.__dict__)
    return json_message

'''TODO: 
    1. research the endpoint for PUT so that it operates on the same hash
    2. flask via internet for remote testing'''

#records the move that is made by the user through PUT request.
#unfinished
@app.route('/games/move/<game_id>', methods=['PUT', 'GET'])
def makeMove(game_id):
    print(request.method) 
    print (game_id)
    message = "updating the game " + game_id

    #look for the gameObject associated with the game Id
    curGame = game[game_id]
    



    print(message)
    games[Game.gameCount] = Game(request.args.get('gameMode',''))
    json_message = json.dumps(str(games))
    return json_message
