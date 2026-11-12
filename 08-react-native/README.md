# React Native + Expo Docker Lab

A minimal React Native application built with Expo and TypeScript, containerized using Docker.

## Tech Stack

- React Native
- Expo SDK 58
- TypeScript
- Expo Router
- Node.js 26
- Docker

## Project Structure

```text
08-react-native/
├── src/
│   └── app/
│       ├── _layout.tsx
│       ├── index.tsx
│       ├── about.tsx
│       ├── profile.tsx
│       ├── contact.tsx
│       └── services.tsx
├── assets/
├── Dockerfile
├── .dockerignore
├── package.json
├── package-lock.json
└── README.md
```

## Available Routes

| Route       | Description |
| ----------- | ----------- |
| `/`         | Home        |
| `/about`    | About       |
| `/profile`  | Profile     |
| `/contact`  | Contact     |
| `/services` | Services    |

## Docker Setup

### 1. Build Docker Image

```bash
docker build -t rn-expo .
```

### 2. Run Container

```bash
docker run -d \
  --name rn-expo \
  -p 8081:8081 \
  -v "$(pwd):/app" \
  -v /app/node_modules \
  rn-expo:latest \
  npx expo start --clear --host lan
```

### 3. Check Running Container

```bash
docker ps
```

### 4. View Container Logs

```bash
docker logs -f rn-expo
```

### 5. Stop Container

```bash
docker stop rn-expo
```

### 6. Remove Container

```bash
docker rm rn-expo
```

## Docker Development Features

- Detached container execution.
- Port mapping between host and container.
- Bind mounting for source-code synchronization.
- Anonymous volume for container dependencies.
- Expo cache clearing.
- File-based routing with Expo Router.

## Important Note

Docker runs the Expo development server and its development environment. It does not directly execute the React Native application as an Android or iOS native app.

Use Expo Go or an appropriate development build to preview the application on a mobile device.

## Learning Objectives

- Understand Docker image and container lifecycle.
- Write a Dockerfile for a React Native project.
- Configure port mapping.
- Understand bind mounts and volumes.
- Run Expo development services inside Docker.
- Work with Expo Router and multiple application routes.

---

**Project:** Dockerfile Lab  
**Module:** 08 - React Native  
**Purpose:** Hands-on Docker learning and experimentation.
