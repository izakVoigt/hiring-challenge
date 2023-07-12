###########################
## BUILD FOR DEVELOPMENT ##
###########################

FROM node:20-alpine As development

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node . /usr/src/app

ENV NODE_ENV=development
