def get_computer_move(board):
    '''
        Currently computer moves to first available position

        Args:
            board: a dict representing the game board
        Returns:
            an integer representing the key location of where the computer has decided to move, or -1
            if there are no available moves
    '''
    for position in board:
        if board[position] == '':
            return position
    return -1