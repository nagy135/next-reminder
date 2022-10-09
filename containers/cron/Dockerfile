FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY tsconfig.json /usr/src/app
COPY package.json /usr/src/app
COPY index.ts /usr/src/app

RUN yarn global add -g ts-node

# Production use node instead of root
# USER node

RUN yarn

CMD [ "yarn", "start" ]
