
# =====================================
# Stage 1: Dependencies
# =====================================
FROM node:26-alpine3.23 AS dependencies

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev


# =====================================
# Stage 2: Production
# =====================================
FROM node:26-alpine3.23 AS production

WORKDIR /app

ENV NODE_ENV=production

# Copy dependencies from first stage
COPY --from=dependencies /app/node_modules ./node_modules

# Copy application files
COPY package.json ./
COPY src/ ./src/

# Run as non-root user
USER node

EXPOSE 3000

# Start application
CMD ["node", "src/server.js"]
