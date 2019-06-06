'''Will contains the all of the state for the back-end of the application -- and any
state needed for representing a tic-tac-toe game'''

#player constants
PLAYER_X = "X"
PLAYER_O = "O"

class Game:
    gameCount = 0 #A python 'static variable' is not tied to an instance

    #a game should always have a type by default
    def __init__(self, gameMode, board = None, currentPlayer = PLAYER_X):
        #Assigning board to empty tile values. This is assuming that game will ALWAYS start with empty tiles. Also assumes that we want a TTT board of 3x3, and that is what is on the 'front-end.'
        self.board = {1: '', 2: '', 3 : '',
        4: '', 5: '', 6: '',
        7: '', 8: '', 9: ''}
        self.currentPlayer = currentPlayer
        self.gameMode = gameMode
        if (gameMode != "local" and gameMode != "computer" and gameMode != "online"):
            self.gameMode = "local"
        self.gameMessage = "A new " + self.gameMode + " game was created!"
        Game.gameCount +=1

    #Defines the string representation of a gameObject. Don't think this is related to the JSON represention of game that is passed around
    def __str__(self):
        return "{gameMode: " + self.gameMode + ", board: " + str(self.board) + ", currentPlayer: " + self.currentPlayer + "}"

    #checks instance of Game if the current move that is made is good 
    def validateMove(self, boardIndex):
        if(self.board[boardIndex] == ''):
            self.gameMessage = "Playing " + self.currentPlayer + " at position " + str(boardIndex) + " was a valid move!"
            return True
        else:
            self.gameMessage = "Playing " + self.currentPlayer + " at position " + str(boardIndex) + " was an invalid move!"
            return False