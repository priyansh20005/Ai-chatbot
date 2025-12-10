
// import './App.css'
// import Sidebar from "./Sidebar.jsx";
// import Chat from "./Chat.jsx";
// import ChatWindow from "./ChatWindow.jsx";
// import {MyContext} from "./MyContext.jsx";
// import {useState} from "react";
// import {v1 as uuidv1} from "uuid";

// function App() {
//   const [prompt,setPrompt] =useState("");
//   const [reply,setReply] =useState(null);
//   const [currThreadId ,setCurrThreadId] = useState(uuidv1());;
//   const [prevChats , setPrevChats] = useState([]);
//   const [newChat, setNewChat] =useState(true);
//   const [allThreads,setAllThreads] = useState([]);

//   const providerValues={
//     prompt,setPrompt,
//     reply,setReply ,
//     currThreadId, setCurrThreadId,
//     prevChats , setPrevChats,
//     newChat, setNewChat,
//     allThreads,setAllThreads,
//   }; // passing value

//   return (
//     <div className='app'>
//       <MyContext.Provider value={providerValues}>
//           <Sidebar></Sidebar>
//           <ChatWindow></ChatWindow>
//           {/* <div className="sidebar">
//           <Sidebar />
//         </div>
//         <div className="chat-window">
//           <ChatWindow />
//         </div> */}
//         </MyContext.Provider>
//     </div>
//   )
// }

// export default App


// // //////////////////////////////////////////////////////////////////////////////////////////////


// import './App.css';
// import Sidebar from "./Sidebar.jsx";
// import ChatWindow from "./ChatWindow.jsx";
// import { MyContext } from "./MyContext.jsx";
// import { useState } from "react";
// import { v1 as uuidv1 } from "uuid";

// // Health icons import (using react-icons)
// import { FaHeartbeat, FaShieldVirus, FaUserMd } from 'react-icons/fa';

// function App() {
//   const [prompt, setPrompt] = useState("");
//   const [reply, setReply] = useState(null);
//   const [currThreadId, setCurrThreadId] = useState(uuidv1());
//   const [prevChats, setPrevChats] = useState([]);
//   const [newChat, setNewChat] = useState(true);
//   const [allThreads, setAllThreads] = useState([]);

//   const providerValues = {
//     prompt, setPrompt,
//     reply, setReply,
//     currThreadId, setCurrThreadId,
//     prevChats, setPrevChats,
//     newChat, setNewChat,
//     allThreads, setAllThreads,
//   };

//   // Health topics for quick access
//   const healthTopics = [
//     { id: 1, name: "Vaccination", icon: <FaShieldVirus />, color: "#2A9D8F" },
//     { id: 2, name: "Mental Health", icon: <FaHeartbeat />, color: "#457B9D" },
//     { id: 3, name: "Nutrition", icon: "🥦", color: "#4CAF50" },
//     { id: 4, name: "Exercise", icon: "🏃", color: "#FF9800" },
//     { id: 5, name: "Prevention", icon: <FaUserMd />, color: "#9C27B0" }
//   ];

//   return (
//     <MyContext.Provider value={providerValues}>
//       <div className='app'>
//         {/* Health-Themed Header */}
//         <header className="health-header">
//           <div className="header-content">
//             <div className="logo-container">
//               <div className="health-logo">
//                 <FaHeartbeat className="logo-icon" />
//                 <h1>HealthGuard <span className="logo-sub">AI</span></h1>
//               </div>
//               <p className="tagline">Your Trusted Public Health Companion</p>
//             </div>
            
//             <div className="header-actions">
//               <button className="emergency-btn">
//                 🚨 Emergency Contacts
//               </button>
//               <button className="resources-btn">
//                 📚 Health Resources
//               </button>
//             </div>
//           </div>
          
//           {/* Health Topics Quick Access */}
//           <div className="health-topics-bar">
//             {healthTopics.map(topic => (
//               <button 
//                 key={topic.id} 
//                 className="topic-chip"
//                 style={{ borderLeft: `4px solid ${topic.color}` }}
//               >
//                 <span className="topic-icon">{topic.icon}</span>
//                 <span className="topic-name">{topic.name}</span>
//               </button>
//             ))}
//           </div>
//         </header>

//         {/* Emergency Alert Banner */}
//         <div className="emergency-alert">
//           <div className="alert-content">
//             <span className="alert-icon">⚠️</span>
//             <p><strong>Important:</strong> This chatbot provides general health information only. For medical emergencies, call your local emergency number immediately.</p>
//           </div>
//           <button className="alert-close">×</button>
//         </div>

