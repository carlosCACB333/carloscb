FROM node:20-alpine as base

FROM base as deps
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile


FROM base as development
WORKDIR /app
ENV STAGE=development
COPY --from=deps /app/node_modules ./node_modules
COPY . .
CMD [ "yarn", "dev"]


FROM base as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN rm -rf backend
RUN yarn build


FROM base as production
WORKDIR /app
ENV STAGE=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN mkdir .next
RUN chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/LICENSE ./
RUN rm .env
USER nextjs
ENV HOSTNAME "0.0.0.0"
EXPOSE 3000
CMD ["node", "server.js"]