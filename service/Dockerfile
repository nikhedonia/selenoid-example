FROM node:14

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

# RUN npm install
# If you are building your code for production

RUN yarn install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]