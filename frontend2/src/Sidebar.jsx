// import "./Sidebar.css";
// import {useContext , useEffect} from "react";
// import {MyContext}from "./MyContext.jsx";
// import {v1 as uuidv1} from "uuid";

// const API_BASE = import.meta.env.VITE_API_URL;

// function Sidebar(){
    
//     const {allThreads ,setAllThreads,currThreadId ,setNewChat, setPrompt,setReply , setCurrThreadId , setPrevChats} = useContext(MyContext);
//     const getAllThreads = async()=>{
//         try{
//             const response = await fetch(`${API_BASE}/thread`);
//             const res = await response.json();
//             const filteredData = res.map(thread=>({threadId:thread.threadId ,title:thread.title}));
//             setAllThreads(filteredData);
//         }catch(err){
//             console.log(err);
//         }
//     };

//     useEffect(()=>{
//         getAllThreads();
//     }, [currThreadId])

//     const createNewChat=()=>{
//         setNewChat(true);
//         setPrompt("");
//         setReply(null);
//         setCurrThreadId(uuidv1());
//         setPrevChats([]);
//     }

//     const changeThread= async(newThreadId)=>{
//         setCurrThreadId(newThreadId);
//         try{
//             const response = await fetch(`${API_BASE}/thread/${newThreadId}`);
//             const res =await response.json();
//             // console.log(res);
//             setPrevChats(res);
//             setNewChat(false);

//         }catch(err){
//             console.log(err);
//         }
//     }

//     const deleteThread = async(threadId)=>{
//         try{
//             const response = await fetch(`${API_BASE}/thread/${threadId}` , {method:"DELETE"});
//             const res = await response.json();
//             console.log(res);

//             setAllThreads(prev=>prev.filter(thread=>thread.threadId !==threadId));

//             if(threadId===currThreadId)
//                     createNewChat();

//         }catch(err){
//             console.log(err);
//         }
//     }

//     return (
//         <section className="sidebar">
//              {/* new chat button */}
//                 <button onClick={createNewChat}>
//                     <img src="src/assets/blacklogo.png" alt="gpt logo" className="logo"></img> New Chat
//                     <span><i className="fa-solid fa-pen-to-square"></i></span>
//                 </button>


//              {/* history */}
//                 <ul className="history">
//                         {
//                             allThreads?.map((thread,idx)=>(
//                                 <li key={idx}
//                                 onClick={()=>changeThread(thread.threadId)}
//                                 className={thread.threadId===currThreadId? "highlighted":" "}
//                                 > 
//                                 {thread.title}
//                                 <i className="fa-solid fa-trash"
//                                     onClick={(e)=>{
//                                         e.stopPropagation();
//                                         deleteThread(thread.threadId);
//                                     }}
//                                 ></i>
//                                 </li>
//                             ))
//                         }
//                 </ul>


//              {/* sign */}
//                 <div className="sign">
//                     <p> By Priyansh koshti </p>
//                 </div>


//         </section>
//     )
// }

// export default Sidebar;

// /////////////////////////////////////////////////////////////////////
import "./Sidebar.css";
import { useContext, useEffect } from "react";
import { MyContext } from "./MyContext.jsx";
import { v1 as uuidv1 } from "uuid";
import {
  FaPlus,
  FaFileMedical,
  FaTrash,
  FaHeartbeat,
  FaShieldVirus,
  FaBrain,
  FaAppleAlt,
  FaRunning,
  FaFirstAid,
  FaHistory,
  FaStar,
  FaUserMd,
  FaBookMedical
} from "react-icons/fa";

const API_BASE = import.meta.env.VITE_API_URL;

