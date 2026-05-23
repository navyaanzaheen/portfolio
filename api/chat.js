// api/chat.js
const { getBotReply } = require("./chatbot.cjs");

module.exports = (req, res) => {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  // Validation
  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const reply = getBotReply(message.trim());
    console.log(`User: ${message.trim()}`);
    console.log(`Bot: ${reply}`);
    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Chatbot error:", error.message);
    return res.status(500).json({ error: "Could not get a response. Try again." });
  }
};