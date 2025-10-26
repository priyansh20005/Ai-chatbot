import express from "express";
import Thread from "../models/Thread.js";
import getOpenAIAPIResponse from "../utils/openai.js";

const router = express.Router();


//test -sample
router.post("/test",async(req,res)=>{
    try{
        const thread = new Thread({
            threadId:"abc",
            title:"Testing New Thread"
        });
        const response = await thread.save();
        res.send(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Failed to save in DB"});
    }
});


//get all threads  -1st
router.get("/thread",async(req,res)=>{
    try{
       const threads= await Thread.find({}).sort({updatedAt:-1});
       // Descending order of updatedAt.... most ecent data on top
       res.json(threads);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Failed to fetch Threads "});
    }
});


// getting specific chat session(thread) -2nd
router.get("/thread/:threadId" , async(req,res)=>{

    const {threadId} = req.params;

    try{
        const thread = await Thread.findOne({threadId});
        if(!thread){
            res.send(404).json({error:"Thread not found"});
        }
        res.json(thread.messages)
    }
     catch(err){
        console.log(err);
        res.status(500).json({error:"Failed to fetch chat "});
    }
});


// deleting specific chat session - 3rd
router.delete("/thread/:threadId", async(req,res)=>{
    const {threadId} = req.params;
    try{
       const deletedThread = await Thread.findOneAndDelete({threadId});
       if(!deletedThread){
        res.status(404).json({error:"Thread not found to delete"});
       }
       res.status(200).json({success:"Thread deleted successfully"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Failed to delete thread "});
    }
});


// 4th - editing in thread (new chat )
router.post("/chat" , async(req,res)=>{

    const {threadId , message} = req.body;

    if(!threadId && !message){
        res.status(400).json({error:"missing required fields"});
    }

    try{
        const thread = await Thread.findOne({threadId});
        if(!thread){
            //create a new thread in DB
            thread = new Thread({
                threadId,
                title:message,
                messages:[{role:"user",content:message}]
            });
        }
        else{ // thread already in DB just update it i.e. add new message and response
            thread.messages.push({role:"user",content:message});
        }

        const assistantReply =await getOpenAIAPIResponse(message);
        thread.message.push({role:"assistant", content:assistantReply});
        thread.updatedAt = new Date();
        await thread.save();
        res.json({reply:assistantReply});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Unable to updated Thread "});
    }
});



export default router;