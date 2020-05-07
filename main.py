from flask import Flask, request, render_template, jsonify
import utils

app = Flask(__name__)


@app.route('/api/setKeys', methods=['POST'])
def handle():
    data = request.json
    utils.saveConfig(data)
    return jsonify(isError= False,
                    message= "Success",
                    statusCode= 200), 200


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template("index.html")

app.run(debug=True)
