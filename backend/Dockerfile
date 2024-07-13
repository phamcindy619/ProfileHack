# syntax=docker/dockerfile:1
FROM python:3.8

WORKDIR /backend

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

EXPOSE 8080

COPY . .

CMD ["gunicorn", "app:app", "-w 2", "-b 0.0.0.0:8080"]