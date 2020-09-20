FROM node:lts-alpine

RUN mkdir -p /client

RUN yarn global add http-server

WORKDIR /client

COPY package*.json /client/

RUN yarn install

COPY . /client/

RUN yarn build

EXPOSE 8080

CMD [ "http-server", "dist", "-p", "8080"]