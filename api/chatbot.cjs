// chatbot.cjs - Pure rule-based chatbot, no API needed

const responses = {
  greetings: {
    keywords: ["hi", "hello", "hey", "good morning", "good evening", "good afternoon", "sup", "whats up", "howdy"],
    replies: [
      "Hi! 👋 I'm Navyaan's assistant. How can I help you?",
      "Hello! Welcome to Navyaan's portfolio. What would you like to know?",
      "Hey there! Ask me anything about Navyaan's work and skills!",
    ],
  },

  skills: {
    keywords: ["skill", "skills", "tech", "technology", "stack", "know", "use", "tools", "languages", "expertise", "specialize"],
    replies: [
      "Navyaan specializes in the MERN stack:\n\n• React.js\n• Node.js\n• Express.js\n• MongoDB\n• Firebase\n• Next.js\n\nHe builds full-stack web applications end to end!",
      "Navyaan's tech stack includes React, Node.js, Express, MongoDB, Firebase, and Next.js. He's a full-stack MERN developer!",
    ],
  },

  projects: {
    keywords: ["project", "projects", "work", "built", "made", "portfolio", "app", "apps", "website", "websites", "build"],
    replies: [
      "Navyaan has built:\n\n• 🛒 E-commerce platforms (full-stack)\n• 📅 Online booking systems\n• 💼 Responsive portfolio websites\n\nWant to know more about any specific project?",
      "Navyaan's projects include e-commerce platforms, booking systems, and portfolio websites — all built with the MERN stack!",
    ],
  },

  experience: {
    keywords: ["experience", "background", "years", "worked", "history", "career", "professional"],
    replies: [
      "Navyaan is a MERN Stack Developer with experience building full-stack web applications. He has worked on e-commerce platforms, booking systems, and portfolio websites.",
      "Navyaan has hands-on experience with full-stack development, focusing on the MERN stack. He builds scalable, responsive web applications.",
    ],
  },

  hire: {
    keywords: ["hire", "available", "availability", "freelance", "job", "opportunity", "work together", "price", "cost", "rate", "services", "service"],
    replies: [
      "Navyaan is open to both freelance projects and full-time opportunities! 🚀\n\nFeel free to reach out through the contact section on this portfolio.",
      "Yes, Navyaan is available for freelance work and full-time roles. Check out the contact section to get in touch!",
    ],
  },

  contact: {
    keywords: ["contact", "email", "reach", "message", "connect", "linkedin", "github", "social", "touch"],
    replies: [
      "You can contact Navyaan through the contact form on this portfolio. He'll get back to you as soon as possible! 📬",
      "Reach out to Navyaan via the contact section below. He's always open to new opportunities and collaborations!",
    ],
  },

  react: {
    keywords: ["react", "reactjs", "react.js", "frontend", "front end", "ui", "component", "hooks"],
    replies: [
      "React is Navyaan's primary frontend framework. He builds fast, responsive UIs with React hooks, context API, and modern best practices.",
    ],
  },

  backend: {
    keywords: ["node", "nodejs", "backend", "server", "api", "express", "rest", "restful"],
    replies: [
      "Navyaan builds robust backends with Node.js and Express.js, creating RESTful APIs that power full-stack applications.",
    ],
  },

  database: {
    keywords: ["mongo", "mongodb", "database", "db", "firebase", "data", "storage"],
    replies: [
      "Navyaan works with MongoDB and Firebase for database solutions — from simple CRUD apps to complex real-time applications.",
    ],
  },

  about: {
    keywords: ["who", "about", "navyaan", "tell me", "introduce", "yourself", "developer", "person"],
    replies: [
      "Navyaan Patel is a MERN Stack Developer who builds full-stack web applications. He specializes in React, Node.js, MongoDB, and Firebase. He's open to freelance and full-time opportunities!",
      "Navyaan is a passionate full-stack developer focused on the MERN stack. He creates e-commerce platforms, booking systems, and portfolio websites.",
    ],
  },

  thanks: {
    keywords: ["thanks", "thank you", "thankyou", "appreciate", "helpful", "great", "awesome", "nice", "good job"],
    replies: [
      "You're welcome! 😊 Feel free to ask anything else about Navyaan.",
      "Happy to help! Let me know if you have more questions.",
      "Anytime! Is there anything else you'd like to know?",
    ],
  },

  bye: {
    keywords: ["bye", "goodbye", "see you", "later", "cya", "farewell", "take care"],
    replies: [
      "Goodbye! 👋 Feel free to come back if you have more questions about Navyaan's work!",
      "See you later! Don't hesitate to reach out if you need anything. 😊",
    ],
  },
};

const fallbackReplies = [
  "I'm not sure about that, but I can tell you about Navyaan's skills, projects, and availability. What would you like to know?",
  "That's outside my knowledge! Try asking about Navyaan's tech stack, projects, or how to hire him. 😊",
  "I specialize in answering questions about Navyaan's work. Ask me about his skills, projects, or availability!",
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getBotReply(message) {
  const lower = message.toLowerCase().trim();

  for (const category of Object.values(responses)) {
    const matched = category.keywords.some((keyword) =>
      lower.includes(keyword)
    );
    if (matched) {
      return getRandom(category.replies);
    }
  }

  return getRandom(fallbackReplies);
}

module.exports = { getBotReply };
