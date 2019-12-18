# helper function for checking if the row of a board results in a win
def is_row_win(board):
    if ((board[1] == board[2] == board[3] and not board[1] == '') or
         (board[4] == board[5] == board[6] and not board[4] == '') or
         (board[7] == board[8] == board[9] and not board[7] == '')):
         return True
    return False

# helper function for checking if the collumn of a board results in a win
def is_collumn_win(board):
    if ((board[1] == board[4] == board[7] and not board[1] == '') or
    (board[2] == board[5] == board[8] and not board[2] == '') or
    (board[3] == board[6] == board[9] and not board[3] == '')):
        return True
    return False

# helper function for checking if the diagonal of a board results in a win
def is_diagonal_win(board):
    if ((board[1] == board[5] == board[9] and not board[1] == '') or
    (board[3] == board[5] == board[7] and not board[3] == '')):
        return True
    return False

def is_win(board):
    '''
        Returns:
            True if there is a horizontal, veritcal, or diagonal win. False otherwise.
    '''
    if (is_row_win(board) or is_collumn_win(board) or is_diagonal_win(board)):
        return True
    return False
