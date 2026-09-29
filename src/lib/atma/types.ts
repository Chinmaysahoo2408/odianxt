export interface AtmaUser {
  id: string;
  email: string;
  name: string;
  bio?: string;
  avatar_url?: string;
  level: number;
  xp: number;
  weekly_xp: number;
  streak: number;
  freezes_left: number;
  freezes_month?: string;
  achievements: string[];
  rituals_done_today: string[];
  course_progress: number[];
  weekly_challenge_progress?: {
    challenge_id?: string;
    days_done?: number;
    completed?: boolean;
    last_checkin?: string;
  };
  referral_code: string;
  referred_by?: string | null;
  referrals_count: number;
  referrals_earned_xp: number;
  joined_at: string;
}

export interface RitualItem {
  id: string;
  title: string;
  duration: string;
  xp: number;
  icon: string;
  done: boolean;
}

export interface CourseLesson {
  day: number;
  title: string;
  subtitle: string;
  duration: string;
  xp: number;
  video_url: string;
  audio_url: string;
  completed: boolean;
  content: string[];
  checklist: string[];
  reflectionPrompt: string;
}

export interface CommunityPost {
  id: string;
  user_name: string;
  user_level: number;
  content: string;
  category: 'wins' | 'q&a' | 'general';
  image_url?: string | null;
  like_count: number;
  liked_by_me: boolean;
  comment_count: number;
  created_at: string;
}

export interface PostComment {
  id: string;
  post_id: string;
  user_name: string;
  user_level: number;
  content: string;
  created_at: string;
}

export interface WeeklyChallenge {
  id: string;
  title: string;
  subtitle: string;
  xp_bonus: number;
  days: number;
  icon: string;
  week: string;
  instructions: string[];
}

export interface LeaderboardUser {
  id: string;
  name: string;
  avatar_url?: string;
  xp: number;
  level: number;
  streak: number;
  rank: number;
  is_me: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
  color: string;
  unlocked: boolean;
}

export interface ReferralData {
  code: string;
  count: number;
  earned_xp: number;
  reward_xp: number;
  share_url: string;
}

export interface CoachMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  created_at?: string;
}
