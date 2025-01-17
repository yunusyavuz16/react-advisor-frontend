const InputBar: React.FC<{
    inputText: string;
    setInputText: (text: string) => void;
    handleSend: () => void;
  }> = ({ inputText, setInputText, handleSend }) => {
    return (
      <div className="fixed bottom-6 w-full flex justify-center">
        <div className="flex w-full max-w-2xl">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            className="flex-grow border border-gray-300 rounded-l px-4 py-2"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded-r"
          >
            Send
          </button>
        </div>
      </div>
    );
  };

  export default InputBar;