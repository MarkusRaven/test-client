# Image source
FROM node:16-alpine

# Docker working directory
WORKDIR /test-backend

# Copying file into APP directory of docker
COPY ./package.json ./package-lock.json /test-backend/

# Then install the NPM module
RUN npm install

# Copy current directory to APP folder
COPY . /test-backend/

EXPOSE 3000
CMD ["npm", "run", "start:dev"]