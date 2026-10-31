
import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working");
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
};

startServer();
