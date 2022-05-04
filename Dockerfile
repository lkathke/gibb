FROM node:16

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node main.mjs

EXPOSE 3000



