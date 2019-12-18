'''
    This is designed to be the only class which updates the state of a given
    instance of Game or its board.
'''

from win_logic import is_win
from computer_logic import get_computer_move

#constants
PLAYER_X = "X"
PLAYER_O = "O"

GAME_MODES = ["local", "computer", "online"]

class Game:
    game_count = 0 # A python 'static variable' not tied to a particular instance.

    def __init__(self, game_mode, board = None, current_player = PLAYER_X):
        '''
            Assigning board to empty tile values. This is assuming that game will ALWAYS start with empty tiles. 
            Also assumes that we want a TTT board of 3x3, and that is what is on the 'front-end.'
        '''
        self.board = {1: ' ', 2: ' ', 3 : ' ',
        4: ' ', 5: ' ', 6: ' ',
        7: ' ', 8: ' ', 9: ' '}
        self.current_player = current_player
        self.game_mode = game_mode
        self.game_over = False
        self.move_number = 0
        if game_mode != GAME_MODES[0] and game_mode != GAME_MODES[1] and game_mode != GAME_MODES[2]:
            self.game_mode = GAME_MODES[0]
        self.game_message = "A new " + self.game_mode + " game was created!"
        Game.game_count +=1
    
    def is_valid_move(self, position):
        '''
            Checks current instance of Game if the current move that is made is valid or not.
            Also sets the current instance of Game's message to be an invalid or valid message.
        ''' 
        if self.game_over:
            return False
        elif position not in self.board.keys() or not self.board[position] == ' ':
            self.game_message = "Playing " + self.current_player + " at position " + str(position) + " was an invalid move!"
            return False
        else:
            self.game_message = "Playing " + self.current_player + " at position " + str(position) + " was a valid move!"
            return True
        
    def make_moves(self, position):
        '''
            Places the current player or computer (if enabled), at a specific position.
        '''
        self.play_move(position)
        if self.game_mode == GAME_MODES[1]:
            self.play_move(get_computer_move(self.board))

    def play_move(self, position):
        '''
            Helper for playing a move in a specified position. Also increases the move_number and swaps the player.
        '''
        if self.is_valid_move(position):
            self.board[position] = self.current_player
            self.print_board()
            if is_win(self.board):
                self.game_over = True
                self.game_message = "Game Over! Player " + self.current_player + " won!"
            self.move_number+=1
            self.swap_player()

    def swap_player(self):
        '''
            Swaps the current player depending on who the current player is.
        '''
        self.current_player = PLAYER_X if self.current_player == PLAYER_O else PLAYER_O    
    
    def print_board(self):
        '''
            Prints the current instance's board.
        '''
        print('|' + self.board[1] + '|' + self.board[2] + '|' + self.board[3] + '|')
        print('-------')
        print('|' + self.board[4] + '|' + self.board[5] + '|' + self.board[6] + '|')
        print('-------')
        print('|' + self.board[7] + '|' + self.board[8] + '|' + self.board[9] + '|')

    #TODO: Update with all 'instance vars.'
    def __str__(self):
        return "{game_mode: " + self.game_mode + ", board: " + str(self.board) + ", current_player: " + self.current_player + "}"
