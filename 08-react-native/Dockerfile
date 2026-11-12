# Base image
FROM node:26-alpine

# Working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose Expo port
EXPOSE 8081

# Start Expo development server
CMD ["npx", "expo", "start", "--host", "lan"]