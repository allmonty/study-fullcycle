FROM node:20-alpine

WORKDIR /usr/src/app

COPY ./node/package.json ./node/package-lock.json ./

RUN npm ci

COPY ./node/app.js ./

CMD ["npm", "start"]
