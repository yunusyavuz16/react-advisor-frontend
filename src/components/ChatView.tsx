import DOMPurify from "dompurify";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { Message } from "../types";
import { memo } from "react";

const MessageView: React.FC<{
  isAI: boolean;
  text: string;
}> = memo(({ isAI, text }) => {
  return (
    <div className={`flex ${isAI ? "justify-start" : "justify-end"}`}>
      <div
        className={`p-3 rounded mb-2 max-w-xs ${
          isAI ? "bg-green-200" : "bg-gray-200"
        }`}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              remark().use(remarkHtml).processSync(text).toString()
            ),
          }}
        />
      </div>
    </div>
  );
});

const ChatView: React.FC<{ messages: Message[] }> = ({ messages }) => {
  return (
    <div className="flex flex-col w-full max-w-2xl h-[calc(100vh-200px)] overflow-y-scroll p-5">
      {messages.map((message) => (
        <MessageView
          key={message.id}
          isAI={message.isAI}
          text={message.text}
        ></MessageView>
      ))}
    </div>
  );
};

export default ChatView;
