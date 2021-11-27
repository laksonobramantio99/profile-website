from flask import Flask, render_template

app = Flask(__name__)
visit_count = 0

@app.route("/")
def home():
    global visit_count
    visit_count += 1
    return render_template('home.html')

@app.route("/visit")
def visit():
    return "visit count: " + str(visit_count)

# Comment before deploy
# if __name__ == "__main__":
#     app.run(host='0.0.0.0', debug=True)
