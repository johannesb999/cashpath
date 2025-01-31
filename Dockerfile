# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build-storybook

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/storybook-static /usr/share/nginx/html/
COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
