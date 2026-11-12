# Next.js Docker Lab

A production-oriented Next.js application containerized using Docker multi-stage builds.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- pnpm
- Node.js 26 Alpine
- Docker

## Project Structure

```text
04-nextjs/
├── src/
│   └── app/
│       ├── page.tsx
│       ├── about/page.tsx
│       ├── users/page.tsx
│       └── api/health/route.ts
├── public/
├── Dockerfile
├── .dockerignore
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
└── README.md
```

## Application Routes

| Method | Route         | Description                 |
| ------ | ------------- | --------------------------- |
| GET    | `/`           | Home page                   |
| GET    | `/about`      | About page                  |
| GET    | `/users`      | Displays sample users       |
| GET    | `/api/health` | Application health endpoint |

## Run Locally

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Visit `http://localhost:3000`.

## Docker Architecture

The Dockerfile uses four stages:

1. **Base:** Node.js 26 Alpine environment.
2. **Dependencies:** Install dependencies with pnpm.
3. **Builder:** Generate the optimized Next.js build.
4. **Production:** Run the standalone server as a non-root user.

Next.js standalone output is enabled in `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
};

export default nextConfig;
```

## Build Docker Image

```bash
docker build -t nextjs-app .
```

## Run Docker Container

```bash
docker run -d \
  --name nextjs-app \
  -p 3000:3000 \
  nextjs-app
```

## Test Routes

```bash
curl http://localhost:3000
curl http://localhost:3000/about
curl http://localhost:3000/users
curl http://localhost:3000/api/health
```

Expected health response:

```json
{
    "status": "success",
    "message": "Next.js Docker application is healthy"
}
```

## Docker Commands

Check running containers:

```bash
docker ps
```

View logs:

```bash
docker logs nextjs-app
```

Access container shell:

```bash
docker exec -it nextjs-app sh
```

Stop and remove container:

```bash
docker stop nextjs-app
docker rm nextjs-app
```

## Production Features

- Multi-stage Docker build
- Optimized standalone output
- Smaller production image than a full development image
- Non-root container execution
- Docker build caching for dependencies
- Environment-based runtime configuration

## Learning Objectives

Understand how to build, package, run, inspect, and troubleshoot a production-oriented Next.js application using Docker.
