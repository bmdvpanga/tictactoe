'''Modular code which is useful for all game types. 
All of these methods/functions take a board as a parameter, so these functions don't
necessarily need to be tied to a specific board instance.
'''

#check if valid move. move is an integer value.
def isValidMove(board, move):
    if (move not in board.values()):
        return False
    else:
        return True

#helper function for checking if the row of a board results in a win
def checkRowWin(board):
    if ( (board.get("1") == board.get("2") == board.get("3")) or
         (board.get("4") == board.get("5") == board.get("6")) or
         (board.get("7") == board.get("8") == board.get("9"))):
         return True
    return False

#helper function for checking if the collumn of a board results in a win
def checkCollumnWin(board):
    if ((board.get("1") == board.get("4") == board.get("7")) or
    (board.get("2") == board.get("5") == board.get("8")) or
    (board.get("3") == board.get("6") == board.get("9"))):
        return True
    return False

#helper function for checking if the diagonal of a board results in a win
def checkDiagonalWin(board):
    if ((board.get("1") == board.get("5") == board.get("9")) or
    (board.get("3") == board.get("5") == board.get("7"))):
        return True
    return False

'''check if winning condition is met, return boolean value
current implementation requires two checks, one for each player...'''
def checkWin(board):
    #win condition -- need to make more efficient...
    if (checkRowWin(board) is True or
    checkCollumnWin(board) is True or
    checkDiagonalWin(board) is True):
         return True
    return False


'''End Modular Code'''