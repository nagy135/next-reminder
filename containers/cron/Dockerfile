FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY index.js /usr/src/app

# Production use node instead of root
# USER node

RUN yarn

CMD [ "node", "index.js" ]
