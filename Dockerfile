FROM mhart/alpine-node:10 AS builder
WORKDIR /app
COPY package.json .
COPY pages pages
COPY api api
COPY components components
COPY public public
COPY styles styles
COPY next.config.js next.config.js

RUN yarn install
RUN yarn build

FROM mhart/alpine-node:10
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["yarn", "start"]
