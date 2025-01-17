import { FC, memo } from "react";
import { useChatHistory } from "../hooks/useChatHistory";

const HistoryItem: FC<{
  role: string;
  content: string;
  timestamp: string;
}> = memo(({ content, role, timestamp }) => {
  return (
    <div className="border-b border-gray-300 py-2">
      <div className="font-bold">{role}</div>
      <div>{content}</div>
      <div className="text-sm text-gray-500">
        {new Date(timestamp).toLocaleString()}
      </div>
    </div>
  );
});

const ChatHistory: React.FC<{}> = ({}) => {
  const { chatHistory } = useChatHistory();
  return (
    <div className="flex flex-col w-full max-w-2xl h-[calc(100vh-200px)] overflow-y-scroll p-5">
      {chatHistory.length > 0 ? (
        chatHistory.map((chat) => (
          <HistoryItem
            key={chat.id}
            content={chat.content}
            role={chat.role}
            timestamp={chat.timestamp}
          ></HistoryItem>
        ))
      ) : (
        <div>No chat history found.</div>
      )}
    </div>
  );
};

export default memo(ChatHistory);
