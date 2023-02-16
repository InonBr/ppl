FROM ubuntu

FROM node

WORKDIR /server

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["node", "app.ts"]