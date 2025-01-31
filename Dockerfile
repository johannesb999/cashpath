FROM node:12.22.6 as builder

WORKDIR /usr/app

COPY ./package*.json ./

COPY ./.storybook ./.storybook

COPY ./nginx ./nginx

COPY ./src ./src

COPY ./.eslintrc.js ./.eslintrc.js
COPY ./babel.config.js ./babel.config.js
COPY ./jsconfig.json ./jsconfig.json


RUN npm ci

RUN npm run build-storybook

FROM nginx:1.15

WORKDIR /usr/app

COPY --from=builder /usr/app/storybook-static ./

COPY ./nginx/.htpasswd /etc/nginx/.htpasswd
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

CMD ["/bin/bash", "-c", "exec nginx -g 'daemon off;'"]
