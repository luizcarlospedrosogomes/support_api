FROM node:11-alpine

WORKDIR /src

COPY package.json .

RUN npm install -g nodemon
RUN npm install --quiet
RUN npm install cors --save

COPY . .

EXPOSE 9000
