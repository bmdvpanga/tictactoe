'''
    In current implementation two players make a move at the same computer.
'''

#player constants
PLAYER_X = "X"
PLAYER_O = "O"

#prints each row of the board to standard out
def printBoard(board):
    #board is the dictionary
    print('|' + board['1'] + '|' + board['2'] + '|' + board['3'] + '|')
    print('-------')
    print('|' + board['4'] + '|' + board['5'] + '|' + board['6'] + '|')
    print('-------')
    print('|' + board['7'] + '|' + board['8'] + '|' + board['9'] + '|')

#returns new player if successful
def makeMove(board, curPlayer):
    move = str(input("What is your move player " + str(curPlayer) +"?  "))
    if(isValidMove(board, move)):
        #check curPlayer points to the same string (doesn't compare memory)
        if(curPlayer == PLAYER_X):
            board[move] = "X"
        else:
            board[move] = "O"
    else:
        print("Not valid move, try again")

#check if valid move
def isValidMove(board, move):
    if (move not in board.values()):
        return False
    else:
        return True

#switches from one player to the other
def playerSwitch(curPlayer):
    if(curPlayer == PLAYER_X):
        curPlayer =  PLAYER_O
    else:
        curPlayer = PLAYER_X
    return curPlayer











'''Modular code which is useful outside of a local two player game'''


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




'''End Mondular Code'''











#driver function
def main():
    #dictionary
    board = {'1': '1', '2': '2', '3': '3',
             '4': '4', '5': '5', '6': '6',
             '7': '7', '8': '8', '9': '9'}
    #the current player will be x, first
    moves = 0
    curPlayer = PLAYER_X
    win = False
    #main game loop, player should only get 9 turns
    while (moves < 9):
        printBoard(board)
        makeMove(board, curPlayer)
        if (checkWin(board)):
            win = True
            print("Game over! Player " + str(curPlayer) + " wins!")
            break
        curPlayer = playerSwitch(curPlayer)
        moves += 1
    printBoard(board)
    if (win is False):
        print("Game over! Draw!")
main()
