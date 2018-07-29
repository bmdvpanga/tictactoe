#constants
INVALID = 0
VALID = 1

## board = {'1': 'X', '2': 'O', '3': 'X',
#          '4': 'X', '5': 'O', '6': 'X',
#          '7': 'O', '8': 'X', '9': 'O'}
board = {'1': '1', '2': '2', '3': '3',
         '4': '4', '5': '5', '6': '6',
         '7': '7', '8': '8', '9': '9'}

playerX = 1
playerO = 2

curPlayer = playerX;

#maybe condense this to gameOver
draw = False;
win = False;

#prints board to standard out
def printBoard(board):
    #board is the dictionary
    print('|' + board['1'] + '|' + board['2'] + '|' + board['3'] + '|')
    print('-------')
    print('|' + board['4'] + '|' + board['5'] + '|' + board['6'] + '|')
    print('-------')
    print('|' + board['7'] + '|' + board['8'] + '|' + board['9'] + '|')

#returns new player if successful
def makeMove(board, curPlayer):
    move = str(input("What is your move player" + str(curPlayer) +"?  "))
    if(checkMove(board,move)):
        if(curPlayer == playerX):
            board[move] = "X"
        else:
            board[move] = "O"

    else:
        print("Not valid move, try again")
        makeMove(board,curPlayer)

#switches from one player to the other
def playerSwitch(curPlayer):
    if(curPlayer == playerX):
        return playerO
    else:
        return playerX

#check if valid move
def checkMove(board,move):
    if (move not in board.values()):
        print('Invalid move: space occupied')
        return INVALID
    else:
        return VALID

#check if winning condition is met, return boolean value
def checkWin(board,curPlayer):
    #win condition -- need to make more efficient..
    if ( (board.get("1") == board.get("2") == board.get("3")) or
         (board.get("4") == board.get("5") == board.get("6")) or
         (board.get("7") == board.get("8") == board.get("9")) or
         (board.get("1") == board.get("4") == board.get("7")) or
         (board.get("2") == board.get("5") == board.get("8")) or
         (board.get("3") == board.get("6") == board.get("9")) or
         (board.get("1") == board.get("5") == board.get("9")) or
         (board.get("3") == board.get("5") == board.get("7"))):
         return True
    return False

#check whether or not the current state of the board is a draw
#but shouldn't a draw just be if all squares are occupied and neither
#player has a win?
def checkDraw(board):
    for i in range(1,10):
        if(board.get(str(i)).isdigit()):
            return False
    print("Draw")
    return True

#driver function
def main():
    printBoard(board)
    #main game loop
    while (win is False and draw is False):
        makeMove(board, curPlayer)
        printBoard(board)
        #Probably don't need a function for win and draw
        win = checkWin(board,curPlayer)
        draw = checkDraw(board)
        curPlayer = playerSwitch(curPlayer)
    print("Game over! " + curPlayer + " wins!")

    main()
