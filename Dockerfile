FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn

# Install TypeScript globally
RUN yarn global add typescript

COPY . .
COPY .env.production .env

RUN yarn build

ENV NODE_ENV production

EXPOSE 3000
CMD [ "yarn", "start" ]
USER node