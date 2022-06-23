FROM node:alpine

WORKDIR /api

COPY ./package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "dev" ]