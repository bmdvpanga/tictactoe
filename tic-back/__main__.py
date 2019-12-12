from flask import Flask
from flask_cors import CORS
import controller 

def main():
    print ("hello, main.")
    app = Flask(__name__)
    # This should only be a problem when testing because trying to send requests between two different ports on localhost.
    CORS(app) 
    app.run(debug=True) # Starts the flask server.

if __name__ == "__main__":
    # execute only if run as a script
    main()