# constants
PLAYER_X = 'X'
PLAYER_O = 'O'
EMPTY_TILE = 'Empty'
GAME_MODES = ["local", "computer", "online"]

# Store all of the game references in a dict, Outer keys start at 1.
games = {} 

def make_move(game_id, position):
    '''
        Make a move on the game board from the games hash.
        
        Args:
            game_id: integer representing which game in the games dict
                     to make a move on
            position: the position on the board to make the move on

    ''' 
    if(games[game_id].is_valid_move(position)):
        games[game_id].make_moves(position)