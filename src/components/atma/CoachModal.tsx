'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  Sparkles,
  Send,
  X,
  RefreshCw,
  ArrowRight,
  ShieldAlert,
  Compass
} from 'lucide-react';
import { useAtma } from '@/lib/atma/store';

const PROMPT_SUGGESTIONS = [
  'How do I overcome morning resistance and start my daily ritual?',
  'Help me design a 20-minute evening wind-down routine without screens.',
  'How do I sit with difficult emotions during shadow work exercises?',
  'What is the Stoic perspective on handling unexpected life setbacks?'
];

export const CoachSection: React.FC = () => {
  const { coachMessages, sendCoachMessage, isCoachTyping, clearCoachChat } = useAtma();
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [coachMessages, isCoachTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isCoachTyping) return;
    sendCoachMessage(inputText);
    setInputText('');
  };

  return (
    <div className="flex flex-col h-[calc(100vh-160px)] max-h-[780px] bg-[#121212] border border-[#262626] rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
      {/* Coach Chat Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#262626] bg-[#050505]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1F1F1F] via-[#1B2A22] to-[#0A3B2C] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] shadow-md">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-cormorant text-xl font-bold text-[#F7F7F7]">
                ATMA AI Transformation Coach
              </h2>
              <span className="w-2 h-2 rounded-full bg-[#2EA043] animate-pulse" />
            </div>
            <p className="text-[11px] text-[#8C8C8C] font-geist">
              Guided by Stoic reflection, conscious presence & peak discipline.
            </p>
          </div>
        </div>

        <button
          onClick={clearCoachChat}
          className="p-2 rounded-lg bg-[#121212] hover:bg-[#1A1C1A] text-[#8C8C8C] hover:text-[#D4AF37] border border-[#262626] transition-colors"
          title="Reset conversation"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {coachMessages.map(msg => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xl rounded-2xl p-4 text-xs sm:text-sm font-geist leading-relaxed space-y-1 shadow-sm ${
                msg.role === 'user'
                  ? 'bg-[#D4AF37] text-[#050505] font-medium rounded-tr-none'
                  : 'bg-[#1A1C1A] text-[#F7F7F7] border border-[#262626] rounded-tl-none'
              }`}
            >
              {msg.role === 'assistant' && (
                <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>ATMA Coach</span>
                </div>
              )}
              <p>{msg.content}</p>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isCoachTyping && (
          <div className="flex justify-start">
            <div className="max-w-xs rounded-2xl p-3.5 bg-[#1A1C1A] border border-[#262626] text-xs text-[#D4AF37] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
              <span>Contemplating guidance...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestion Chips */}
      <div className="px-6 py-2.5 bg-[#050505] border-t border-[#1F1F1F] flex gap-2 overflow-x-auto scrollbar-none">
        {PROMPT_SUGGESTIONS.map((sug, i) => (
          <button
            key={i}
            onClick={() => sendCoachMessage(sug)}
            className="px-3 py-1.5 rounded-full bg-[#121212] hover:bg-[#1A1C1A] text-[#B3B3B3] hover:text-[#D4AF37] border border-[#262626] text-[11px] font-geist flex-shrink-0 transition-all"
          >
            {sug}
          </button>
        ))}
      </div>

      {/* Input Field */}
      <form onSubmit={handleSubmit} className="p-4 bg-[#050505] border-t border-[#262626] flex gap-2">
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Ask your coach anything about rituals, breath, or discipline..."
          className="flex-1 p-3.5 rounded-xl bg-[#121212] border border-[#262626] text-xs sm:text-sm text-[#F7F7F7] placeholder-[#8C8C8C] focus:outline-none focus:border-[#D4AF37] font-geist"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isCoachTyping}
          className="px-6 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#E5BD45] disabled:opacity-40 text-[#050505] font-semibold text-xs font-geist flex items-center gap-1.5 shadow-md transition-all"
        >
          <span>Send</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export const CoachModal: React.FC = () => {
  const { isCoachModalOpen, setIsCoachModalOpen } = useAtma();

  if (!isCoachModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050505]/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl h-[85vh] bg-[#121212] border border-[#262626] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        <button
          onClick={() => setIsCoachModalOpen(false)}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-[#050505] hover:bg-[#1A1C1A] text-[#8C8C8C] hover:text-[#F7F7F7] border border-[#262626]"
        >
          <X className="w-4 h-4" />
        </button>
        <CoachSection />
      </div>
    </div>
  );
};
