const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Root Route (Important for Render)
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Backend API is running successfully!"
  });
});
//done

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} 🚀`)
);