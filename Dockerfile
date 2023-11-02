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
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.js ./next.config.js
COPY --from=build /app/LICENSE ./LICENSE
COPY --from=build /app/README.md ./README.md
CMD ["yarn", "start"]
