# Py-Tic-Tac-Toe #
Tic-Tac-Toe with a Python/Flask server back-end for controlling the program logic and processing requests, and an HTML/CSS/Javascript/React front-end for the game's UI. Amatuer programmers/contributers are welcome to create or resolve [issues/features](https://github.com/bmdvpanga/tictactoe/issues)!

## To play the game please visit [here](https://www.cool-free-games.com/tic-tac-toe)! ##

### Initial installation steps for contributer's use: ###

1) Ensure `python3` and `pip3` module installer is installed on the user's local machine
2) Fork/clone this repo

### Installation instructions for running the "front-end" for testing/debugging: ###

1) Install NodeJS (stable release) via different operating system instructions
2) In the repository folder named `tic-react` run the command `npm install.` to install dependencies
3) Ensure you are using the most recent version of NodeJS with the command `npm update` in the folder named `tic-react.`
4) Run the "front-end" server with the command `npm start` in the folder named `tic-react`

### Installation instructions for running the back-end of the program for testing/debugging (Flask web server): ###

1) In the root reposity, `tictactoe`, install Flask and Flask CORS and py-TTT with `pip install tic-back`
2) Run the back-end with `python -m tic_back`
3) (Optional) Alias with `set FLASK_ENV=development` (Windows) to avoid rerunning `python -m tic_back` on modified changes. (React will automatically recompile on changes.)
4) Run the back-end server with the command `flask run` in the folder `server_and_game_logic`. 

### A Note on CORS
Certain browsers will not allow certain communication between the React app and Flask server if they are on different ports of the same localmachine (`localhost`). It is considered suspicious activity by the browser. (The Flask server is supposed to workaround this with step 3, but there is a [problem](https://github.com/bmdvpanga/tictactoe/issues/19).) As a hotfix, you can run Chrome (the reccomended browser for testing this application) with CORS features disabled. To run Chrome with command line arguments you can simply add `chrome.exe` to your environment variables/PATH, and in the terminal enter the command `chrome --disable-web-security`.

### Testing


### Documentation

For further developer documentation, please consult the `tictactoe\docs` folder.