'''Will contains the all of the state for the back-end of the application -- and any
state needed for representing a tic-tac-toe game'''

#player constants
PLAYER_X = "X"
PLAYER_O = "O"

class Game:
    gameCount = 0 #a python 'static variable' is not tied to an instance 

    def __init__(self, gameType, board = {'1': '1', '2': '2', '3': '3',
        '4': '4', '5': '5', '6': '6',
        '7': '7', '8': '8', '9': '9'}, currentPlayer = PLAYER_X):
        self.board = board
        self.currentPlayer = currentPlayer
        self.gameType = gameType
        Game.gameCount +=1

    def __str__(self):
        return "gameType: " + self.gameType + " board: " + self.board + " currentPlayer: " + self.currentPlayer