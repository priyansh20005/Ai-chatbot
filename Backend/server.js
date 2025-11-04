import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js"; 


const app = express();
const PORT= process.env.PORT || 8080;

app.use(express.json());
// app.use(cors());
const allowedOrigins = [
  "http://localhost:5173", // local dev
  "https://your-frontend-domain.com"  ,// replace later after deployment
  "http://54.90.94.99:3000" ,
   "https://aarogyam-4-u.onrender.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("🚀 AI Chatbot Backend is running successfully!");
});

app.use("/api", chatRoutes);

// app.listen(PORT,()=>{
//     console.log(`server running on ${PORT}`);
//     // connectDB();
// });

// const connectDB = async()=>{
//     try{
//         await mongoose.connect(process.env.MONGODB_URI);
//         console.log("Connected to DB succesfully");
//     }catch(err){
//         console.log("Failed to connect with DB "+err);
//     }
// }

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to DB:", err);
    process.exit(1); // Exit if DB fails
  }
};

connectDB();

