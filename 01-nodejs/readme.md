# Node.js Docker Lab

A practical Docker learning example demonstrating how to containerize a Node.js application using a basic Dockerfile.

## Project Structure

```text
nodejs/
├── src/
│   └── server.js
├── .dockerignore
├── Dockerfile
├── package.json
└── README.md
```

## Prerequisites

- Node.js 26+
- Docker Engine or Docker Desktop

## Application

A simple HTTP server built using Node.js's native HTTP module.

Default application port: `3000`

## Dockerfile

```dockerfile
FROM node:26-alpine3.23

WORKDIR /app

COPY package.json .

COPY src/ ./src/

EXPOSE 3000

CMD ["npm", "start"]
```

## Build Docker Image

Run from the `nodejs/` directory:

```bash
docker build -t dockerfile-lab-node .
```

## Run Container

```bash
docker run -d \
  --name nodejs-demo \
  -p 3000:3000 \
  dockerfile-lab-node
```

## Test Application

```bash
curl http://localhost:3000
```

Expected response:

```json
{
  "message": "Hello from Docker!",
  "application": "Node.js Docker Lab",
  "status": "running"
}
```

## Container Management

View running containers:

```bash
docker ps
```

View application logs:

```bash
docker logs nodejs-demo
```

Stop container:

```bash
docker stop nodejs-demo
```

Remove container:

```bash
docker rm nodejs-demo
```

## Docker Concepts Covered

- `FROM` — Base image selection
- `WORKDIR` — Working directory configuration
- `COPY` — Copying application files
- `EXPOSE` — Documenting application port
- `CMD` — Container startup command
- `.dockerignore` — Excluding unnecessary build-context files
- Image building and container execution

## Learning Objectives

Understand the fundamentals of Dockerizing a Node.js application before moving towards optimized, multi-stage, and production-ready Dockerfiles.

---

Part of **Dockerfile Lab** — A collection of practical Dockerfile examples across different technologies.