FROM node:latest

WORKDIR /usr/src/app

COPY node_api/package*.json ./
RUN npm install
COPY node_api/. .
CMD ["node", "./index.js"]