//         {/* Main App Container */}
//         <div className="app-container">
//           <Sidebar />
//           <main className="main-content">
//             <ChatWindow />
//           </main>
//         </div>

//         {/* Health Footer */}
//         <footer className="health-footer">
//           <div className="footer-content">
//             <div className="footer-disclaimer">
//               <p>🔒 <strong>Privacy Protected:</strong> Your conversations are anonymous and secure.</p>
//               <p>🩺 <strong>Disclaimer:</strong> Not a substitute for professional medical advice.</p>
//             </div>
//             <div className="footer-partners">
//               <span className="partner-tag">WHO Guidelines</span>
//               <span className="partner-tag">CDC Compliant</span>
//               <span className="partner-tag">Evidence-Based</span>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </MyContext.Provider>
//   );
// }

// export default App;

////////////////////////////////////////////////////////////////////////////////////////////
// import './App.css';
// import Sidebar from "./Sidebar.jsx";
// import ChatWindow from "./ChatWindow.jsx";
// import { MyContext } from "./MyContext.jsx";
// import { useState } from "react";
// import { v1 as uuidv1 } from "uuid";
// import { FaExclamationTriangle, FaShieldAlt, FaUserMd } from 'react-icons/fa';

// function App() {
//   const [prompt, setPrompt] = useState("");
//   const [reply, setReply] = useState(null);
//   const [currThreadId, setCurrThreadId] = useState(uuidv1());
//   const [prevChats, setPrevChats] = useState([]);
//   const [newChat, setNewChat] = useState(true);
//   const [allThreads, setAllThreads] = useState([]);

//   const providerValues = {
//     prompt, setPrompt,
//     reply, setReply,
//     currThreadId, setCurrThreadId,
//     prevChats, setPrevChats,
//     newChat, setNewChat,
//     allThreads, setAllThreads,
//   };

//   return (
//     <MyContext.Provider value={providerValues}>
//       <div className='app'>
//         {/* Emergency Alert Banner */}
//         <div className="emergency-alert">
//           <div className="alert-content">
//             <FaExclamationTriangle className="alert-icon" />
//             <p><strong>Important:</strong> For medical emergencies, call your local emergency number immediately.</p>
//           </div>
//           <button className="alert-close">×</button>
//         </div>

//         {/* Main Application Layout */}
//         <div className="app-container">
//           <Sidebar />
//           <div className="main-content">
//             <ChatWindow />
//           </div>
//         </div>

//         {/* Health Footer */}
//         <footer className="health-footer">
//           <div className="footer-content">
//             <div className="footer-disclaimer">
//               <p>
//                 <FaShieldAlt /> <strong>Privacy Protected:</strong> Conversations are secure
//               </p>
//               <p>
//                 <FaUserMd /> <strong>Disclaimer:</strong> Not medical advice
//               </p>
//             </div>
//             <div className="footer-partners">
//               <span className="partner-tag">WHO Guidelines</span>
//               <span className="partner-tag">Evidence-Based</span>
//               <span className="partner-tag">Secure & Private</span>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </MyContext.Provider>
//   );
// }

// export default App;
///////////////////////////////////////////////////////////////////////////////////////////

import './App.css';
import './Footer.css'; // Add Footer CSS import
import Sidebar from "./Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import Footer from "./Footer.jsx"; // Add Footer import
import { MyContext } from "./MyContext.jsx";
import { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { FaHeartbeat } from 'react-icons/fa';

function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);
  const [currThreadId, setCurrThreadId] = useState(uuidv1());
  const [prevChats, setPrevChats] = useState([]);
  const [newChat, setNewChat] = useState(true);
  const [allThreads, setAllThreads] = useState([]);

  const providerValues = {
    prompt, setPrompt,
    reply, setReply,
    currThreadId, setCurrThreadId,
    prevChats, setPrevChats,
    newChat, setNewChat,
    allThreads, setAllThreads,
  };

  return (
    <MyContext.Provider value={providerValues}>
      <div className='app'>
        {/* Header */}
        <header className="minimal-header">
          <div className="header-content">
            <div className="logo-title">
              <FaHeartbeat className="header-logo" />
              <h1>HealthGuard AI</h1>
              <span className="header-subtitle">Public Health Assistant</span>
            </div>
          </div>
        </header>

        {/* Main Content Area - Scrollable */}
        <div className="main-scrollable-area">
          <div className="app-container">
            <Sidebar />
            <div className="main-content">
              <ChatWindow />
            </div>
          </div>
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;