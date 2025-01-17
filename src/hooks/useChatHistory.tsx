import { useEffect, useState } from "react";
import { Chat } from "../types";
import { getChats } from "../api/getChats";

const useChatHistory = () => {
  const [chatHistory, setChatHistory] = useState<Chat[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await getChats();
        setChatHistory(response);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, []);

  return { chatHistory };
};

export { useChatHistory};