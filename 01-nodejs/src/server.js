import http from "http";

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json",
    });

    res.end(
        JSON.stringify({
            message: "Hello from Docker!",
            application: "Node.js Docker Lab",
            status: "running",
        }),
    );
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
