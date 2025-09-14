import { useState } from "react";
import ChatInput from "./Components/ChatInput";
import ChatMessages from "./Components/ChatMessages";
import "./App.css";


function App() {
  const [chatMessages, setChatMessages] = useState([]);
  /* const [chatMessages, setChatMessages] = React.useState([
          {
            message: "Hello Chatbot",
            sender: "user",
            id: "id1",
          },
          {
            message: "Hello! How can i help you?",
            sender: "robot",
            id: "id2",
          },
          {
            message: "Can you get me today's date?",
            sender: "user",
            id: "id3",
          },
          {
            message: "Today's date is September 8",
            sender: "robot",
            id: "id4",
          },
        ]); */
  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          CHAT AI
        </p>
      )}
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
