# React + TypeScript + Docker

A containerized React application built with **Vite, TypeScript, Node.js, and Docker** using a multi-stage Docker build.

## Tech Stack

- React
- TypeScript
- Vite
- Node.js 26 Alpine
- Docker
- Serve (static file server)

## Project Structure

```text
05-react/
├── src/
├── public/
├── Dockerfile
├── .dockerignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

## Docker Architecture

This project uses a three-stage Docker build.

| Stage        | Purpose                                          |
| ------------ | ------------------------------------------------ |
| Dependencies | Install npm dependencies using `npm ci`          |
| Builder      | Compile React and TypeScript using Vite          |
| Production   | Serve static build files using Node.js and Serve |

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd dockerfile-lab/05-react
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

## Docker Instructions

### 1. Build Docker Image

```bash
docker build -t react-docker .
```

### 2. Run Container

```bash
docker run -d --name react-app -p 3000:3000 react-docker
```

### 3. Access Application

Open:

http://localhost:3000

### 4. Inspect Container

```bash
docker ps
docker logs react-app
docker exec -it react-app sh
```

### 5. Stop and Remove Container

```bash
docker stop react-app
docker rm react-app
```

## Docker Concepts Covered

- Multi-stage Docker builds
- Node.js Alpine images
- Dependency installation with `npm ci`
- Production builds with Vite
- Build artifact transfer using `COPY --from`
- Container port mapping
- Detached container execution
- Container inspection and debugging

## Key Learning

The final production stage doesn't require the complete React source code, development dependencies, or Vite build tools.

Only the generated `dist/` directory is transferred into the production image and served using Node.js.

---

**Part of:** [Dockerfile Lab](repository-url)

**Project:** 05-react

**Purpose:** Hands-on Dockerfile learning and containerization.
