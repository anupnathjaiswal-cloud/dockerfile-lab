
# Base image
FROM node:26-alpine3.23

# Set working directory
WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

HEALTHCHECK --interval=30s \
  --timeout=3s \
  --start-period=5s \
  --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:3000/health', (res) => process.exit(res.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"

# Copy application source
COPY src/ ./src/

# Document application port
EXPOSE 3000

# Start application
CMD ["node", "src/server.js"]
