FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

RUN mkdir -p /etc/letsencrypt/live/chthon.servebeer.com

ARG FULLCHAIN
ARG PRIVKEY

RUN echo "$FULLCHAIN" > /etc/letsencrypt/live/chthon.servebeer.com/fullchain.pem && \
    echo "$PRIVKEY" > /etc/letsencrypt/live/chthon.servebeer.com/privkey.pem

COPY nginx.conf /etc/nginx/conf.d

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
