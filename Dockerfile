FROM node:20-alpine

LABEL Renshuu dev

WORKDIR /app

RUN npm i -g typescript tsx

COPY ./server/package*.json /app

RUN npm i

CMD ["npm", "start"]