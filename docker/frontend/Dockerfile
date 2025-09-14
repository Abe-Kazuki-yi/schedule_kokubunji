FROM node:20
WORKDIR /app

COPY ./frontend/package*.json /app
RUN npm ci

CMD ["npm", "run", "dev"]