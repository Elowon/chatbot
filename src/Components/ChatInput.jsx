import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './chatInput.css';

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    //  if (!inputText.trim()) return;
    setInputText("");

    const newChatMessage = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessage);
    setChatMessages(newChatMessage);

    /*const response = window.Chatbot
            ? Chatbot.getResponse(inputText)
            : `You said: ${inputText}`; */
    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessage,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send message to chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage}>send</button>
    </div>
  );
}
export default ChatInput;
