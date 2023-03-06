FROM node:16

WORKDIR /usr/src/frontend

RUN npm install -g serve

COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./

RUN NODE_ENV=production npm install --omit=dev

COPY ./frontend ./

RUN npm run build

EXPOSE 5000
ENTRYPOINT [ "serve", "-l", "5000", "-s", "build" ]