function Sidebar() {
  const {
    allThreads,
    setAllThreads,
    currThreadId,
    setNewChat,
    setPrompt,
    setReply,
    setCurrThreadId,
    setPrevChats
  } = useContext(MyContext);

  const getAllThreads = async () => {
    try {
      const response = await fetch(`${API_BASE}/thread`);
      const res = await response.json();
      const filteredData = res.map(thread => ({
        threadId: thread.threadId,
        title: thread.title
      }));
      setAllThreads(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllThreads();
  }, [currThreadId]);

  const createNewChat = () => {
    setNewChat(true);
    setPrompt("");
    setReply(null);
    setCurrThreadId(uuidv1());
    setPrevChats([]);
  };

  const changeThread = async (newThreadId) => {
    setCurrThreadId(newThreadId);
    try {
      const response = await fetch(`${API_BASE}/thread/${newThreadId}`);
      const res = await response.json();
      setPrevChats(res);
      setNewChat(false);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteThread = async (threadId) => {
    try {
      const response = await fetch(`${API_BASE}/thread/${threadId}`, {
        method: "DELETE"
      });
      const res = await response.json();
      console.log(res);

      setAllThreads(prev => prev.filter(thread => thread.threadId !== threadId));

      if (threadId === currThreadId) createNewChat();
    } catch (err) {
      console.log(err);
    }
  };

  // Health Quick Topics - KEPT THIS
  const healthTopics = [
    { icon: <FaHeartbeat />, name: "Symptoms Check", query: "What are common symptoms I should watch for?" },
    { icon: <FaShieldVirus />, name: "Vaccine Info", query: "Tell me about recommended vaccinations" },
    { icon: <FaBrain />, name: "Mental Health", query: "How to maintain good mental wellness?" },
    { icon: <FaAppleAlt />, name: "Nutrition", query: "What's a balanced diet for good health?" },
    { icon: <FaRunning />, name: "Exercise", query: "Recommended physical activities for adults" },
    { icon: <FaFirstAid />, name: "First Aid", query: "Basic first aid procedures I should know" }
  ];

  const handleQuickTopic = (query) => {
    setPrompt(query);
  };

  return (
    <section className="sidebar">
      {/* New Consultation Button */}
      <div className="new-consultation-section">
        <button className="new-consultation-btn" onClick={createNewChat}>
          <FaPlus className="btn-icon" />
          <span className="btn-text">Start New Consultation</span>
        </button>
      </div>

      {/* Quick Health Topics - KEPT THIS */}
      <div className="quick-health-topics">
        <h3 className="section-title">
          <FaFileMedical className="section-icon" /> Quick Health Topics
        </h3>
        <div className="topics-grid">
          {healthTopics.map((topic, idx) => (
            <button
              key={idx}
              className="health-topic-btn"
              onClick={() => handleQuickTopic(topic.query)}
              title={`Ask about ${topic.name.toLowerCase()}`}
            >
              <span className="topic-icon">{topic.icon}</span>
              <span className="topic-name">{topic.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Consultation History */}
      <div className="consultation-history">
        <div className="history-header">
          <h3 className="section-title">
            <FaHistory className="section-icon" /> Consultation History
          </h3>
          <span className="history-count">{allThreads?.length || 0}</span>
        </div>

        {allThreads?.length === 0 ? (
          <div className="empty-history">
            <FaBookMedical className="empty-icon" />
            <p>No previous consultations</p>
            <small>Start a new conversation above</small>
          </div>
        ) : (
          <ul className="history-list">
            {allThreads?.map((thread, idx) => (
              <li
                key={idx}
                onClick={() => changeThread(thread.threadId)}
                className={`history-item ${thread.threadId === currThreadId ? "active-consultation" : ""}`}
              >
                <div className="consultation-info">
                  <FaFileMedical className="consultation-icon" />
                  <span className="consultation-title">
                    {thread.title.length > 30
                      ? `${thread.title.substring(0, 30)}...`
                      : thread.title}
                  </span>
                </div>
                <button
                  className="delete-consultation"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteThread(thread.threadId);
                  }}
                  title="Delete consultation"
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer - No Resources Section */}
      <div className="sidebar-footer">
        <div className="trust-badges">
          <div className="trust-badge">
            <FaStar className="badge-icon" />
            <span>Secure Chat</span>
          </div>
          <div className="trust-badge">
            <FaStar className="badge-icon" />
            <span>Medical Info</span>
          </div>
        </div>
        <div className="developer-credit">
          <FaUserMd className="developer-icon" />
          <p>
            <strong>Health Assistant</strong>
            <br />
            <small>Your health companion</small>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;