from flask import Flask, request, jsonify
import json
import os

app = Flask(__name__)

DATA_DIR = 'data'

@app.route('/api/country/<country_name>', methods=['GET', 'POST'])
def country_data(country_name):
    file_path = os.path.join(DATA_DIR, f"{country_name}.json")
    
    if request.method == 'GET':
        try:
            with open(file_path, 'r') as file:
                data = json.load(file)
            return jsonify(data)
        except FileNotFoundError:
            return jsonify({"error": "Country data not found"}), 404

    elif request.method == 'POST':
        new_data = request.json
        try:
            with open(file_path, 'w') as file:
                json.dump(new_data, file, indent=2)
            return jsonify({"message": "Data updated successfully"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)