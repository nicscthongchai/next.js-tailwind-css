FROM node:12.22-alpine AS builder
WORKDIR /app
COPY . .
RUN npm i -g pnpm
RUN pnpm install --silent
RUN pnpm build

FROM node:12.22-alpine AS modules
WORKDIR /app
RUN npm i -g pnpm
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
RUN pnpm prune --production


FROM mhart/alpine-node:12.22
WORKDIR /app
COPY ./package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/src/pages ./pages
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=modules /app/node_modules ./node_modules

CMD [ "npm", "run", "start" ]