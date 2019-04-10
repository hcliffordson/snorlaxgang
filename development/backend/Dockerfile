FROM node:11-alpine AS BASE
RUN apk add --no-cache tini
WORKDIR /data
ENTRYPOINT ["/sbin/tini", "--"]

# BUILDER
FROM BASE AS BUILDER
COPY package.json yarn.lock ./
RUN yarn --production
RUN cp -R node_modules prod_node_modules
RUN yarn
COPY . .
RUN ["yarn", "build"]

# RUNNER
FROM BASE AS RUNNER
COPY --from=BUILDER /data/prod_node_modules ./node_modules
COPY --from=BUILDER /data/dist ./dist

EXPOSE 4000
CMD ["node", "./dist/src/index.js"]