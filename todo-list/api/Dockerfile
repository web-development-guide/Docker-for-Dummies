FROM node:12.15.0-alpine3.11

WORKDIR todo-app
COPY app.js model.js package.json /todo\-app/
RUN npm install

CMD npm start
EXPOSE 80
