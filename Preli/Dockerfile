FROM node:18-alpine 

WORKDIR /app

#COPY all dependencis
COPY . .

# RUN yarn install --frozen-lockfile
RUN yarn install

# COPY .env .env

RUN yarn build

EXPOSE 5000

CMD [ "yarn", "start" ]

