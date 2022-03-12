from contextlib import redirect_stderr, redirect_stdout
import requests
from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)

CORS(app,resources={r"*":{"origins" : "*"}}, supports_credentials=True)

class MWBRest:

    def __init__(self):
        self.data =None

@app.route('/token', methods=['GET'])
def get_token():
    return jsonify({"token": "test123"})

@app.route('/login', methods=['POST'])
def do_login():
    credential=request.get_json()
    print(credential)
    if credential['username'] == 'kgilfilen' and \
        credential['password'] == 'pwd':
        return jsonify({"token": "test123"})
    else:
        error=jsonify('Login Failed')
        return error, 401

@app.route('/lessons', methods=['GET'])
def get_lesson():
    return jsonify("lesson!!!")

@app.route('/challenge', methods=['GET'])
def get_challenge():
    return jsonify("challenge!!!")

@app.route('/log', methods=['GET', 'POST'])
def get_log():
    return jsonify("log!!!")

@app.route('/introspection', methods=['GET'])
def get_introspection():
    return jsonify("introspection!!!")

if __name__ == '__main__':
    app.run(host='192.168.86.93', port=3005)