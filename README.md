# Py-Tic-Tac-Toe #
Tic-Tac-Toe with a Python/Flask server back-end for controlling the program logic and processing Ajax requests, and an HTML/CSS/Javascript/React front-end for the game's UI. Amatuer programmers/contributers are welcome to create or resolve [issues/features](https://github.com/bmdvpanga/tictactoe/issues)!

## To play the game please visit [here](https://www.cool-free-games.com/tic-tac-toe)! ##

### Initial installation steps for contributer's use: ###

1) Ensure `python3` and `pip3` module installer is installed on the user's local machine
2) Fork/clone this repo

### Installation instructions for running the front-end for testing/debugging: ###

1) Install NodeJS (stable release) via different operating system instructions
2) In the repository folder named `tic-react` run the command `npm install.` This will install the React modules and other Node.js dependencies
3) Run the front-end server with the command `npm start` in the folder named `tic-react`


### Installation instructions for running the back-end of the program for testing/debugging (Flask web server): ###

1) Install Flask (regardless of OS) with the command `pip3 install flask`
2) In the top level of this repository: Windows Command Prompt alias your command for running the Flask web server with the command `set FLASK_APP=controller.py`. On Linux-based OS terminals use the command `export FLASK_APP=controller.py`
If using Powershell on windows, use the command `$env:FLASK_APP="controller.py"`. 
3) Install Flask CORS (for preventing the browser from stopping Ajax requests) with `pip install -U flask-cors`

### A Note on CORS
Certain browsers will not allow certain communication between the React app and Flask server if they are on different ports of the same localmachine (`localhost`). It is considered suspicious activity by the browser. (The Flask server is supposed to workaround this with step 3, but there is a [problem](https://github.com/bmdvpanga/tictactoe/issues/19).) As a hotfix, you can run Google (the reccomended browser for testing this application) with CORS features disabled. To run chrome with command line arguments you can simply add `chrome.exe` to your environment variables/PATH, and in the terminal enter the command `chrome --disable-web-security`.

4) (Optional) Alias with `set FLASK_ENV=development` (Windows) to avoid rerunning `flask run` on modified changes. (React will automatically recompile on changes.)
5) Run the command `flask run` in the folder `server_and_game_logic`. 
6) Instructions for testing endpoints with Postman/Swagger will go here...


