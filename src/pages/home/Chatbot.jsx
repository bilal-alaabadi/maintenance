import React, { useState } from 'react';

const Chatbot = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([{ sender: 'bot', text: 'مرحباً! كيف يمكنني مساعدتك؟' }]);
    const [userInput, setUserInput] = useState('');

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const sendMessage = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            if (userInput.trim() !== "") {
                setMessages([...messages, { sender: 'user', text: userInput }]);
                setUserInput('');
                setTimeout(() => {
                    setMessages([...messages, { sender: 'user', text: userInput }, { sender: 'bot', text: 'تم استلام رسالتك! كيف يمكنني مساعدتك أكثر؟' }]);
                }, 500);
            }
        }
    };

    return (
        <div id="chatbot">
            <button onClick={toggleChat}>
                <img src="chat-bot.png" alt="Chatbot" width="50" height="50" />
            </button>
            {isChatOpen && (
                <div id="chatWindow">
                    <div className="messages" id="chatMessages">
                        {messages.map((msg, index) => (
                            <div key={index}><strong>{msg.sender === 'bot' ? 'بوت' : 'أنت'}:</strong> {msg.text}</div>
                        ))}
                    </div>
                    <input
                        type="text"
                        id="userMessage"
                        placeholder="اكتب رسالتك..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={sendMessage}
                    />
                    <button onClick={sendMessage}>إرسال</button>
                </div>
            )}
        </div>
    );
};

export default Chatbot;