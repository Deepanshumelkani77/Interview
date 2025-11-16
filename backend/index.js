const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();

// Import routes
const interviewRoutes = require('./routes/interviewRoutes');

// App config
const app = express();
const port = process.env.PORT || 2000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://deepumelkani123_db_user:PrepNinja@cluster0.rxrktri.mongodb.net/?appName=Cluster0");
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Error connecting to database:", error);
    console.log("⚠️  Server continuing without database connection");
    // Don't exit the process, allow server to run without DB
  }
};

// Connect to database
connectDB();

// Routes
app.use('/api/interview', interviewRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'AI Mock Interview API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!', 
    details: err.message 
  });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);

});