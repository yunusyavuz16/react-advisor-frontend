import React, { useState } from "react";

import useChat from "../hooks/useChat";
import ChatHistory from "./../components/ChatHistory";
import ChatView from "./../components/ChatView";
import InputBar from "./../components/InputBar";
import TabButtons from "./../components/TabButtons";

const ChatScreen: React.FC = () => {
  const {
    handleSend,
    inputText,
    messages,
    setInputText,
  } = useChat();
  const [activeTab, setActiveTab] = useState<string>("chat");

  return (
    <div className="flex flex-col items-center">
      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "chat" && <ChatView messages={messages} />}
      {activeTab === "list" && <ChatHistory />}
      {activeTab === "chat" && (
        <InputBar
          inputText={inputText}
          setInputText={setInputText}
          handleSend={handleSend}
        />
      )}
    </div>
  );
};

export default ChatScreen;
