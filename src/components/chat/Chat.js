// components/Chat.js
"use client";
import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
   const [open, setOpen] = useState(false);

  const sendMessage = async () => {
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    setInput("");
  };

  return (
 <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="w-80 h-96 bg-white shadow-xl rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">Chatbot</h2>
            <button onClick={() => setOpen(false)}>✖️</button>
          </div>
          <div className="overflow-y-auto h-[85%]">
              <div>
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <p key={idx}><strong>{msg.role}:</strong> {msg.content}</p>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
          </div>
        </div>
      ) : (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
          onClick={() => setOpen(true)}
        >
          Chat 💬
        </button>
      )}
    </div>


  
  );
}
