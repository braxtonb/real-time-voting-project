FROM node:14.9.0-alpine

#set port
ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
RUN npm ci

EXPOSE 3000

CMD ["npm", "run", "dev"]