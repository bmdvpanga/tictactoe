INVALID = 0
VALID = 1
board = {'1': '1', '2': '2', '3': '3',
         '4': '4', '5': '5', '6': '6',
         '7': '7', '8': '8', '9': '9'}
# board = {'1': 'X', '2': 'O', '3': 'X',
#          '4': 'X', '5': 'O', '6': 'X',
#          '7': 'O', '8': 'X', '9': 'O'}
playerX = 1
playerO = 2
win = False;
curPlayer = playerX;
draw = False;

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
#check if winning condition is met
def checkWin(board,curPlayer):
    ##win condition -- need to make more efficient..
    if ( (board.get("1") == board.get("2") == board.get("3")) or
         (board.get("4") == board.get("5") == board.get("6")) or
         (board.get("7") == board.get("8") == board.get("9")) or
         (board.get("1") == board.get("4") == board.get("7")) or
         (board.get("2") == board.get("5") == board.get("8")) or
         (board.get("3") == board.get("6") == board.get("9")) or
         (board.get("1") == board.get("5") == board.get("9")) or
         (board.get("3") == board.get("5") == board.get("7"))):
         print("\n\nPlayer" + str(curPlayer) + " wins!")
         return True
    return False

def checkDraw(board):
    for i in range(1,10):
        if(board.get(str(i)).isdigit()):
            return False
    print("Draw")
    return True

printBoard(board)

while (win is False and draw is False):
    makeMove(board, curPlayer)
    printBoard(board)
    win = checkWin(board,curPlayer)
    if(win):
        break
    draw = checkDraw(board)
    curPlayer = playerSwitch(curPlayer)
