'''Flask web server and controller. Stateless as possible. Best practice is to leave verbs out of the URL.
TODO: 
    1. flask via internet for remote testing
'''

import json 

from flask import request, abort, Blueprint

from game import Game
from games_helper import games, make_move

game_bp = Blueprint('', __name__)
 
# Testing flask sever is up
@game_bp.route('/')
def test_server():
    # Try to see if we can print a test json object message to the console when the endpoint is hit from the front-end.
    json_message = json.dumps(['foo', {'bar': ('baz', None, 1.0, 2)}])
    return json_message
   

@game_bp.route('/games/', methods=['POST', 'GET'])
def create_new_game():
    '''
        Create a new game and stores it in a Game object.
        Get is an endpoint which retrieves the JSON string representation of the current game.
    '''

    #If the method is GET, then return the entire games dictionary.
    if(request.method == "GET"):
        json_message = json.dumps(games, default=lambda o: o.__dict__)
    elif(request.method == "POST"): #If the method is POST, then only return the game that was just created as JSON.
        # Currently there is an inconsistancy between the current game on the front-end, and the game_count. 
        # TODO: Verify if this is still true.
        games[Game.game_count] = Game(request.args.get('gameMode','')) 
        json_message = json.dumps(games[Game.game_count], default=lambda o: o.__dict__) 
        
    # This gnarly bit of code is so that we can also see the game_count in the JSON message. 
    # Only replaces the first bracket. TODO: Have this get done wherever a board is returned.   
    json_message = json_message.replace("{", "{\"game_count\": " + str(Game.game_count) + ", ", 1) 
    return json_message              

@game_bp.route('/games/<int:game_id>', methods=['GET','PUT'])
def get_game(game_id):
    '''
        Returns a board from the games dictionary. If it is a GET request just do the return, if it is a PUT,
        then make the move as specified by the boardKey.

        Args:
            game_id: an integer specifying which game to return from the games hash
    '''

    # If game is not in games dictionary
    if(game_id not in games.keys()):
        abort(404)

    if (request.method == "PUT"):
        # Get the board key from the body    
        position = request.get_json().get("boardKey") 
        make_move(game_id, position)
            
    #regardless of put or get, return the updated game specified by game_id
    json_message = json.dumps(games[game_id], default=lambda o: o.__dict__)
    return json_message    


