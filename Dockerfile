FROM node
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
CMD [ "node", "app.js" ]