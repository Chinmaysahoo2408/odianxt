'use client';

import React, { useState } from 'react';
import {
  Compass,
  Play,
  Volume2,
  CheckCircle2,
  Lock,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
  Award,
  Clock,
  Send,
  X
} from 'lucide-react';
import { useAtma } from '@/lib/atma/store';
import { CourseLesson } from '@/lib/atma/types';

export const CourseSection: React.FC = () => {
  const { courseLessons, completeLesson, user } = useAtma();
  const [selectedLesson, setSelectedLesson] = useState<CourseLesson | null>(null);
  const [reflectionText, setReflectionText] = useState('');
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'audio'>('video');
  const [isPlaying, setIsPlaying] = useState(false);

  const completedCount = courseLessons.filter(l => l.completed).length;
  const totalCount = courseLessons.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const handleOpenLesson = (lesson: CourseLesson) => {
    setSelectedLesson(lesson);
    setReflectionText('');
    setIsPlaying(false);
  };

  const handleCompleteCurrent = () => {
    if (!selectedLesson) return;
    completeLesson(selectedLesson.day, reflectionText);
    setSelectedLesson({ ...selectedLesson, completed: true });
  };

  return (
    <div className="space-y-8 pb-16 animate-fadeIn">
      {/* Course Hero & Progress Bar */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#262626] relative overflow-hidden shadow-xl">
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#115E41]/30 border border-[#115E41] text-[#2EA043] text-xs font-semibold tracking-wider uppercase font-geist">
            <Compass className="w-3.5 h-3.5" />
            <span>21-Day Transformation Path</span>
          </div>

          <h1 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F7F7] tracking-tight">
            The Path of Mastery.
          </h1>

          <p className="text-xs sm:text-sm text-[#B3B3B3] font-geist leading-relaxed">
            A structured daily curriculum fusing ancient wisdom, breathwork, shadow integration, and mental discipline to fundamentally transform your inner and outer reality.
          </p>

          {/* Progress Bar */}
          <div className="pt-4 space-y-2">
            <div className="flex justify-between text-xs font-mono text-[#8C8C8C]">
              <span>Progress: {completedCount} of {totalCount} Days Completed</span>
              <span className="text-[#D4AF37] font-semibold">{progressPercent}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-[#050505] border border-[#262626] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#D4AF37] to-[#2EA043] rounded-full transition-all duration-700 shadow-sm"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum Grid: Days 1 to 21 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courseLessons.map(lesson => {
          const isUnlocked = lesson.day === 1 || courseLessons[lesson.day - 2]?.completed || lesson.completed;
          return (
            <div
              key={lesson.day}
              onClick={() => handleOpenLesson(lesson)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer select-none relative group overflow-hidden flex flex-col justify-between min-h-[170px] ${
                lesson.completed
                  ? 'bg-[#1B2A22]/70 border-[#115E41] hover:border-[#2EA043]'
                  : isUnlocked
                  ? 'bg-[#121212] border-[#262626] hover:border-[#D4AF37]/50 hover:bg-[#1A1C1A]'
                  : 'bg-[#0A0A0A] border-[#1F1F1F] opacity-75'
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-cormorant font-bold text-sm ${
                      lesson.completed
                        ? 'bg-[#0A3B2C] text-[#2EA043] border border-[#115E41]'
                        : 'bg-[#1F1F1F] text-[#D4AF37] border border-[#262626]'
                    }`}
                  >
                    {lesson.completed ? <CheckCircle2 className="w-4 h-4" /> : lesson.day}
                  </div>

                  <span className="text-[11px] font-mono text-[#8C8C8C] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {lesson.duration}
                  </span>
                </div>

                <div>
                  <h3
                    className={`font-cormorant text-xl font-bold tracking-tight ${
                      lesson.completed ? 'text-[#F7F7F7]' : 'text-[#F7F7F7] group-hover:text-[#D4AF37]'
                    }`}
                  >
                    {lesson.title}
                  </h3>
                  <p className="text-xs text-[#8C8C8C] font-geist line-clamp-2 mt-1">
                    {lesson.subtitle}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[#1F1F1F] flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-[#D4AF37]">+{lesson.xp} XP</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-geist text-[#B3B3B3] group-hover:text-[#F7F7F7]">
                  {lesson.completed ? 'Review Lesson' : 'Open Lesson'}
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lesson Detail Modal */}
      {selectedLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050505]/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#121212] border border-[#262626] rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#262626] pb-4">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 rounded-md bg-[#050505] border border-[#D4AF37]/30 text-[#D4AF37] font-mono text-xs font-semibold">
                  DAY {selectedLesson.day} OF 21
                </div>
                <h2 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#F7F7F7]">
                  {selectedLesson.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedLesson(null)}
                className="p-2 rounded-lg bg-[#050505] hover:bg-[#1A1C1A] text-[#8C8C8C] hover:text-[#F7F7F7] border border-[#262626]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Player Switcher */}
            <div className="space-y-3">
              <div className="flex gap-2 border-b border-[#1F1F1F] pb-2">
                <button
                  onClick={() => setActiveMediaTab('video')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-geist font-medium transition-all ${
                    activeMediaTab === 'video'
                      ? 'bg-[#D4AF37] text-[#050505]'
                      : 'text-[#8C8C8C] hover:text-[#F7F7F7]'
                  }`}
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Video Lesson</span>
                </button>
                <button
                  onClick={() => setActiveMediaTab('audio')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-geist font-medium transition-all ${
                    activeMediaTab === 'audio'
                      ? 'bg-[#D4AF37] text-[#050505]'
                      : 'text-[#8C8C8C] hover:text-[#F7F7F7]'
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Guided Audio</span>
                </button>
              </div>

              {activeMediaTab === 'video' ? (
                <div className="aspect-video w-full rounded-xl bg-[#050505] border border-[#262626] overflow-hidden flex items-center justify-center">
                  <video
                    src={selectedLesson.video_url}
                    controls
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1544502062-f82887f03d1c?crop=entropy&cs=srgb&fm=jpg&w=940&q=85"
                  />
                </div>
              ) : (
                <div className="p-6 rounded-xl bg-[#050505] border border-[#262626] space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#1B2A22] border border-[#115E41] flex items-center justify-center text-[#2EA043]">
                      <Volume2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#F7F7F7]">
                        Conscious Guided Meditation & Wisdom
                      </div>
                      <div className="text-xs text-[#8C8C8C] font-mono">{selectedLesson.duration}</div>
                    </div>
                  </div>
                  <audio src={selectedLesson.audio_url} controls className="w-full" />
                </div>
              )}
            </div>

            {/* Reading Content */}
            <div className="space-y-3">
              <h4 className="text-xs font-geist font-semibold tracking-widest text-[#D4AF37] uppercase">
                The Lesson
              </h4>
              {selectedLesson.content.map((p, idx) => (
                <p key={idx} className="text-sm text-[#B3B3B3] font-geist leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Action Checklist */}
            <div className="space-y-3 p-4 rounded-xl bg-[#050505] border border-[#262626]">
              <h4 className="text-xs font-geist font-semibold tracking-widest text-[#D4AF37] uppercase">
                Daily Action Checklist
              </h4>
              <div className="space-y-2">
                {selectedLesson.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F7F7F7] font-geist">
                    <CheckCircle2 className="w-4 h-4 text-[#2EA043] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Journal Reflection Input */}
            <div className="space-y-2">
              <label className="text-xs font-geist font-semibold tracking-wider text-[#D4AF37] uppercase">
                Journal Reflection
              </label>
              <textarea
                value={reflectionText}
                onChange={e => setReflectionText(e.target.value)}
                placeholder={selectedLesson.reflectionPrompt}
                rows={3}
                className="w-full p-3.5 rounded-xl bg-[#050505] border border-[#262626] text-sm text-[#F7F7F7] placeholder-[#8C8C8C] focus:outline-none focus:border-[#D4AF37] font-geist resize-none"
              />
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#262626]">
              <div className="text-xs text-[#8C8C8C] font-mono">
                Completion Reward: <span className="text-[#D4AF37] font-semibold">+50 XP</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedLesson(null)}
                  className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-[#050505] hover:bg-[#1A1C1A] text-xs font-geist font-semibold text-[#B3B3B3] border border-[#262626]"
                >
                  Close
                </button>
                <button
                  onClick={handleCompleteCurrent}
                  disabled={selectedLesson.completed}
                  className={`flex-1 sm:flex-initial px-6 py-2 rounded-xl font-geist font-semibold text-xs tracking-wider uppercase transition-all shadow-md ${
                    selectedLesson.completed
                      ? 'bg-[#115E41] text-[#F7F7F7] cursor-default'
                      : 'bg-[#D4AF37] hover:bg-[#E5BD45] text-[#050505]'
                  }`}
                >
                  {selectedLesson.completed ? 'Lesson Completed ✓' : `Complete Day ${selectedLesson.day}`}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
