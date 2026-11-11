# Python Backend – Docker Lab

A simple REST API built with Python and FastAPI, containerized using Docker.

## Tech Stack

- Python 3.13
- FastAPI
- Uvicorn
- Docker

## Project Structure

```text
04-python/
├── app/
│   └── main.py
├── Dockerfile
├── requirements.txt
└── README.md
```

## API Endpoints

| Method | Endpoint  | Description             |
| ------ | --------- | ----------------------- |
| GET    | `/`       | Welcome message         |
| GET    | `/health` | Health check            |
| GET    | `/users`  | Get sample users        |
| GET    | `/info`   | Application information |

Interactive API documentation: `/docs`

## Build Docker Image

```bash
docker build -t python-backend .
```

## Run Container

```bash
docker run -d \
  --name python-backend \
  -p 8000:8000 \
  python-backend
```

## Test API

```bash
curl http://localhost:8000/
curl http://localhost:8000/health
curl http://localhost:8000/users
curl http://localhost:8000/info
```

Open API documentation:

http://localhost:8000/docs

## Container Management

View running containers:

```bash
docker ps
```

View logs:

```bash
docker logs python-backend
```

Stop container:

```bash
docker stop python-backend
```

Remove container:

```bash
docker rm python-backend
```

## Docker Concepts Practiced

- Base image selection
- Working directory configuration
- Dependency installation
- Copying application source code
- Port exposure
- Container startup using CMD
- Image building and container lifecycle management

---

**Part of the Dockerfile Lab** – Hands-on exploration of Dockerfiles across different programming languages.
