FROM node:16.13

WORKDIR /app

COPY ./react-project /app

RUN npm install

CMD ["npm","start"]!