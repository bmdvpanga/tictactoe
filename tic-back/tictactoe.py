

'''
    In current implementation two players make a move at the same computer.
'''

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



#switches from one player to the other
def playerSwitch(curPlayer):
    if(curPlayer == PLAYER_X):
        curPlayer =  PLAYER_O
    else:
        curPlayer = PLAYER_X
    return curPlayer


#driver function, a local game will still send information to the server to check 
#whether a move is valid, check for a win, etc. 
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
