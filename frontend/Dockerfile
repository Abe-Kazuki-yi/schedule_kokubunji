# frontend/Dockerfile
#FROM node:22.2.0
FROM node:22.12.0

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

#CMD ["npm", "start"]
CMD ["npm", "run", "watch"]
