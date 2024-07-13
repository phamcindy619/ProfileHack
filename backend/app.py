import firebase_admin, json
from flask import Flask, request, jsonify
from firebase_admin import credentials, firestore
from google.cloud import secretmanager

manager = secretmanager.SecretManagerServiceClient()
name = "projects/496024853303/secrets/firebase_sdk_key/versions/1"
key = manager.access_secret_version(name=name)

firebase_cred = credentials.Certificate(json.loads(key.payload.data.decode('UTF-8')))
firebase_app = firebase_admin.initialize_app(firebase_cred)
db = firestore.client()

app = Flask(__name__)

@app.route('/')
def home():
    return 'OK'

@app.route('/api/user', methods=['POST'])
def save_user():
    if request.method == 'POST':
        data = request.form

        response = {
            'username': data.get('username'),
            'password': data.get('password')
        }
        
        db.collection('users').add(response)

        return jsonify(response), 200

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
            'description': data.get('description'),
            'user_id': data.get('user_id')
        }

        db.collection('projects').add(response)

        return jsonify(response), 200
    

if __name__ == "__main__":
    app.run(port=8080)