
# Stage 1: Dependencies
FROM node:26-alpine3.23 AS dependencies

WORKDIR /app

COPY package*.json ./

RUN npm i


# Stage 2: Build
FROM dependencies AS builder

COPY . .

RUN npm run build


# Stage 3: Production
FROM nginx:alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
