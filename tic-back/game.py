from board_logic import isWin

#player constants
PLAYER_X = "X"
PLAYER_O = "O"

class Game:
    gameCount = 0 # A python 'static variable' not tied to a particular instance.

    # a game should always have a type by default
    def __init__(self, gameMode, board = None, currentPlayer = PLAYER_X):
        # Assigning board to empty tile values. This is assuming that game will ALWAYS start with empty tiles. 
        # Also assumes that we want a TTT board of 3x3, and that is what is on the 'front-end.'
        self.board = {1: '', 2: '', 3 : '',
        4: '', 5: '', 6: '',
        7: '', 8: '', 9: ''}
        self.currentPlayer = currentPlayer
        self.gameMode = gameMode
        self.moveNumber = 0
        if (gameMode != "local" and gameMode != "computer" and gameMode != "online"):
            self.gameMode = "local"
        self.gameMessage = "A new " + self.gameMode + " game was created!"
        Game.gameCount +=1
    
    def isValidMove(self, boardIndex):
        '''
            Checks current instance of Game if the current move that is made is valid or not.
            Also sets the current instance of Game's message to be an invalid or valid message.
        ''' 
        if (boardIndex not in self.board.keys() or not self.board[boardIndex] == ''):
            self.gameMessage = "Playing " + self.currentPlayer + " at position " + str(boardIndex) + " was an invalid move!"
            return False
        else:
            self.gameMessage = "Playing " + self.currentPlayer + " at position " + str(boardIndex) + " was a valid move!"
            return True
        
    def makeMove(self, boardIndex):
        '''
            Places the current player at the specified boardIndex, increases the moveNumber and then switches
            the currentPlayer.
        '''
        self.board[boardIndex] = self.currentPlayer
        print("Was there a win? " + str(isWin(self.board))) 
        self.moveNumber +=1
        self.currentPlayer = "X" if self.currentPlayer == "O" else "O"
    
    #TODO: Update with all 'instance vars.'
    def __str__(self):
        return "{gameMode: " + self.gameMode + ", board: " + str(self.board) + ", currentPlayer: " + self.currentPlayer + "}"
