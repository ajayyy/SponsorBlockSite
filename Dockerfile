FROM node:16-alpine as builder
RUN apk add --no-cache --virtual .build-deps python3 make g++
COPY package.json package-lock.json gatsby-config.js ./
COPY src src
COPY static static
RUN npm ci && npm run build

FROM nginx as app
EXPOSE 80
COPY --from=builder public/ /usr/share/nginx/html