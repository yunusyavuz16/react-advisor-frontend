import { useState } from "react";
import { isUserAnswerRelatedToQuestion } from "../api/isUserAnswerRelatedToQuestion";
import questions from "../constants/questions";
import { Message } from "../types";

const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "0",
      text: questions[0],
      isAI: true,
    },
  ]);
  const [inputText, setInputText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSend = async () => {
    if (inputText.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: inputText,
        isAI: false,
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputText("");

      const data = await isUserAnswerRelatedToQuestion(
        inputText,
        questions[currentIndex]
      );

      if (!data.isRelated) {
        const aiMessage: Message = {
          id: Date.now().toString(),
          text: data.advice ?? "",
          isAI: true,
        };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
        return;
      }

      setMessages((prevMessages) => {
        const lastMessage = { ...prevMessages[prevMessages.length - 1] };
        lastMessage.isAppropriate = true;

        const newMessages = prevMessages.slice(0, -1);
        newMessages.push(lastMessage);
        return newMessages;
      });

      setMessages((prevMessages) => {
        if (currentIndex + 1 < questions.length) {
          return [
            ...prevMessages,
            {
              id: Date.now().toString(),
              text: questions[currentIndex + 1],
              isAI: true,
            },
          ];
        }
        return prevMessages;
      });
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return {
    messages,
    handleSend,
    inputText,
    setInputText,
  };
};

export default useChat;
