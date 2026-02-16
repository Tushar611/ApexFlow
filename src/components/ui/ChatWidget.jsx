import { useState, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hi there! 👋 Need emergency plumbing help or a quick quote?' }
    ]);
    const [inputValue, setInputValue] = useState("");

    // Auto-open after delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 5000); // 5 seconds delay
        return () => clearTimeout(timer);
    }, []);

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        setMessages(prev => [...prev, { type: 'user', text: inputValue }]);
        setInputValue("");

        // Simulate bot response
        setTimeout(() => {
            setMessages(prev => [...prev, { type: 'bot', text: 'Thanks for reaching out! A senior specialist will be with you in a moment. For fastest service, please call our 24/7 line.' }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="bg-white w-80 md:w-96 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mb-4"
                    >
                        {/* Header */}
                        <div className="bg-premium-text p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <img src="https://ui-avatars.com/api/?name=Support+Agent&background=random" alt="Support" className="rounded-full" />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-premium-text"></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Elite Support</h4>
                                    <p className="text-xs text-gray-400">Online Now</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="bg-gray-50 h-64 p-4 overflow-y-auto space-y-4">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.type === 'user'
                                                ? 'bg-premium-gold text-white rounded-br-sm'
                                                : 'bg-white border border-gray-200 text-gray-700 rounded-bl-sm shadow-sm'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-grow bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-premium-gold"
                            />
                            <button
                                type="submit"
                                className="w-10 h-10 bg-premium-text text-white rounded-full flex items-center justify-center hover:bg-premium-gold transition-colors"
                            >
                                <Send size={16} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-premium-text text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform"
            >
                <MessageSquare size={24} />
            </button>

        </div>
    );
};

export default ChatWidget;
