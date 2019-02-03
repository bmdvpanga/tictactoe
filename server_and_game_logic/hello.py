
'''Flask web server and controller. Stateless as possible.'''

#flask also has JSON support, but this seems to be classical way to do JSON in Python
import json 
from flask import Flask
from flask_cors import CORS, cross_origin

#import Game class from the Game file
from game import Game

app = Flask(__name__)
#CORS broswer prevention issue, start the Flask appplication.
CORS(app) 

#Store all of the games in a dictionary. Too much state, should be stored in a seperate file/class.
games = {}

#testing flask
@app.route('/')
def hello_world():
    message = 'Server is up and running!'
    #try to see if we can print a message to the console when the endpoint is hit
    print(message)
    json_message = json.dumps(['foo', {'bar': ('baz', None, 1.0, 2)}])
   
    print(json_message)
    return json_message

#This is a POST endpoint, which should create a new game
#and store it in a Games object which contains a list of
#games. I want to create a game with one of three game types already selected
@app.route('/games/', methods=['POST', 'GET'])
def createNewGame():
    message = "Created a new Game and stored it in a dictionary."
    print(message)
    games[Game.gameCount] = Game()
    json_message = json.dumps(str(games))
    return json_message
