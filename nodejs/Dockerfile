FROM node:latest
MAINTAINER David Gomez <david.garcia.mx@gmail.com>

ADD app.js /var/www/
ADD package.json /var/www/

WORKDIR /var/www

RUN npm install

CMD [ "npm", "run", "start" ]