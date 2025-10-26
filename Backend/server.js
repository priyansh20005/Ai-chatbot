import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";


const app = express();
const PORT=8080;

app.use(express.json());
app.use(cors());

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
    connectDB();
});

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB succesfully");
    }catch(err){
        console.log("Failed to connect with DB "+err);
    }
}

// app.post("/test",async (req,res)=>{
//     const options = {
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json",
//             "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
//         },
//         body:JSON.stringify({
//             model: "gpt-4o-mini",
//             messages: [
//                      {
//                  role: "user",
//                 content: req.body.message
//                         }]
//         })
//     }

//     try{
//         const response = await fetch("https://api.openai.com/v1/chat/completions" , options);
//         const data = await response.json();
//         // console.log(data);
//         // res.send(data);
//         console.log(data.choices[0].message.content);
//         res.send(data.choices[0].message.content);
//     }catch(err){
//         console.log(err);
//     }
// } );
