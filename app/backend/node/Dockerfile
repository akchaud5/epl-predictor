FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install pg jsonwebtoken bcryptjs express cors dotenv winston morgan helmet express-rate-limit js-yaml

COPY . .

EXPOSE 5000
CMD ["node", "index.js"]
