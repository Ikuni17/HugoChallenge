FROM node:16

WORKDIR /usr/src/backend

COPY ./backend/package.json ./
COPY ./backend/package-lock.json ./

RUN NODE_ENV=production npm install --omit=dev

COPY ./backend ./

RUN npm run build

EXPOSE 8000
ENTRYPOINT [ "npm", "run", "start:prod" ]