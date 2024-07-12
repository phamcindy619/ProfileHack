echo "Running backend..."
sudo docker build -t backend .
sudo docker run -p 8080:8080 backend