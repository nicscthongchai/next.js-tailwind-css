FROM mhart/alpine-node:16.4.2 AS builder
WORKDIR /app
COPY . .
RUN npm install --silent
RUN npm run build

FROM mhart/alpine-node:16.4.2 AS modules
WORKDIR /app
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
RUN npm prune --production

FROM mhart/alpine-node:16.4.2
WORKDIR /app
COPY ./package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/src/pages ./pages
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=modules /app/node_modules ./node_modules

CMD [ "npm", "run", "start" ]