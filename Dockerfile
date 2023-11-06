FROM node:20-alpine as base

FROM base as development
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
CMD ["yarn", "dev"]


FROM base as build
WORKDIR /app
COPY . .
RUN rm -rf backend/
RUN yarn install --frozen-lockfile
RUN yarn build


FROM base as production
WORKDIR /app
ENV NODE_ENV=production
ENV STAGE=production
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/yarn.lock ./yarn.lock
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.js ./
COPY --from=build /app/next-sitemap.config.js ./
COPY --from=build /app/LICENSE ./
COPY --from=build /app/README.md ./
EXPOSE 3000
CMD ["yarn", "start"]
