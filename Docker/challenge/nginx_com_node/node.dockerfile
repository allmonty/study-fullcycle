FROM node:20-alpine

WORKDIR /app

COPY ./node/. .

RUN npm install

CMD [ "node", "app.js" ]