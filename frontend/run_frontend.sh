echo "Running frontend..."
sudo docker build -t frontend .
sudo docker run -p 3000:3000 frontend