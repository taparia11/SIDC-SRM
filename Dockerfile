FROM node:alpine
WORKDIR /app/
COPY package*.json .
RUN npm install
COPY . .
WORKDIR /app
EXPOSE 3000
CMD ["node" "start"]