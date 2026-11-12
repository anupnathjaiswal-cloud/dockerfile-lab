
# Stage 1: Base
FROM node:26-alpine3.23 AS base

WORKDIR /app

# Stage 2: Dependencies
FROM base AS dependencies

RUN npm install -g pnpm@12.18.0

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

# Stage 3: Builder
FROM base AS builder

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm install -g pnpm@12.18.0

RUN pnpm build

# Stage 4: Production
FROM base AS production

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
