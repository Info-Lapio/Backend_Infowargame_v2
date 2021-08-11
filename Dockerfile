FROM node:16 AS builder
WORKDIR /app

COPY . .

RUN npm install -g yarn
RUN yarn
RUN yarn build

FROM node:16-alpine
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 5500

CMD ["yarn", "start"]