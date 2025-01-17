

const TabButtons: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({
    activeTab,
    setActiveTab,
  }) => {
    return (
      <div className="flex justify-center mb-5">
        <button
          onClick={() => setActiveTab("chat")}
          className={`px-4 py-2 mr-2 rounded ${
            activeTab === "chat" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Chat
        </button>
        <button
          onClick={() => setActiveTab("list")}
          className={`px-4 py-2 rounded ${
            activeTab === "list" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          Chat History
        </button>
      </div>
    );
  };


  export default TabButtons;