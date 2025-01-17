// enum url localhost 5000

const ROOT_URLS = {
  LOCALHOST: "http://localhost:5000",
};

const API_URLS = {
  CHAT: ROOT_URLS.LOCALHOST + "/groq/chat",
  HISTORY: ROOT_URLS.LOCALHOST + "/chats",
};

export { API_URLS };
