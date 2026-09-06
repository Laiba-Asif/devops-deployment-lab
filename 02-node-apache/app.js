const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>DevOps Deployment Lab 🚀</h1>
        <p>Node.js Express application successfully deployed behind Apache.</p>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        service: "node-express"
    });
});

app.listen(PORT, "127.0.0.1", () => {
    console.log(`Node.js application running on http://127.0.0.1:${PORT}`);
});
