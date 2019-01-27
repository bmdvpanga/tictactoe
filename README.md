# Py-Tic-Tac-Toe #
Tic-Tac-Toe with a Python/Flask server back-end for controlling the program logic and processing Ajax requests, and an HTML/CSS/Javascript/React front-end for the game's UI. Amatuer programmers/contributers are welcome create or resolve [issues/features](https://github.com/bmdvpanga/tictactoe/issues)!

## To play the game please visit [here](https://www.cool-free-games.com/tic-tac-toe)! ##

### Initial instillation steps for contributer's use: ###
1) Ensure python is installed on the user's local machine
2) Fork/clone this repo

### Installation instructions for running the front-end for testing/debugging: ###

1) Install NodeJS via different operating system instructions
2) Install React 
3) In the repository folder named ```tic-react``` run the command ```npm install```
4) Run the front-end server with the command ```npm start``` in the folder named ```tic-react```

### Installation instructions for running the back-end of the program for testing/debugging (Flask web server): ###

1) Install Flask via different operating system instructions
2) In the top level of this repository: Windows alias your command for running the Flask web server with the command ```set FLASK_APP=hello.py``` on Linux-based OS use the command ```$ export FLASK_APP=hello.py```
3) Run the command ```flask run``` in top level of this repository.
4) Instructions for testing endpoints with Postman/Swagger will go here...

Running the back-end end of the program for use in console mode:

* Run the command ```python tictactoe.py``` in the repository's central folder.

### Instructions for playing the game in console mode: ###
1) Player X selects a square 1-9 on the keyboard
2) Player O selects a square 1-9 on the keyboard
3) Repeat until all 9 squares have been selected
