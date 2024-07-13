FROM node:22

WORKDIR /frontend

COPY public/ public/
COPY src/ src/
COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]