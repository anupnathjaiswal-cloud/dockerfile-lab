# Java Backend – Docker Lab

A simple REST API built using Java 17 and Spring Boot, containerized using Docker.

## Tech Stack

- Java 17
- Spring Boot 3.5.7
- Maven
- Docker

## Project Structure

```text
07-java/
├── src/
│   └── main/
│       ├── java/com/example/demo/
│       │   ├── controller/
│       │   │   └── HelloController.java
│       │   └── DemoApplication.java
│       └── resources/
│           └── application.properties
├── target/
├── Dockerfile
├── pom.xml
└── README.md
```

## API Endpoints

| Method | Endpoint      | Description             |
| ------ | ------------- | ----------------------- |
| GET    | `/`           | Welcome message         |
| GET    | `/api/health` | Application health      |
| GET    | `/api/info`   | Application information |

## Run Locally

Build the application:

```bash
mvn clean package
```

Run the JAR:

```bash
java -jar target/java-backend-1.0.0.jar
```

## Docker

Build Docker image:

```bash
docker build -t java-backend .
```

Run container in detached mode:

```bash
docker run -d \
  --name java-backend \
  -p 8080:8080 \
  java-backend
```

Check running containers:

```bash
docker ps
```

View logs:

```bash
docker logs java-backend
```

Test API:

```bash
curl http://localhost:8080/api/health
```

Stop and remove container:

```bash
docker stop java-backend
docker rm java-backend
```

## Docker Concepts Practiced

- Dockerfile creation
- Base image selection
- Working directory configuration
- Copying application artifacts
- Port exposure
- Container startup commands
- Image building
- Detached container execution
- Container logs and lifecycle management

---

**Project:** Dockerfile Lab  
**Module:** Java + Spring Boot
