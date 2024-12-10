from flask import Flask, jsonify
from flask_cors import CORS

import datetime

app = Flask(__name__)
CORS(app)


@app.route('/data')
def get_time():
    data = {
        'name': 'Zakaria',
        'email': 'zakaria14@msn.com',
        'title': 'Software Engineer',
        'date': datetime.datetime.now(),
        'test': 'succeeded',
    }
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
