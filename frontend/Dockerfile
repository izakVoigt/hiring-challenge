###########################
## BUILD FOR DEVELOPMENT ##
###########################

FROM node:20-alpine As development

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node . /app
