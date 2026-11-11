import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello from Docker!",
        application: "Node.js Optimized Docker Lab",
        status: "running",
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
