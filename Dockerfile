FROM node:14.17.3
WORKDIR '/usr/src/app'

COPY backend ./backend

WORKDIR '/usr/src/app/backend'

RUN npm i

CMD [ "npm", "start" ]