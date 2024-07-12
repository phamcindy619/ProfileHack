FROM node:22

WORKDIR /frontend

COPY public/ frontend/public
COPY src/ frontend/src
COPY package.json /frontend/

RUN npm install

CMD ["npm", "start"]