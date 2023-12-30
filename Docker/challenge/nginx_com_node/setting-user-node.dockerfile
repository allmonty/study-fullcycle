FROM node:20-alpine

ARG USER_ID

RUN echo $USER_ID

RUN deluser --remove-home node \
  && addgroup -S node -g $USER_ID \
  && adduser -S -G node -u $USER_ID node

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node ./node/package.json ./node/package-lock.json ./

RUN npm ci

COPY --chown=node:node ./node/app.js ./

# ENTRYPOINT ["npm", "install"]
CMD ["npm", "start"]
