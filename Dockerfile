FROM node:18.16 AS builder


WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build:all

FROM node:18.16 AS production

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

COPY startup.sh ./

COPY ecosystem.config.js ./

COPY --from=builder /app/dist ./dist

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

ARG GIT_COMMIT

ENV GIT_COMMIT=${GIT_COMMIT}

RUN echo "Commit - $GIT_COMMIT"

RUN npm install pm2 -g

RUN yarn --production

RUN apt-get install -y tzdata

ENV TZ="Asia/Ho_Chi_Minh"

CMD [ "./startup.sh" ]