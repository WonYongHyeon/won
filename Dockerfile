FROM node:16

WORKDIR /won/
COPY . /won/

RUN yarn install
RUN yarn build
CMD yarn start
