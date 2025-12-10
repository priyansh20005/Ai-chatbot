// import "./Chat.css";
// import {useContext , useState} from "react";
// import {MyContext} from "./MyContext";

// import ReactMarkdown from "react-markdown";
// import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github-dark.css";


// export default function Chat(){
//     const {newChat ,prevChats } =useContext(MyContext);
//     const {latestReply , setLatestReply} = useState(null);

//     return (
//         <>
//             {newChat &&<h1>Where should we start from? </h1>}
//             <div className="chats">
//                     {
//                         prevChats?.map((chat,idx)=>
//                             <div className={chat.role==="user"?"userDiv":"gptDiv"}key ={idx} >
//                                 {
//                                     Chat.role==="user"? <p className="userMessage">{chat.content}</p>
//                                                         // : <p className="gptMessage">{chat.content}</p>
//                                                             : <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{chat.content}</ReactMarkdown>
//                                 }
//                             </div>
//                         )
//                     }


//                 {/* <div className="userDiv">
//                     <p className="userMessage">
//                        hi user message
//                     </p>
//                 </div>
//                 <div className="gptDiv">
//                     <p className="gptMessage">
//                        hi gpt message
//                     </p>
//                 </div> */}
//             </div>
        
//         </>
//     )
// }


///////////////////////////////////////////////
import "./Chat.css";
import { useContext } from "react";
import { MyContext } from "./MyContext";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { FaUser, FaUserMd, FaStethoscope, FaHeartbeat, FaShieldVirus, FaExclamationTriangle } from "react-icons/fa";

export default function Chat() {
    const { newChat, prevChats } = useContext(MyContext);

    // Function to detect health-related content for appropriate icons
    const getHealthIcon = (content) => {
        const contentLower = content.toLowerCase();
        
        if (contentLower.includes('vaccine') || contentLower.includes('immunization') || contentLower.includes('shot')) {
            return <FaShieldVirus className="message-icon vaccine" />;
        }
        if (contentLower.includes('symptom') || contentLower.includes('pain') || contentLower.includes('fever')) {
            return <FaStethoscope className="message-icon symptom" />;
        }
        if (contentLower.includes('mental') || contentLower.includes('stress') || contentLower.includes('anxiety')) {
            return <FaHeartbeat className="message-icon mental" />;
        }
        if (contentLower.includes('emergency') || contentLower.includes('urgent') || contentLower.includes('911')) {
            return <FaExclamationTriangle className="message-icon emergency" />;
        }
        return <FaUserMd className="message-icon general" />;
    };

    return (
        <div className="health-chat-messages">
            {newChat && prevChats.length === 0 ? (
                <div className="health-starter-message">
                    <div className="welcome-card">
                        <div className="starter-avatar">
                            <FaUserMd className="starter-icon" />
                        </div>
                        <div className="starter-content">
                            <h2>Welcome to HealthGuard AI</h2>
                            <p>I'm here to provide reliable public health information. You can ask me about:</p>
                            <div className="welcome-features">
                                <div className="feature">
                                    <span className="feature-icon">🩺</span>
                                    <span className="feature-text">General health information</span>
                                </div>
                                <div className="feature">
                                    <span className="feature-icon">💉</span>
                                    <span className="feature-text">Vaccination guidance</span>
                                </div>
                                <div className="feature">
                                    <span className="feature-icon">🧠</span>
                                    <span className="feature-text">Mental wellness tips</span>
                                </div>
                                <div className="feature">
                                    <span className="feature-icon">🏥</span>
                                    <span className="feature-text">Preventive care advice</span>
                                </div>
                            </div>
                            <p className="disclaimer-note">
                                <FaExclamationTriangle /> <strong>Important:</strong> This is for informational purposes only. 
                                Always consult a healthcare professional for medical advice.
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="messages-container">
                    {prevChats?.map((chat, idx) => (
                        <div 
                            className={`message-wrapper ${chat.role === "user" ? "user-message-wrapper" : "assistant-message-wrapper"}`} 
                            key={idx}
                        >
                            <div className={`message-bubble ${chat.role === "user" ? "user-bubble" : "assistant-bubble"}`}>
                                {/* Message Header with Avatar and Timestamp */}
                                <div className="message-header">
                                    <div className="message-avatar">
                                        {chat.role === "user" ? (
                                            <FaUser className="avatar-icon user-avatar" />
                                        ) : (
                                            getHealthIcon(chat.content)
                                        )}
                                    </div>
                                    <div className="message-meta">
                                        <span className="message-sender">
                                            {chat.role === "user" ? "You" : "Health Assistant"}
                                        </span>
                                        {chat.timestamp && (
                                            <span className="message-timestamp">{chat.timestamp}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Message Content */}
                                <div className="message-content">
                                    {chat.role === "user" ? (
                                        <p className="plain-message">{chat.content}</p>
                                    ) : (
                                        <div className="health-response">
                                            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                                                {chat.content}
                                            </ReactMarkdown>
                                            {/* Health-specific formatting for lists */}
                                            {chat.content.includes('•') || chat.content.includes('-') ? (
                                                <div className="health-tips">
                                                    <div className="tips-header">
                                                        <FaStethoscope /> Key Points:
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>
                                    )}
                                </div>

                                {/* Health-specific message footer */}
                                {chat.role === "assistant" && (
                                    <div className="message-footer">
                                        <div className="footer-tags">
                                            {chat.content.toLowerCase().includes('emergency') && (
                                                <span className="tag emergency-tag">
                                                    <FaExclamationTriangle /> Emergency Info
                                                </span>
                                            )}
                                            {chat.content.toLowerCase().includes('prevent') && (
                                                <span className="tag prevention-tag">
                                                    🛡️ Prevention
                                                </span>
                                            )}
                                            {chat.content.toLowerCase().includes('symptom') && (
                                                <span className="tag symptom-tag">
                                                    <FaStethoscope /> Symptoms
                                                </span>
                                            )}
                                        </div>
                                        <div className="source-note">
                                            <small>Information based on public health guidelines</small>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}