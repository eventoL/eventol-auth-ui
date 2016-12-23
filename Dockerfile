# Basic install of exo-docker
#
# Currently install exo-docker
FROM node:latest
MAINTAINER Martin Adolfi
RUN apt-get update -y \
 && apt-get install -y git \
 && apt-get install -y default-jre \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
RUN npm config set registry http://registry.npmjs.org \
 && npm cache clean
RUN npm i -g bower
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install \
 && npm cache clean
COPY bower.json /usr/src/app
COPY .bowerrc /usr/src/app
RUN bower install --allow-root\
 && bower cache clean
COPY . /usr/src/app


CMD [ "npm", "start" ]
