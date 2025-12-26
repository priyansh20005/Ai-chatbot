import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js"; 

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// ✅ FIXED: Removed trailing slashes
const allowedOrigins = [
  "http://localhost:5173",
  "https://aarogyam-4-u.onrender.com",
  "https://ai-chatbot-1-rw2g.onrender.com",
  "https://backend-chatbot-9whb.onrender.com",
  "https://ai-chatbot-voj3.onrender.com" // Add your own backend for testing
];

// ✅ Add logging middleware to see requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  console.log('Origin:', req.headers.origin || 'No origin');
  next();
});

app.use(
  cors({
    origin: function (origin, callback) {
      // Add debugging logs
      console.log('CORS check - Origin:', origin);
      
      if (!origin) {
        console.log('No origin - allowing');
        return callback(null, true);
      }
      
      // Check if origin is allowed
      if (allowedOrigins.includes(origin)) {
        console.log('✅ Origin allowed');
        return callback(null, true);
      }
      
      // Try without trailing slash (if origin has one)
      const originWithoutSlash = origin.endsWith('/') ? origin.slice(0, -1) : origin;
      if (allowedOrigins.includes(originWithoutSlash)) {
        console.log('✅ Origin allowed (after removing slash)');
        return callback(null, true);
      }
      
      console.log('❌ Origin NOT in allowed list');
      console.log('Allowed:', allowedOrigins);
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// Health check with CORS info
app.get("/", (req, res) => {
  res.json({
    message: "🚀 AI Chatbot Backend is running successfully!",
    status: "healthy",
    cors: {
      allowedOrigins: allowedOrigins,
      currentOrigin: req.headers.origin
    }
  });
});

// Test endpoint
app.get("/api/test-cors", (req, res) => {
  res.json({
    success: true,
    message: "CORS test successful!",
    origin: req.headers.origin,
    timestamp: new Date().toISOString()
  });
});

app.use("/api", chatRoutes);

const connectDB = async () => {
  try {
    // Remove deprecated options
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌐 Backend URL: https://ai-chatbot-voj3.onrender.com`);
      console.log(`📋 Allowed origins:`, allowedOrigins);
    });
  } catch (err) {
    console.error("❌ Failed to connect to DB:", err);
    process.exit(1);
  }
};

connectDB();