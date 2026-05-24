import { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";

const BACKEND_URL = "/api/chat";

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi 👋 I'm Navyaan's AI assistant. Ask me anything!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Draggable state for BUTTON
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [isButtonDragging, setIsButtonDragging] = useState(false);
  const [buttonDragOffset, setButtonDragOffset] = useState({ x: 0, y: 0 });

  // Draggable state for CHAT WINDOW
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const chatWindowRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ==================== BUTTON DRAGGING ====================

  // Handle button drag start (MOUSE)
  const handleButtonMouseDragStart = (e) => {
    e.preventDefault();
    setIsButtonDragging(true);
    setButtonDragOffset({
      x: e.clientX - buttonPosition.x,
      y: e.clientY - buttonPosition.y,
    });
  };

  // Handle button drag start (TOUCH)
  const handleButtonTouchDragStart = (e) => {
    e.preventDefault();
    setIsButtonDragging(true);
    const touch = e.touches[0];
    setButtonDragOffset({
      x: touch.clientX - buttonPosition.x,
      y: touch.clientY - buttonPosition.y,
    });
  };

  // Handle button drag move (MOUSE)
  const handleButtonMouseDragMove = (e) => {
    if (isButtonDragging) {
      setButtonPosition({
        x: e.clientX - buttonDragOffset.x,
        y: e.clientY - buttonDragOffset.y,
      });
    }
  };

  // Handle button drag move (TOUCH)
  const handleButtonTouchDragMove = (e) => {
    if (isButtonDragging) {
      const touch = e.touches[0];
      setButtonPosition({
        x: touch.clientX - buttonDragOffset.x,
        y: touch.clientY - buttonDragOffset.y,
      });
    }
  };

  // Handle button drag end
  const handleButtonDragEnd = () => {
    setIsButtonDragging(false);
  };

  // Setup button drag event listeners (MOUSE)
  useEffect(() => {
    if (isButtonDragging) {
      document.addEventListener("mousemove", handleButtonMouseDragMove);
      document.addEventListener("mouseup", handleButtonDragEnd);
      return () => {
        document.removeEventListener("mousemove", handleButtonMouseDragMove);
        document.removeEventListener("mouseup", handleButtonDragEnd);
      };
    }
  }, [isButtonDragging, buttonDragOffset]);

  // Setup button drag event listeners (TOUCH)
  useEffect(() => {
    if (isButtonDragging) {
      document.addEventListener("touchmove", handleButtonTouchDragMove);
      document.addEventListener("touchend", handleButtonDragEnd);
      return () => {
        document.removeEventListener("touchmove", handleButtonTouchDragMove);
        document.removeEventListener("touchend", handleButtonDragEnd);
      };
    }
  }, [isButtonDragging, buttonDragOffset]);

  // ==================== CHAT WINDOW DRAGGING ====================

  // Handle drag start (MOUSE)
  const handleMouseDragStart = (e) => {
    if (window.innerWidth < 768) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  // Handle drag start (TOUCH)
  const handleTouchDragStart = (e) => {
    if (window.innerWidth < 768) {
      setIsDragging(true);
      const touch = e.touches[0];
      setDragOffset({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      });
    }
  };

  // Handle drag move (MOUSE)
  const handleMouseDragMove = (e) => {
    if (isDragging && window.innerWidth < 768) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  // Handle drag move (TOUCH)
  const handleTouchDragMove = (e) => {
    if (isDragging && window.innerWidth < 768) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragOffset.x,
        y: touch.clientY - dragOffset.y,
      });
    }
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Setup drag event listeners (MOUSE)
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseDragMove);
      document.addEventListener("mouseup", handleDragEnd);
      return () => {
        document.removeEventListener("mousemove", handleMouseDragMove);
        document.removeEventListener("mouseup", handleDragEnd);
      };
    }
  }, [isDragging, dragOffset]);

  // Setup drag event listeners (TOUCH)
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("touchmove", handleTouchDragMove);
      document.addEventListener("touchend", handleDragEnd);
      return () => {
        document.removeEventListener("touchmove", handleTouchDragMove);
        document.removeEventListener("touchend", handleDragEnd);
      };
    }
  }, [isDragging, dragOffset]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput("");
    setLoading(true);

    setMessages((prev) => [...prev, { role: "user", text: userText }]);

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      const rawText = await res.text();

      let data;
      try {
        data = JSON.parse(rawText);
      } catch {
        console.error("Non-JSON response from server:", rawText);
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: "❌ Server error. Please try again." },
        ]);
        return;
      }

      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: `❌ ${data.error || "Something went wrong."}` },
        ]);
        return;
      }

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.reply || "Sorry, I couldn't respond." },
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "❌ Could not reach the server. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Robot Button - DRAGGABLE EVERYWHERE */}
      <button
        onMouseDown={handleButtonMouseDragStart}
        onTouchStart={handleButtonTouchDragStart}
        onClick={() => setOpen(!open)}
        className="fixed bg-cyan-500 text-black p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition z-50 cursor-grab active:cursor-grabbing"
        style={{
          transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
          bottom: "auto",
          right: "auto",
          top: "auto",
          left: "auto",
        }}
        aria-label="Toggle AI Assistant"
      >
        <FaRobot size={20} />
      </button>

      {/* Chat Window */}
      {open && (
        <div
          ref={chatWindowRef}
          className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 w-full md:w-80 h-full md:h-[420px] bg-black border border-gray-700 rounded-none md:rounded-xl shadow-2xl flex flex-col z-40"
          style={
            window.innerWidth < 768
              ? {
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  cursor: isDragging ? "grabbing" : "auto",
                }
              : {}
          }
        >
          {/* Header - Draggable on Mobile (MOUSE + TOUCH) */}
          <div
            onMouseDown={handleMouseDragStart}
            onTouchStart={handleTouchDragStart}
            className="flex items-center justify-between p-3 md:p-4 border-b border-gray-700 bg-black md:cursor-default cursor-grab active:cursor-grabbing select-none"
          >
            <h2 className="font-semibold text-cyan-400 text-sm md:text-base flex-1 pointer-events-none">
              AI Assistant
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="ml-2 p-1 md:p-2 hover:bg-gray-800 rounded transition"
              aria-label="Close AI Assistant"
            >
              <FaTimes size={18} className="text-gray-400 hover:text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 bg-black">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-xs md:text-sm whitespace-pre-wrap break-words ${
                    msg.role === "user"
                      ? "bg-cyan-600 text-black rounded-br-none"
                      : "bg-gray-800 text-white rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Loading dots */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-white px-3 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 md:p-3 flex gap-2 border-t border-gray-700 bg-black">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Navyaan..."
              disabled={loading}
              className="flex-1 px-2 md:px-3 py-2 rounded bg-gray-900 text-white text-xs md:text-sm outline-none placeholder-gray-500 disabled:opacity-50"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !loading) {
                  sendMessage();
                }
              }}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 px-2 md:px-4 py-2 rounded text-black text-xs md:text-sm font-semibold transition disabled:cursor-not-allowed"
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}