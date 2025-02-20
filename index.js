const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable for deployment

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 🔹 Example API route
app.get("/api/data", (req, res) => {
    res.json({ message: "Hello from backend!", status: "success" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
