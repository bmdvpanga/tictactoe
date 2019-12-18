REM Go into the back end folder.
cd ..
cd server_and_game_logic

REM Flask aliasing.
set FLASK_APP=controller.py
set FLASK_ENV=development

REM Run the back end.
flask run

