import "./ChatWindow.css";
import Chat from "./Chat.jsx";
import {MyContext} from "./MyContext.jsx";
import {useContext, useState , useEffect} from "react";
import {ScaleLoader} from "react-spinners";

function ChatWindow(){
    const {prompt , setPrompt, reply ,setReply , currThreadId , prevChats , setPrevChats , setNewChat} = useContext(MyContext);
    const [loading , setLoading] = useState(false);
    const [isOpen , setIsOpen] = useState(false);

    const getReply = async()=>{
        console.log(prompt , currThreadId);
        setLoading(true);
        setNewChat(false);
        const option={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                message:prompt,
                threadId: currThreadId
            })
        };
        try{
            const response = await fetch("http://localhost:8080/api/chat", option);
            const data = await response.json();
            
            console.log("Server response  : " ,data);
            setReply(data.reply);
        }catch(err){
            console.log(err);
        }
        setLoading(false);
    }

    //append new chat to prev chat
    useEffect(()=>{
        if(prompt&& reply){
            setPrevChats(prevChats=>(
                [...prevChats ,{
                    role:"user",
                    content:prompt
                },{
                    role:"assistant",
                    content:reply
                }]
            ))
        }

        setPrompt("");
        // setReply(null);
    } , [reply]);

    const handleProfileClick=()=>{
        setIsOpen(!isOpen);
    }


    return(
       <div className="chatWindow">
        <div className="navbar">
            <span>AI-chatbot  <i className="fa-solid fa-arrow-down"></i></span>
            <div className="userIconDiv" onClick={handleProfileClick}>
               <span className="userIcon">
                 <i className="fa-solid fa-user"></i>
               </span>
            </div>
        </div>
        {
            isOpen && 
            <div className="dropDown">
                <div className="dropDownItem">Upgrade plan <i class="fa-solid fa-cloud-arrow-up"></i></div>
                <div className="dropDownItem">Settings <i class="fa-solid fa-gear"></i></div>
                <div className="dropDownItem">Log Out <i class="fa-solid fa-right-from-bracket"></i></div>
                
            </div>
        }
        
        <Chat></Chat>
        <ScaleLoader color='#fff' loading={loading}
        ></ScaleLoader>

        <div className="chatInput">
                <div className="inputBox">
                    <input placeholder="Ask anything" 
                        value={prompt}
                        onChange={(e)=>setPrompt(e.target.value)}
                        onKeyDown={(e)=>e.key==='Enter'? getReply():''}
                        >
                    </input>
                    <div id="submit" onClick={getReply}>
                        <i className="fa-solid fa-paper-plane"></i>
                    </div>
                </div>
                <p className="info">
                        Chatbot can make mistakes. Cross-Check imp info from your side.
                </p>
        </div>
       </div>
    )
}

export default ChatWindow;