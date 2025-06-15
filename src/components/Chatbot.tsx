'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    const botResponse = getBotResponse(userMessage);

    setMessages([...messages, `🧑‍💻: ${userMessage}`, `🤖: ${botResponse}`]);
    setInput('');
  };

  const getBotResponse = (msg: string) => {
    return "I'm Jinii Bot – here to answer questions about Jainish Jain! 💡";
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition"
        >
          <Bot className="h-6 w-6" />
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="fixed bottom-20 right-5 w-80 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl shadow-xl z-50 flex flex-col overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <div className="bg-indigo-600 text-white p-4 font-semibold text-center">
            🤖 Jinii Bot
          </div>

          <div className="flex-1 px-4 py-2 h-64 overflow-y-auto text-sm">
            {messages.map((msg, idx) => (
              <div key={idx} className="mb-2 whitespace-pre-line">{msg}</div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center border-t border-gray-200 dark:border-zinc-700 p-2 bg-zinc-50 dark:bg-zinc-800">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 p-2 rounded-md bg-white dark:bg-zinc-700 text-black dark:text-white border border-gray-300 dark:border-zinc-600 focus:outline-none text-sm"
              placeholder="Ask something..."
            />
            <button onClick={handleSend} className="ml-2 text-indigo-600 hover:text-indigo-800">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
