FROM node:12.15.0-alpine3.11

WORKDIR app
COPY app.js package.json /app/
RUN npm install

ENV NODE_ENV='production'
ENV NODE_APP_PORT=3000
CMD npm start

EXPOSE 3000
