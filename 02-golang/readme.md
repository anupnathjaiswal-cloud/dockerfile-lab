# GoLang WebApp — Docker

A simple HTTP web application built with Go and containerized using Docker Multi-Stage Builds.

## Tech Stack

- Go 1.26
- Docker
- Alpine Linux

## Project Structure

```text
02-golang/
├── Dockerfile
├── go.mod
├── main.go
└── README.md
```

## Application Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Home endpoint |
| GET | `/health` | Health check endpoint |

## Dockerfile Overview

This project uses a multi-stage Docker build.

### Stage 1: Builder

- Uses the official `golang:1.26-alpine` image.
- Copies Go module and source files.
- Compiles the application into a standalone executable named `server`.

### Stage 2: Production

- Uses `alpine:3.23` as the base image.
- Copies only the compiled executable from the builder stage.
- Exposes port `8080`.
- Starts the application using `CMD`.

## Build Docker Image

```bash
docker build -t golang-webapp .
```

## Run Container

```bash
docker run -d \
  --name golang-webapp \
  -p 8080:8080 \
  golang-webapp
```

## Test Application

```bash
curl http://localhost:8080
curl http://localhost:8080/health
```

Expected responses:

```text
Hello from GoLang Docker WebApp!
OK
```

## Container Management

View running containers:

```bash
docker ps
```

View application logs:

```bash
docker logs golang-webapp
```

Stop container:

```bash
docker stop golang-webapp
```

Remove container:

```bash
docker rm golang-webapp
```

## Learning Objectives

- Initialize a Go module using Docker without installing Go locally.
- Understand Docker Multi-Stage Builds.
- Compile Go source code into an executable binary.
- Separate build-time and runtime environments.
- Run a Go web application inside a Docker container.
- Understand port mapping and detached mode.

---

**Part of the Dockerfile Lab** — A hands-on collection of Dockerfile examples and containerization practices.