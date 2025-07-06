'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send } from 'lucide-react';

const predefinedResponses: { [key: string]: string } = {
  'Jainish Profile': `Jainish Jain's Profile\n\nName: Jainish Jain\nHe is a Computer Science student at SRM IST\nGitHub: https://github.com/jainishjain11\nLinkedIn: https://linkedin.com/in/jainishjain11\nInstagram: https://www.instagram.com/jainishjain.11/`,
  'Education': 'Education:\n- 10th Grade: MDS Public School - 94%\n- 12th Grade: [Your School Name] - 75%\n- Pursuing: B.Tech in Computer Science at SRM Institute of Science and Technology, Current CGPA: 9.65 🎓.',
  'Hobbies and Interests': 'Hobbies and Interests:\n- Entrepreneurship and building startups\n- Playing percussion instruments (e.g., drums, Congo)\n- Coding and building side projects\n- Exploring AI/ML and Software Development\n- Watching memes and movies\n- Learning new frameworks and tools.',
  'Skills': 'Technical Skills:\nLanguages: C++, Python, Dart, JavaScript, TypeScript, Java\nFrameworks: Flutter, React.js, Next.js, Node.js\nTools: Firebase, Supabase, Hive, Prisma, Git, VS Code, Figma\n and more 🔧.',
  'Projects': '1. PillPal – A Flutter-based medication reminder app\n2. ISTC Seat Allocation – A seat allotment portal using React, Next.js, and MySQL\n3. Microplastic Detector – Uses AI to detect microplastics in drinking water\n4. Portfolio Website – A personal developer portfolio with chatbot and animations 💡',
  'Experience': 'Summer Intern at CSIR-CSIO 🏢.',
  'Learning Focus': 'AI/ML, LLMs, Prompt Engineering\n- Backend with Supabase & Prisma\n- Android development with Android Studio\n- UI/UX and animations in Flutter/React\n- Cloud deployment strategies',
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = (question?: string) => {
    const userMessage = question || input.trim();
    if (!userMessage) return;

    const botResponse = getBotResponse(userMessage);
    setMessages((prev) => [...prev, `🧑‍💻: ${userMessage}`, `🤖: ${botResponse}`]);
    setInput('');
  };

  const getBotResponse = (msg: string) => {
    const cleanedMsg = msg.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
    for (const question in predefinedResponses) {
      if (cleanedMsg.includes(question.toLowerCase())) {
        return predefinedResponses[question];
      }
    }
    return "I'm sorry, I can only answer questions related to Jainish Jain’s background, skills, or interests.";
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        "🤖: I'm Jinii Bot 🤖 – Ask me about Jainish Jain's skills, education, hobbies or projects!",
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black hover:bg-neutral-800 text-white p-3 rounded-full shadow-lg transition"
        >
          <Bot className="h-6 w-6" />
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="fixed bottom-20 right-5 w-80 h-[32rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-2xl z-50 flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <div className="bg-neutral-900 text-white p-4 font-semibold text-center">
            🤖 Jinii Bot
          </div>

          <div className="flex-1 px-4 py-2 overflow-y-auto text-sm text-gray-800 dark:text-gray-200">
            {messages.map((msg, idx) => (
              <div key={idx} className="mb-2 whitespace-pre-line">{msg}</div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="overflow-x-auto border-t border-gray-200 dark:border-zinc-700 px-3 py-2 bg-gray-100 dark:bg-zinc-800 max-h-[6.5rem]">
            <div className="flex flex-wrap gap-2 justify-center">
              {Object.keys(predefinedResponses).map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(question)}
                  className="text-xs px-3 py-1 bg-gray-300 dark:bg-zinc-700 text-black dark:text-white rounded-full hover:bg-gray-400 dark:hover:bg-zinc-600"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center border-t border-gray-200 dark:border-zinc-700 p-2 bg-zinc-50 dark:bg-zinc-800">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 p-2 rounded-lg bg-white dark:bg-zinc-700 text-black dark:text-white border border-gray-300 dark:border-zinc-600 focus:outline-none text-sm"
              placeholder="Ask something..."
            />
            <button onClick={() => handleSend()} className="ml-2 text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-300">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
