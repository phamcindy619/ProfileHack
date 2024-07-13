echo "Running backend..."
sudo docker build -t backend .
sudo docker run -v "$HOME/.config/gcloud:/gcp/config:ro" \
    --env CLOUDSDK_CONFIG=/gcp/config \
    --env GOOGLE_APPLICATION_CREDENTIALS=/gcp/config/application_default_credentials.json \
    -p 8080:8080 backend