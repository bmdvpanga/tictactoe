import json

'''flask web server and controller'''
from flask import Flask
app = Flask(__name__)
print("can send message to console")

#testing flask
@app.route('/')
def hello_world():
    message = 'Hello, World!'
    #try to see if we can print a message to the console when the endpoint is hit
    print(message)
    json_message = json.dumps(['foo', {'bar': ('baz', None, 1.0, 2)}])
    print(json_message)
    return json_message

