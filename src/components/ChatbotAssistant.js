import React, { useState } from "react";

const ChatbotAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([{ text: "How can I help you today?", sender: "bot" }]);
    const [input, setInput] = useState("");

    const toggleChat = () => setIsOpen(!isOpen);

    const sendMessage = () => {
        if (input.trim() === "") return;

        setMessages([...messages, { text: input, sender: "user" }]);
        setInput("");

        // Send message to backend and get response
        fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: input })
        })
        .then(response => response.json())
        .then(data => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: data.response, sender: "bot" }
            ]);
        })
        .catch((error) => {
            console.error('Error:', error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: "Sorry, I couldn't get a response from the server.", sender: "bot" }
            ]);
        });
    };

    return (
        <div className="chatbot">
            <button className="chat-toggle" onClick={toggleChat}>💬</button>
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <h3>Support Assistant</h3>
                        <button onClick={toggleChat}>✖</button>
                    </div>
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`chat-message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your question..."
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatbotAssistant;