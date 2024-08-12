FROM node:14

WORKDIR /app

COPY backend/node/package*.json ./
RUN npm install

COPY backend/node/ .

EXPOSE 5000
CMD ["node", "index.js"]
