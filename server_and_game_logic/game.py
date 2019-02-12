'''Will contains the all of the state for the back-end of the application -- and any
state needed for representing a tic-tac-toe game'''

#player constants
PLAYER_X = "X"
PLAYER_O = "O"

class Game:
    gameCount = 0 #a python 'static variable' is not tied to an instance

    #a game should always have a type by default
    def __init__(self, gameType, board = {1: '', 2: '', 3 : '',
        4: '', 5: '', 6: '',
        7: '', 8: '', 9: ''}, currentPlayer = PLAYER_X, gameMessage = "A new game was created!"):
        self.board = board
        self.currentPlayer = currentPlayer
        self.gameType = gameType
        self.gameMessage = gameMessage
        if (gameType != "local" or gameType != "computer" gameType != "online"):
            self.gameType = "local"
        Game.gameCount +=1

    def __str__(self):
        return "{" + "gameType: " + self.gameType + ", board: " + str(self.board) + ", currentPlayer: " + self.currentPlayer + "}"

    #checks instance of Game if the current move that is made is good 
    # def makeMove(self):
    def validateMove(self, boardIndex):
        print("the player for the current board is: ", self.currentPlayer) #debug
        if(self.board[boardIndex] == ''):
            self.gameMessage = "Valid Move!"
            return True
        else:
            self.gameMessage = "Invalid Move!"
return False