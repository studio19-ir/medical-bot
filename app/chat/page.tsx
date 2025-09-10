"use client";
import { useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<{ role: string; content: string }[]>([]);

  const sendMessage = async () => {
    if (!message) return;
    const userMsg = { role: "user", content: message };
    setChat([...chat, userMsg]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setChat([...chat, userMsg, { role: "assistant", content: data.reply }]);
    setMessage("");
  };

  return (
    <div className="flex flex-col max-w-2xl mx-auto mt-10">
      <div className="border p-4 rounded h-96 overflow-y-auto mb-4 bg-gray-50">
        {chat.map((c, i) => (
          <p key={i} className={c.role === "user" ? "text-blue-600" : "text-green-600"}>
            <b>{c.role}:</b> {c.content}
          </p>
        ))}
      </div>
      <div className="flex">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 flex-grow rounded-l"
          placeholder="پیام خود را بنویسید..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 rounded-r"
        >
          ارسال
        </button>
      </div>
    </div>
  );
}
