FROM node:16.13

RUN apt-get update
RUN apt-get install lsof

WORKDIR /app

COPY ./react-project /app

RUN npm install

CMD ["npm","start"]!
