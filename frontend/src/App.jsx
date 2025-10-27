
import './App.css'
import Sidebar from "./Sidebar.jsx";
import Chat from "./Chat.jsx";
import ChatWindow from "./ChatWindow.jsx";
import {MyContext} from "./MyContext.jsx";

function App() {
 
  const providerValues={}; // passing value

  return (
    <div className='app'>
      <MyContext.Provider value={providerValues}>
          <Sidebar></Sidebar>
          <ChatWindow></ChatWindow>
        </MyContext.Provider>
    </div>
  )
}

export default App
