from flask import Flask, render_template, request
import requests
import json

app = Flask(__name__)
visit_count = 0
data_log = []

@app.route("/")
def home():
    global visit_count
    visit_count += 1
    return render_template('home.html')

@app.route("/visit")
def visit():
    f = open("data_visitor.txt", "r")
    res = f.read()
    f.close()
    return res

@app.route("/visit/update", methods=["POST"])
def visit_update():
    dataRaw = request.args['dataRaw']
    f = open("data_visitor.txt", "a")
    f.write(dataRaw +'$\n')
    f.close()
    return '{"success":true}'

# Comment before deploy
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001, debug=True)
