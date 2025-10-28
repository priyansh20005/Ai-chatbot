import "./Chat.css";
import {useContext , useState} from "react";
import {MyContext} from "./MyContext";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";


export default function Chat(){
    const {newChat ,prevChats } =useContext(MyContext);
    const {latestReply , setLatestReply} = useState(null);

    return (
        <>
            {newChat &&<h1>Where should we start from? </h1>}
            <div className="chats">
                    {
                        prevChats?.map((chat,idx)=>
                            <div className={chat.role==="user"?"userDiv":"gptDiv"}key ={idx} >
                                {
                                    Chat.role==="user"? <p className="userMessage">{chat.content}</p>
                                                        // : <p className="gptMessage">{chat.content}</p>
                                                            : <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{chat.content}</ReactMarkdown>
                                }
                            </div>
                        )
                    }


                {/* <div className="userDiv">
                    <p className="userMessage">
                       hi user message
                    </p>
                </div>
                <div className="gptDiv">
                    <p className="gptMessage">
                       hi gpt message
                    </p>
                </div> */}
            </div>
        
        </>
    )
}