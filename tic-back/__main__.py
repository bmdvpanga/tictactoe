from flask import Flask
from flask_cors import CORS

from game_view import game_bp

def main():
    app = Flask(__name__)
    # This should only be a problem when testing because trying to send requests between two different ports on localhost.
    CORS(app) 
    app.register_blueprint(game_bp)
    app.run(debug=True) # Starts the flask server in debug mode.
   
if __name__ == "__main__":
    # execute only if run as a script
    main()