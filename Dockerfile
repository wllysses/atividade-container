FROM node:latest

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

RUN apt-get update && apt-get install -y nodejs npm

COPY . .

EXPOSE 3000

CMD ["npm", "start"]