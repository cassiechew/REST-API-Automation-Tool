#!flask/bin/python
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def get_*():
    