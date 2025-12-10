// import "./ChatWindow.css";
// import Chat from "./Chat.jsx";
// import {MyContext} from "./MyContext.jsx";
// import {useContext, useState , useEffect} from "react";
// import {ScaleLoader} from "react-spinners";

// const API_BASE = import.meta.env.VITE_API_URL;

// function ChatWindow(){
//     const {prompt , setPrompt, reply ,setReply , currThreadId , prevChats , setPrevChats , setNewChat} = useContext(MyContext);
//     const [loading , setLoading] = useState(false);
//     const [isOpen , setIsOpen] = useState(false);

//     const getReply = async()=>{
//         console.log(prompt , currThreadId);
//         setLoading(true);
//         setNewChat(false);
//         const option={
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify({
//                 message:prompt,
//                 threadId: currThreadId
//             })
//         };
//         try{
//             const response = await fetch(`${API_BASE}/chat`, option);
//             const data = await response.json();
            
//             console.log("Server response  : " ,data);
//             setReply(data.reply);
//         }catch(err){
//             console.log(err);
//         }
//         setLoading(false);
//     }

//     //append new chat to prev chat
//     useEffect(()=>{
//         if(prompt&& reply){
//             setPrevChats(prevChats=>(
//                 [...prevChats ,{
//                     role:"user",
//                     content:prompt
//                 },{
//                     role:"assistant",
//                     content:reply
//                 }]
//             ))
//         }

//         setPrompt("");
//         // setReply(null);
//     } , [reply]);

//     const handleProfileClick=()=>{
//         setIsOpen(!isOpen);
//     }


//     return(
//        <div className="chatWindow">
//         <div className="navbar">
//             <span>AI-chatbot  <i className="fa-solid fa-arrow-down"></i></span>
//             <div className="userIconDiv" onClick={handleProfileClick}>
//                <span className="userIcon">
//                  <i className="fa-solid fa-user"></i>
//                </span>
//             </div>
//         </div>
//         {
//             isOpen && 
//             <div className="dropDown">
//                 <div className="dropDownItem">Upgrade plan <i class="fa-solid fa-cloud-arrow-up"></i></div>
//                 <div className="dropDownItem">Settings <i class="fa-solid fa-gear"></i></div>
//                 <div className="dropDownItem">Log Out <i class="fa-solid fa-right-from-bracket"></i></div>
                
//             </div>
//         }
        
//         <Chat></Chat>
//         <ScaleLoader color='#fff' loading={loading}
//         ></ScaleLoader>

//         <div className="chatInput">
//                 <div className="inputBox">
//                     <input placeholder="Ask anything" 
//                         value={prompt}
//                         onChange={(e)=>setPrompt(e.target.value)}
//                         onKeyDown={(e)=>e.key==='Enter'? getReply():''}
//                         >
//                     </input>
//                     <div id="submit" onClick={getReply}>
//                         <i className="fa-solid fa-paper-plane"></i>
//                     </div>
//                 </div>
//                 <p className="info">
//                         Chatbot can make mistakes. Cross-Check imp info from your side.
//                 </p>
//         </div>
//        </div>
//     )
// }

// export default ChatWindow;

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// import "./ChatWindow.css";
// import Chat from "./Chat.jsx";
// import { MyContext } from "./MyContext.jsx";
// import { useContext, useState, useEffect, useRef } from "react";
// import { ScaleLoader } from "react-spinners";
// import { 
//   FaUserMd, 
//   FaStethoscope, 
//   FaExclamationTriangle, 
//   FaPaperPlane, 
//   FaUserCircle, 
//   FaCog, 
//   FaSignOutAlt, 
//   FaShieldAlt, 
//   FaHospital,
//   FaHeartbeat,
//   FaShieldVirus
// } from "react-icons/fa";

// const API_BASE = import.meta.env.VITE_API_URL;

// function ChatWindow() {
//     const { 
//         prompt, 
//         setPrompt, 
//         reply, 
//         setReply, 
//         currThreadId, 
//         prevChats, 
//         setPrevChats, 
//         setNewChat 
//     } = useContext(MyContext);
    
//     const [loading, setLoading] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);
//     const chatContainerRef = useRef(null);

//     const getReply = async () => {
//         if (!prompt.trim()) return;
        
//         console.log("Sending prompt:", prompt, "Thread ID:", currThreadId);
//         setLoading(true);
//         setNewChat(false);
        
//         // Store user message immediately for better UX
//         const userTimestamp = new Date().toLocaleTimeString([], { 
//             hour: '2-digit', 
//             minute: '2-digit' 
//         });
        
//         // Add user message immediately to show in chat
//         const userMessage = {
//             role: "user",
//             content: prompt,
//             timestamp: userTimestamp
//         };
        
//         setPrevChats(prevChats => [...prevChats, userMessage]);
        
//         const options = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 message: prompt,
//                 threadId: currThreadId
//             })
//         };
        
//         try {
//             const response = await fetch(`${API_BASE}/chat`, options);
//             const data = await response.json();
//             console.log("Server response: ", data);
            
//             const assistantTimestamp = new Date().toLocaleTimeString([], { 
//                 hour: '2-digit', 
//                 minute: '2-digit' 
//             });
            
//             setReply(data.reply);
            
//             // Update the chats context with the assistant's reply
//             setTimeout(() => {
//                 const assistantMessage = {
//                     role: "assistant",
//                     content: data.reply,
//                     timestamp: assistantTimestamp
//                 };
                
//                 setPrevChats(prevChats => {
//                     // Check if we already added this message to avoid duplicates
//                     if (prevChats.length > 0 && prevChats[prevChats.length - 1].role === "user") {
//                         return [...prevChats, assistantMessage];
//                     }
//                     return prevChats;
//                 });
//             }, 100);
            
//         } catch (err) {
//             console.error("Error fetching response:", err);
            
//             const errorTimestamp = new Date().toLocaleTimeString([], { 
//                 hour: '2-digit', 
//                 minute: '2-digit' 
//             });
            
//             const errorMessage = "I apologize, but I'm having trouble accessing health information right now. Please try again or consult a healthcare provider for urgent matters.";
//             setReply(errorMessage);
            
//             const errorAssistantMessage = {
//                 role: "assistant",
//                 content: errorMessage,
//                 timestamp: errorTimestamp
//             };
            
//             setPrevChats(prevChats => [...prevChats, errorAssistantMessage]);
//         }
        
//         // Clear the input
//         setPrompt("");
//         setLoading(false);
//     };

//     // Auto-scroll to bottom when new messages arrive
//     useEffect(() => {
//         if (chatContainerRef.current) {
//             const scrollToBottom = () => {
//                 chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//             };
            
//             // Small delay to ensure DOM is updated
//             setTimeout(scrollToBottom, 100);
//         }
//     }, [prevChats, loading]);

//     const handleProfileClick = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleQuickAction = (action) => {
//         const quickPrompts = {
//             symptoms: "What are common symptoms of flu and when should I see a doctor?",
//             vaccine: "Tell me about recommended vaccinations for adults",
//             mental: "What are signs of stress and healthy coping strategies?",
//             emergency: "What constitutes a medical emergency and what should I do?"
//         };
        
//         if (quickPrompts[action]) {
//             setPrompt(quickPrompts[action]);
//         }
//     };

//     const handleKeyDown = (e) => {
//         if (e.key === 'Enter' && !e.shiftKey) {
//             e.preventDefault();
//             if (!loading && prompt.trim()) {
//                 getReply();
//             }
//         }
//     };

//     // Close dropdown when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (isOpen && !event.target.closest('.user-profile')) {
//                 setIsOpen(false);
//             }
//         };
        
//         document.addEventListener('click', handleClickOutside);
//         return () => document.removeEventListener('click', handleClickOutside);
//     }, [isOpen]);

//     return (
//         <div className="chatWindow">
//             {/* Health Professional Header */}
//             <div className="health-header-bar">
//                 <div className="health-professional-info">
//                     <div className="doctor-avatar">
//                         <FaUserMd className="doctor-icon" />
//                     </div>
//                     <div className="doctor-details">
//                         <h3>Dr. Health AI</h3>
//                         <p className="specialty">Public Health Assistant</p>
//                         <div className="status-indicator">
//                             <span className="status-dot"></span>
//                             <span className="status-text">Online & Ready to Help</span>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="header-quick-actions">
//                     <button 
//                         className="quick-action-btn" 
//                         onClick={() => handleQuickAction('emergency')}
//                     >
//                         <FaExclamationTriangle /> Emergency Info
//                     </button>
//                     <button 
//                         className="quick-action-btn" 
//                         onClick={() => handleQuickAction('symptoms')}
//                     >
//                         <FaStethoscope /> Symptom Check
//                     </button>
                    
//                     <div className="user-profile">
//                         <FaUserCircle 
//                             className="profile-icon" 
//                             onClick={handleProfileClick}
//                             title="User Settings"
//                         />
//                         {isOpen && (
//                             <div className="health-dropdown">
//                                 <div className="dropdown-item">
//                                     <FaShieldAlt /> Privacy Settings
//                                 </div>
//                                 <div className="dropdown-item">
//                                     <FaCog /> Health Preferences
//                                 </div>
//                                 <div className="dropdown-item">
//                                     <FaHospital /> Find Local Clinic
//                                 </div>
//                                 <div className="dropdown-divider"></div>
//                                 <div className="dropdown-item logout">
//                                     <FaSignOutAlt /> Sign Out
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Health Chat Container */}
//             <div className="health-chat-container" ref={chatContainerRef}>
//                 {/* Chat Messages Component */}
//                 <Chat />
                
//                 {/* Loading Indicator */}
//                 {loading && (
//                     <div className="health-loading">
//                         <div className="loading-dots">
//                             <div className="loading-dot"></div>
//                             <div className="loading-dot"></div>
//                             <div className="loading-dot"></div>
//                         </div>
//                         <p className="loading-text">Consulting health resources...</p>
//                     </div>
//                 )}
//             </div>

//             {/* Health-Focused Input Area */}
//             <div className="health-input-area">
//                 <div className="quick-health-actions">
//                     <button 
//                         className="health-quick-btn" 
//                         onClick={() => handleQuickAction('symptoms')}
//                         disabled={loading}
//                     >
//                         <FaStethoscope /> Symptoms Check
//                     </button>
//                     <button 
//                         className="health-quick-btn" 
//                         onClick={() => handleQuickAction('vaccine')}
//                         disabled={loading}
//                     >
//                         <FaShieldVirus /> Vaccine Info
//                     </button>
//                     <button 
//                         className="health-quick-btn" 
//                         onClick={() => handleQuickAction('mental')}
//                         disabled={loading}
//                     >
//                         <FaHeartbeat /> Mental Health
//                     </button>
//                 </div>

//                 <div className="health-input-wrapper">
//                     <input
//                         type="text"
//                         placeholder="Ask about symptoms, prevention, treatments, or general health..."
//                         value={prompt}
//                         onChange={(e) => setPrompt(e.target.value)}
//                         onKeyDown={handleKeyDown}
//                         className="health-input"
//                         disabled={loading}
//                     />
//                     <button 
//                         className="health-submit-btn" 
//                         onClick={getReply}
//                         disabled={loading || !prompt.trim()}
//                         title={prompt.trim() ? "Send message" : "Type a message first"}
//                     >
//                         <FaPaperPlane className="submit-icon" />
//                     </button>
//                 </div>

//                 <div className="health-input-footer">
//                     <div className="privacy-notice">
//                         <FaShieldAlt className="privacy-icon" />
//                         <span>Your health queries are private and encrypted</span>
//                     </div>
//                     <div className="medical-disclaimer">
//                         <FaExclamationTriangle className="warning-icon" />
//                         <span>For emergencies, call local emergency services immediately</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ChatWindow;


//////////////////////////////////////////////////////////////////////////////////
import "./ChatWindow.css";
import Chat from "./Chat.jsx";
import { MyContext } from "./MyContext.jsx";
import { useContext, useState, useEffect, useRef } from "react";
import { 
  FaPaperPlane,
  FaStethoscope,
  FaShieldVirus,
  FaHeartbeat
} from "react-icons/fa";

const API_BASE = import.meta.env.VITE_API_URL;

function ChatWindow() {
    const { 
        prompt, 
        setPrompt, 
        reply, 
        setReply, 
        currThreadId, 
        prevChats, 
        setPrevChats, 
        setNewChat 
    } = useContext(MyContext);
    
    const [loading, setLoading] = useState(false);
    const chatContainerRef = useRef(null);

    const getReply = async () => {
        if (!prompt.trim()) return;
        
        console.log("Sending prompt:", prompt, "Thread ID:", currThreadId);
        setLoading(true);
        setNewChat(false);
        
        const userTimestamp = new Date().toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        const userMessage = {
            role: "user",
            content: prompt,
            timestamp: userTimestamp
        };
        
        setPrevChats(prevChats => [...prevChats, userMessage]);
        
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: prompt,
                threadId: currThreadId
            })
        };
        
        try {
            const response = await fetch(`${API_BASE}/chat`, options);
            const data = await response.json();
            
            const assistantTimestamp = new Date().toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            
            setReply(data.reply);
            
            setTimeout(() => {
                const assistantMessage = {
                    role: "assistant",
                    content: data.reply,
                    timestamp: assistantTimestamp
                };
                
                setPrevChats(prevChats => {
                    if (prevChats.length > 0 && prevChats[prevChats.length - 1].role === "user") {
                        return [...prevChats, assistantMessage];
                    }
                    return prevChats;
                });
            }, 100);
            
        } catch (err) {
            console.error("Error fetching response:", err);
            
            const errorTimestamp = new Date().toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            
            const errorMessage = "I apologize, but I'm having trouble accessing health information right now. Please try again or consult a healthcare provider for urgent matters.";
            setReply(errorMessage);
            
            const errorAssistantMessage = {
                role: "assistant",
                content: errorMessage,
                timestamp: errorTimestamp
            };
            
            setPrevChats(prevChats => [...prevChats, errorAssistantMessage]);
        }
        
        setPrompt("");
        setLoading(false);
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            const scrollToBottom = () => {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            };
            setTimeout(scrollToBottom, 100);
        }
    }, [prevChats, loading]);

    const handleQuickAction = (action) => {
        const quickPrompts = {
            symptoms: "What are common symptoms of flu and when should I see a doctor?",
            vaccine: "Tell me about recommended vaccinations for adults",
            mental: "What are signs of stress and healthy coping strategies?"
        };
        
        if (quickPrompts[action]) {
            setPrompt(quickPrompts[action]);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!loading && prompt.trim()) {
                getReply();
            }
        }
    };

    return (
        <div className="chatWindow">
            {/* SCROLLABLE CHAT AREA */}
            <div className="chat-main-area">
                <div className="health-chat-container" ref={chatContainerRef}>
                    <Chat />
                </div>
            </div>

            {/* LOADING INDICATOR */}
            {loading && (
                <div className="health-loading">
                    <div className="loading-dots">
                        <div className="loading-dot"></div>
                        <div className="loading-dot"></div>
                        <div className="loading-dot"></div>
                    </div>
                    <p className="loading-text">Consulting health resources...</p>
                </div>
            )}

            {/* FIXED INPUT AREA - KEEP QUICK ACTIONS, REMOVE FOOTER */}
            <div className="health-input-area">
                <div className="quick-health-actions">
                    <button 
                        className="health-quick-btn" 
                        onClick={() => handleQuickAction('symptoms')}
                        disabled={loading}
                    >
                        <FaStethoscope /> Symptoms Check
                    </button>
                    <button 
                        className="health-quick-btn" 
                        onClick={() => handleQuickAction('vaccine')}
                        disabled={loading}
                    >
                        <FaShieldVirus /> Vaccine Info
                    </button>
                    <button 
                        className="health-quick-btn" 
                        onClick={() => handleQuickAction('mental')}
                        disabled={loading}
                    >
                        <FaHeartbeat /> Mental Health
                    </button>
                </div>

                <div className="health-input-wrapper">
                    <input
                        type="text"
                        placeholder="Ask about symptoms, prevention, treatments, or general health..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="health-input"
                        disabled={loading}
                    />
                    <button 
                        className="health-submit-btn" 
                        onClick={getReply}
                        disabled={loading || !prompt.trim()}
                    >
                        <FaPaperPlane className="submit-icon" />
                    </button>
                </div>
                {/* REMOVED: health-input-footer with privacy/disclaimer text */}
            </div>
        </div>
    );
}

export default ChatWindow;