# Node.js Docker Lab

A practical collection of Dockerfile examples demonstrating how to containerize and optimize Node.js applications.

## Version 4: Non-Root Dockerfile

This example demonstrates running a Node.js application using a non-root Linux user to follow the principle of least privilege.

### Project Structure

```text
nodejs/
├── src/
│   └── server.js
├── .dockerignore
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

### Dockerfile

```dockerfile
# Base image
FROM node:26-alpine3.23

# Set working directory
WORKDIR /app

# Copy application files with correct ownership
COPY --chown=node:node package.json ./
COPY --chown=node:node src/ ./src/

# Set production environment
ENV NODE_ENV=production

# Switch to non-root user
USER node

# Document application port
EXPOSE 3000

# Start application
CMD ["node", "src/server.js"]
```

### Build Image

Run from the `nodejs/` directory:

```bash
docker build -t dockerfile-lab-node:non-root .
```

### Run Container

```bash
docker run -d \
  --name nodejs-non-root \
  -p 3002:3000 \
  dockerfile-lab-node:non-root
```

### Verify Container User

```bash
docker exec nodejs-non-root whoami
```

Expected output:

```text
node
```

Inspect user and group IDs:

```bash
docker exec nodejs-non-root id
```

### Test Application

```bash
curl http://localhost:3002
```

### Test Root Directory Permissions

```bash
docker exec nodejs-non-root sh -c "touch /root/test.txt"
```

The operation should fail because the application runs without root privileges.

### Docker Concepts Covered

| Instruction / Concept | Purpose                                                   |
| --------------------- | --------------------------------------------------------- |
| `USER`                | Specifies the user running subsequent container processes |
| `COPY --chown`        | Sets ownership of copied files                            |
| `ENV`                 | Configures environment variables                          |
| Linux UID/GID         | Identifies users and groups                               |
| Least Privilege       | Limits unnecessary permissions                            |

### Security Benefits

- Avoids running the application as root.
- Reduces the impact of certain application compromises.
- Establishes better file ownership.
- Encourages least-privilege container design.

**Note:** Running as a non-root user is one security measure, not a complete container security solution.

---

Part of **Dockerfile Lab** — Practical Dockerfile examples across multiple technologies.
