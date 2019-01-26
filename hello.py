
'''flask web server and controller'''

import json #flask also has JSON support, but this seems to be classical way to do JSON in Python
from flask import Flask
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app) #CORS broswer prevention issue

print("can send message to console outside of method")

#testing flask
@app.route('/')
def hello_world():
    message = 'Hello, World!'
    #try to see if we can print a message to the console when the endpoint is hit
    print(message)
    json_message = json.dumps(['foo', {'bar': ('baz', None, 1.0, 2)}])
   
    #COMMENTED OUT CODE WHEN TRYING TO FIX THE BROWSER ISSUE    
    #json_message.headers.add('Access-Control-Allow-Origin', '*') 
    #COMMENTED OUT CODE
   
    print(json_message)
    return json_message

