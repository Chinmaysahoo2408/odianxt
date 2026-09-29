'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import {
  AtmaUser,
  RitualItem,
  CourseLesson,
  CommunityPost,
  PostComment,
  WeeklyChallenge,
  LeaderboardUser,
  AchievementItem,
  CoachMessage,
  ReferralData
} from './types';
import {
  INITIAL_RITUALS,
  INITIAL_COURSE_LESSONS,
  ACHIEVEMENTS,
  WEEKLY_CHALLENGES,
  DAILY_QUOTES,
  INITIAL_POSTS,
  INITIAL_LEADERBOARD
} from './data';

interface AtmaContextType {
  user: AtmaUser | null;
  isAuthenticated: boolean;
  login: (email: string, name?: string) => void;
  logout: () => void;
  updateBio: (newBio: string) => void;
  rituals: RitualItem[];
  toggleRitual: (id: string) => void;
  completedRitualsCount: number;
  totalRitualsCount: number;
  ritualProgress: number;
  courseLessons: CourseLesson[];
  completeLesson: (day: number, reflection?: string) => void;
  completedCourseCount: number;
  posts: CommunityPost[];
  addPost: (content: string, category: 'wins' | 'q&a' | 'general', imageUrl?: string) => void;
  toggleLikePost: (postId: string) => void;
  comments: Record<string, PostComment[]>;
  addComment: (postId: string, content: string) => void;
  activeWeeklyChallenge: WeeklyChallenge;
  weeklyProgress: { daysDone: number; completed: boolean; checkedInToday: boolean };
  checkinWeeklyChallenge: () => { success: boolean; xpEarned: number; isCompleted: boolean };
  leaderboard: LeaderboardUser[];
  achievements: AchievementItem[];
  referralData: ReferralData;
  coachMessages: CoachMessage[];
  sendCoachMessage: (messageText: string) => Promise<void>;
  isCoachTyping: boolean;
  clearCoachChat: () => void;
  currentQuote: { text: string; author: string };
  isCoachModalOpen: boolean;
  setIsCoachModalOpen: (open: boolean) => void;
  isPremiumModalOpen: boolean;
  setIsPremiumModalOpen: (open: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AtmaContext = createContext<AtmaContextType | undefined>(undefined);

const DEMO_USER: AtmaUser = {
  id: 'user_atma_001',
  email: 'chinmay@odianxt.com',
  name: 'Chinmay Sahoo',
  bio: 'Building the next digital Odisha & walking the disciplined path of self-transformation.',
  avatar_url: 'https://images.pexels.com/photos/29850610/pexels-photo-29850610.jpeg',
  level: 9,
  xp: 4200,
  weekly_xp: 680,
  streak: 28,
  freezes_left: 1,
  freezes_month: '2026-09',
  achievements: ['first_step', 'course_start', 'community', 'coach_chat', 'referred_bonus'],
  rituals_done_today: ['meditate', 'hydrate'],
  course_progress: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  referral_code: 'ATMA99X',
  referrals_count: 7,
  referrals_earned_xp: 700,
  joined_at: '2026-06-15T00:00:00Z',
  weekly_challenge_progress: {
    challenge_id: 'wc_silence',
    days_done: 4,
    completed: false,
    last_checkin: '2026-09-28'
  }
};

export const AtmaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AtmaUser | null>(DEMO_USER);
  const [rituals, setRituals] = useState<RitualItem[]>(() => {
    return INITIAL_RITUALS.map(r => ({
      ...r,
      done: DEMO_USER.rituals_done_today.includes(r.id)
    }));
  });
  const [courseLessons, setCourseLessons] = useState<CourseLesson[]>(() => {
    return INITIAL_COURSE_LESSONS.map(lesson => ({
      ...lesson,
      completed: DEMO_USER.course_progress.includes(lesson.day)
    }));
  });
  const [posts, setPosts] = useState<CommunityPost[]>(INITIAL_POSTS);
  const [comments, setComments] = useState<Record<string, PostComment[]>>({
    post_1: [
      { id: 'c1', post_id: 'post_1', user_name: 'Tanmay Barik', user_level: 6, content: 'Incredible milestone! What time do you go to sleep to wake up at 5:30 AM refreshed?', created_at: '1 hour ago' },
      { id: 'c2', post_id: 'post_1', user_name: 'Aditya Mohanty', user_level: 5, content: 'Strict digital sunset at 9:30 PM, lights out by 10:15 PM.', created_at: '45 mins ago' }
    ],
    post_2: [
      { id: 'c3', post_id: 'post_2', user_name: 'Debashish Mishra', user_level: 7, content: 'I recommend doing it in 15-minute bursts with a 5-minute conscious breath break between reflections.', created_at: '3 hours ago' }
    ]
  });

  const [activeWeeklyChallenge] = useState<WeeklyChallenge>(WEEKLY_CHALLENGES[0]);
  const [weeklyProgress, setWeeklyProgress] = useState({
    daysDone: 4,
    completed: false,
    checkedInToday: false
  });

  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>(INITIAL_LEADERBOARD);
  const [coachMessages, setCoachMessages] = useState<CoachMessage[]>([
    {
      id: 'msg_welcome',
      role: 'assistant',
      content: 'Welcome to your sacred space. I am ATMA, your transformation companion. As Marcus Aurelius reflected: "The soul becomes dyed with the color of its thoughts." What inner obstacle shall we examine together today?'
    }
  ]);
  const [isCoachTyping, setIsCoachTyping] = useState(false);

  // Modals & Active Tab
  const [isCoachModalOpen, setIsCoachModalOpen] = useState(false);
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  const currentQuote = DAILY_QUOTES[0];

  // Derived metrics
  const completedRitualsCount = rituals.filter(r => r.done).length;
  const totalRitualsCount = rituals.length;
  const ritualProgress = totalRitualsCount > 0 ? completedRitualsCount / totalRitualsCount : 0;
  const completedCourseCount = courseLessons.filter(l => l.completed).length;

  const achievements = ACHIEVEMENTS.map(ach => ({
    ...ach,
    unlocked: user ? user.achievements.includes(ach.id) : false
  }));

  const referralData: ReferralData = {
    code: user?.referral_code || 'ATMA777',
    count: user?.referrals_count || 0,
    earned_xp: user?.referrals_earned_xp || 0,
    reward_xp: 100,
    share_url: typeof window !== 'undefined' ? `${window.location.origin}/atma?ref=${user?.referral_code || 'ATMA777'}` : `https://odianxt.com/atma?ref=${user?.referral_code || 'ATMA777'}`
  };

  // Toggle ritual habit
  const toggleRitual = useCallback((id: string) => {
    setRituals(prev => {
      const next = prev.map(r => r.id === id ? { ...r, done: !r.done } : r);
      const targeted = next.find(r => r.id === id);
      const isNowDone = targeted?.done;
      const xpDelta = isNowDone ? (targeted?.xp || 20) : -(targeted?.xp || 20);

      // Update user XP and level
      setUser(u => {
        if (!u) return u;
        const newDone = isNowDone
          ? [...new Set([...u.rituals_done_today, id])]
          : u.rituals_done_today.filter(x => x !== id);
        const newXp = Math.max(0, u.xp + xpDelta);
        const newWeeklyXp = Math.max(0, u.weekly_xp + xpDelta);
        const newLevel = 1 + Math.floor(newXp / 500);
        return {
          ...u,
          xp: newXp,
          weekly_xp: newWeeklyXp,
          level: newLevel,
          rituals_done_today: newDone
        };
      });

      return next;
    });
  }, []);

  // Complete a Course Lesson
  const completeLesson = useCallback((day: number, reflection?: string) => {
    setCourseLessons(prev => {
      return prev.map(l => {
        if (l.day === day) {
          return { ...l, completed: true };
        }
        return l;
      });
    });

    setUser(u => {
      if (!u) return u;
      const already = u.course_progress.includes(day);
      if (already) return u;
      const newProgress = [...u.course_progress, day];
      const newXp = u.xp + 50;
      const newLevel = 1 + Math.floor(newXp / 500);
      const newAch = [...u.achievements];
      if (newProgress.length >= 21 && !newAch.includes('course_complete')) {
        newAch.push('course_complete');
      }
      return {
        ...u,
        xp: newXp,
        level: newLevel,
        course_progress: newProgress,
        achievements: newAch
      };
    });
  }, []);

  // Add Community Post
  const addPost = useCallback((content: string, category: 'wins' | 'q&a' | 'general', imageUrl?: string) => {
    if (!content.trim()) return;
    const newPost: CommunityPost = {
      id: `post_${Date.now()}`,
      user_name: user?.name || 'Seeker',
      user_level: user?.level || 1,
      content: content.trim(),
      category,
      image_url: imageUrl || null,
      like_count: 0,
      liked_by_me: false,
      comment_count: 0,
      created_at: 'Just now'
    };
    setPosts(prev => [newPost, ...prev]);

    // Award voice of tribe achievement
    setUser(u => {
      if (!u) return u;
      const newAch = u.achievements.includes('community') ? u.achievements : [...u.achievements, 'community'];
      return { ...u, achievements: newAch, xp: u.xp + 25, level: 1 + Math.floor((u.xp + 25) / 500) };
    });
  }, [user]);

  // Toggle Post Like
  const toggleLikePost = useCallback((postId: string) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const nextLiked = !p.liked_by_me;
        return {
          ...p,
          liked_by_me: nextLiked,
          like_count: p.like_count + (nextLiked ? 1 : -1)
        };
      }
      return p;
    }));
  }, []);

  // Add Comment
  const addComment = useCallback((postId: string, content: string) => {
    if (!content.trim()) return;
    const newComment: PostComment = {
      id: `c_${Date.now()}`,
      post_id: postId,
      user_name: user?.name || 'Seeker',
      user_level: user?.level || 1,
      content: content.trim(),
      created_at: 'Just now'
    };
    setComments(prev => ({
      ...prev,
      [postId]: [...(prev[postId] || []), newComment]
    }));
    setPosts(prev => prev.map(p => p.id === postId ? { ...p, comment_count: p.comment_count + 1 } : p));
  }, [user]);

  // Weekly Challenge Check-in
  const checkinWeeklyChallenge = useCallback(() => {
    if (weeklyProgress.checkedInToday) {
      return { success: false, xpEarned: 0, isCompleted: false };
    }
    const newDaysDone = Math.min(activeWeeklyChallenge.days, weeklyProgress.daysDone + 1);
    const isCompleted = newDaysDone >= activeWeeklyChallenge.days;
    const xpReward = isCompleted ? activeWeeklyChallenge.xp_bonus : 50;

    setWeeklyProgress({
      daysDone: newDaysDone,
      completed: isCompleted,
      checkedInToday: true
    });

    setUser(u => {
      if (!u) return u;
      const newXp = u.xp + xpReward;
      return {
        ...u,
        xp: newXp,
        level: 1 + Math.floor(newXp / 500),
        weekly_xp: u.weekly_xp + xpReward
      };
    });

    return { success: true, xpEarned: xpReward, isCompleted };
  }, [weeklyProgress, activeWeeklyChallenge]);

  // AI Coach Chat
  const sendCoachMessage = useCallback(async (messageText: string) => {
    if (!messageText.trim()) return;
    const userMsg: CoachMessage = {
      id: `u_${Date.now()}`,
      role: 'user',
      content: messageText.trim(),
      created_at: 'Just now'
    };
    setCoachMessages(prev => [...prev, userMsg]);
    setIsCoachTyping(true);

    // Contextual responses reflecting the elite Stoic/Rumi wellness personality of ATMA
    setTimeout(() => {
      let reply = "";
      const lower = messageText.toLowerCase();
      if (lower.includes("morning") || lower.includes("ritual")) {
        reply = "Begin before the world demands your attention. Protect the first 60 minutes after waking: no screens, 10 deep diaphragmatic breaths, and absolute clarity on your singular highest-impact action today. When you master your morning, you master your destiny.";
      } else if (lower.includes("stuck") || lower.includes("resistance") || lower.includes("procrastinat")) {
        reply = "Resistance is not a wall; it is a compass. It points directly toward the work your soul most urgently needs to execute. What is the smallest, easiest 2-minute action you can take right now without overthinking?";
      } else if (lower.includes("emotion") || lower.includes("fear") || lower.includes("anxious")) {
        reply = "Do not fight the storm within; become the silent observer beneath it. Emotion is energy in motion. Sit with the sensation in your chest or stomach for 3 full minutes without creating a story around it. What does the feeling ask of you?";
      } else {
        reply = "You hold the answers you seek. Strip away the noise of haste and comparison. What is the one truth you have been avoiding confronting today? Let us examine it with quiet courage.";
      }

      const aiMsg: CoachMessage = {
        id: `ai_${Date.now()}`,
        role: 'assistant',
        content: reply,
        created_at: 'Just now'
      };
      setCoachMessages(prev => [...prev, aiMsg]);
      setIsCoachTyping(false);
    }, 900);
  }, []);

  const clearCoachChat = useCallback(() => {
    setCoachMessages([
      {
        id: 'msg_welcome',
        role: 'assistant',
        content: 'Welcome to your sacred space. I am ATMA, your transformation companion. How may I walk beside you today?'
      }
    ]);
  }, []);

  // Auth actions
  const login = (email: string, name?: string) => {
    setUser({
      ...DEMO_USER,
      email,
      name: name || email.split('@')[0] || 'Seeker'
    });
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
  };

  const updateBio = (newBio: string) => {
    setUser(u => u ? { ...u, bio: newBio } : null);
  };

  return (
    <AtmaContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        updateBio,
        rituals,
        toggleRitual,
        completedRitualsCount,
        totalRitualsCount,
        ritualProgress,
        courseLessons,
        completeLesson,
        completedCourseCount,
        posts,
        addPost,
        toggleLikePost,
        comments,
        addComment,
        activeWeeklyChallenge,
        weeklyProgress,
        checkinWeeklyChallenge,
        leaderboard,
        achievements,
        referralData,
        coachMessages,
        sendCoachMessage,
        isCoachTyping,
        clearCoachChat,
        currentQuote,
        isCoachModalOpen,
        setIsCoachModalOpen,
        isPremiumModalOpen,
        setIsPremiumModalOpen,
        isAuthModalOpen,
        setIsAuthModalOpen,
        activeTab,
        setActiveTab
      }}
    >
      {children}
    </AtmaContext.Provider>
  );
};

export const useAtma = () => {
  const context = useContext(AtmaContext);
  if (!context) {
    throw new Error('useAtma must be used within an AtmaProvider');
  }
  return context;
};
