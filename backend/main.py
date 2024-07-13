import firebase_admin
from flask import Flask, request, jsonify
from firebase_admin import credentials, firestore

cred = credentials.Certificate("firebase_sdk_key.json")
firebase_app = firebase_admin.initialize_app(cred)
db = firestore.client()

app = Flask(__name__)

@app.route('/')
def home():
    return 'OK'

@app.route('/api/projects', methods=['GET'])
def get_projects():
    projects_ref = db.collection('projects')
    projects = projects_ref.stream()
    res = []
    for proj in projects:
        res.append(proj.to_dict())
    return jsonify(res)

@app.route('/api/project', methods=['POST'])
def save_project():
    if request.method == 'POST':
        data = request.form

        response = {
            'title': data.get('title'),
            'location': data.get('location'),
            'start_date': data.get('start_date'),
            'end_date': data.get('end_date'),
            'description': data.get('description')
        }

        db.collection('projects').add(response)

        return jsonify(response)
    

if __name__ == "__main__":
    app.run(port=8080)