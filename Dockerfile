FROM node:11-alpine

WORKDIR /src

COPY package.json . 

RUN npm install -g nodemon && npm install

COPY . . 

EXPOSE 9000

CMD npm start