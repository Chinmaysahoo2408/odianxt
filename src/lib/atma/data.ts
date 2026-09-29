import { CourseLesson, RitualItem, AchievementItem, WeeklyChallenge, CommunityPost } from './types';

export const INITIAL_RITUALS: RitualItem[] = [
  { id: 'meditate', title: 'Morning Meditation', duration: '10 min', xp: 20, icon: 'Leaf', done: false },
  { id: 'journal', title: 'Gratitude Journal', duration: '5 min', xp: 15, icon: 'BookOpen', done: false },
  { id: 'workout', title: 'Movement Practice', duration: '20 min', xp: 25, icon: 'Activity', done: false },
  { id: 'read', title: 'Read 10 Pages', duration: '15 min', xp: 15, icon: 'BookMarked', done: false },
  { id: 'hydrate', title: 'Drink 8 Glasses of Water', duration: 'All day', xp: 10, icon: 'Droplets', done: false },
];

export const SAMPLE_VIDEOS = [
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
];

export const SAMPLE_AUDIO = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
];

export const COURSE_DAYS_METADATA = [
  { day: 1, title: 'The Awakening', subtitle: 'Discover the seed of transformation within.', duration: '12 min' },
  { day: 2, title: 'The Mirror', subtitle: 'Confront the stories you tell yourself.', duration: '15 min' },
  { day: 3, title: 'Breath of Life', subtitle: 'Master the ancient art of conscious breathing.', duration: '10 min' },
  { day: 4, title: 'Silent Discipline', subtitle: 'Build unshakeable morning rituals.', duration: '14 min' },
  { day: 5, title: 'Emotional Alchemy', subtitle: 'Transmute pain and resistance into power.', duration: '18 min' },
  { day: 6, title: 'The Focused Mind', subtitle: 'Deep work and single-pointed attention.', duration: '16 min' },
  { day: 7, title: 'Body as Temple', subtitle: 'Movement, somatic awareness, and vitality.', duration: '20 min' },
  { day: 8, title: 'Digital Detox', subtitle: 'Reclaim your attention from the algorithm.', duration: '12 min' },
  { day: 9, title: 'Sacred Boundaries', subtitle: 'The art of saying no with clarity and grace.', duration: '15 min' },
  { day: 10, title: 'Shadow Work', subtitle: 'Integrate the hidden parts you have resisted.', duration: '22 min' },
  { day: 11, title: 'The Inner Warrior', subtitle: 'Cultivate stillness and courage in the face of fear.', duration: '17 min' },
  { day: 12, title: 'Forgiveness Practice', subtitle: 'Release emotional baggage and ancient grievances.', duration: '19 min' },
  { day: 13, title: 'The Vision', subtitle: 'Design your transformed self across all 4 pillars.', duration: '18 min' },
  { day: 14, title: 'Aligned Action', subtitle: 'Move from passive wishing into disciplined momentum.', duration: '16 min' },
  { day: 15, title: 'The Circle', subtitle: 'Curate a tribe of extraordinary, high-frequency peers.', duration: '14 min' },
  { day: 16, title: 'Radical Honesty', subtitle: 'Live in absolute alignment with your truth.', duration: '20 min' },
  { day: 17, title: 'Flow State Mastery', subtitle: 'Access effortless peak performance on demand.', duration: '18 min' },
  { day: 18, title: 'Wealth Consciousness', subtitle: 'Rewire your subconscious relationship with abundance.', duration: '16 min' },
  { day: 19, title: 'The Anchor Ceremony', subtitle: 'Embody physical rituals that lock in your new identity.', duration: '15 min' },
  { day: 20, title: 'Integration', subtitle: 'Weave every transformation principle into daily living.', duration: '20 min' },
  { day: 21, title: 'The Return', subtitle: 'Emerge transformed. Continue the sacred journey.', duration: '25 min' },
];

export const INITIAL_COURSE_LESSONS: CourseLesson[] = COURSE_DAYS_METADATA.map((meta, index) => ({
  day: meta.day,
  title: meta.title,
  subtitle: meta.subtitle,
  duration: meta.duration,
  xp: 50,
  video_url: SAMPLE_VIDEOS[index % SAMPLE_VIDEOS.length],
  audio_url: SAMPLE_AUDIO[index % SAMPLE_AUDIO.length],
  completed: index === 0, // Day 1 completed by default
  content: [
    `Welcome to Day ${meta.day}: ${meta.title}.`,
    `Transformation is not an event; it is the deliberate recalibration of your inner architecture. As Marcus Aurelius wrote: 'You have power over your mind - not outside events. Realize this, and you will find strength.'`,
    `Today we anchor our awareness into this core principle: ${meta.subtitle} Spend time with the guided video, complete your breath contemplation, and record your honest reflection in the journal below.`
  ],
  checklist: [
    `Watch or listen to today's ${meta.duration} guided wisdom transmission`,
    `Spend 5 uninterrupted minutes in quiet somatic contemplation`,
    `Write down your single biggest breakthrough in your journal reflection`
  ],
  reflectionPrompt: `What did today's lesson reveal about your current patterns, and what is one small choice you will make differently today?`
}));

export const ACHIEVEMENTS: AchievementItem[] = [
  { id: 'first_step', title: 'First Step', desc: 'Complete your first daily ritual', icon: 'Sparkles', color: '#D4AF37', unlocked: true },
  { id: 'week_streak', title: '7-Day Warrior', desc: 'Maintain an unbroken 7-day streak', icon: 'Flame', color: '#D4AF37', unlocked: false },
  { id: 'course_start', title: 'The Journey Begins', desc: 'Complete Day 1 of the 21-day course', icon: 'Star', color: '#115E41', unlocked: true },
  { id: 'course_complete', title: 'Transformed', desc: 'Complete all 21 days of the course', icon: 'Trophy', color: '#D4AF37', unlocked: false },
  { id: 'community', title: 'Voice of the Tribe', desc: 'Post a breakthrough in the community feed', icon: 'Users', color: '#115E41', unlocked: true },
  { id: 'coach_chat', title: 'Inner Dialogue', desc: 'Engage in a session with the ATMA AI Coach', icon: 'MessageSquare', color: '#D4AF37', unlocked: true },
  { id: 'recruiter', title: 'Guide', desc: 'Refer a peer who completes their first ritual', icon: 'Gift', color: '#D4AF37', unlocked: false },
  { id: 'referred_bonus', title: 'Answered the Call', desc: 'Joined ATMA via an invitation from a peer', icon: 'ShieldCheck', color: '#115E41', unlocked: true },
];

export const WEEKLY_CHALLENGES: WeeklyChallenge[] = [
  {
    id: 'wc_silence',
    title: 'The Vow of Silence',
    subtitle: 'Spend 30 minutes in complete silent contemplation every day this week.',
    xp_bonus: 250,
    days: 7,
    icon: 'Moon',
    week: '2026-W40',
    instructions: [
      'Find a quiet, uninterrupted space without screens or phones.',
      'Sit comfortably and observe the breath without judgment.',
      'Allow thoughts to pass like clouds across the sky.',
      'Record your reflection and check in daily.'
    ]
  },
  {
    id: 'wc_cold',
    title: 'Cold Immersion',
    subtitle: 'End every morning shower with 90 seconds of pure cold water.',
    xp_bonus: 300,
    days: 7,
    icon: 'Snowflake',
    week: '2026-W39',
    instructions: [
      'Take your regular warm shower.',
      'Turn the dial completely cold for the final 90 seconds.',
      'Focus on slow, steady diaphragmatic exhalations.',
      'Notice the immediate mental clarity and vitality.'
    ]
  },
  {
    id: 'wc_gratitude',
    title: 'Radical Gratitude',
    subtitle: 'Write three specific gratitudes each morning before touching any screen.',
    xp_bonus: 200,
    days: 7,
    icon: 'Heart',
    week: '2026-W38',
    instructions: [
      'Keep pen and paper beside your bed.',
      'Do not unlock your smartphone upon waking.',
      'Write 3 micro-gratitudes with specific details.',
      'Embody the emotion of appreciation for 60 seconds.'
    ]
  }
];

export const DAILY_QUOTES = [
  { text: "You have power over your mind — not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
  { text: "The wound is the place where the Light enters you.", author: "Rumi" },
  { text: "We do not rise to the level of our expectations; we fall to the level of our training.", author: "Archilochus" },
  { text: "Silence is the language of God, all else is poor translation.", author: "Rumi" },
  { text: "Mastering others is strength. Mastering yourself is true power.", author: "Lao Tzu" },
];

export const INITIAL_POSTS: CommunityPost[] = [
  {
    id: 'post_1',
    user_name: 'Aditya Mohanty',
    user_level: 5,
    content: 'Finished Day 14 of the 21-Day Transformation! Waking up at 5:30 AM without an alarm now feels effortless. The morning silence practice completely rewired my focus for deep work.',
    category: 'wins',
    image_url: 'https://images.unsplash.com/photo-1544502062-f82887f03d1c?crop=entropy&cs=srgb&fm=jpg&w=940&q=85',
    like_count: 24,
    liked_by_me: true,
    comment_count: 6,
    created_at: '2 hours ago'
  },
  {
    id: 'post_2',
    user_name: 'Priyanka Das',
    user_level: 3,
    content: 'Question for the tribe: How do you handle deep resistance when doing the Shadow Work exercises on Day 10? Did you write it down all at once or break it down into multiple sessions?',
    category: 'q&a',
    like_count: 15,
    liked_by_me: false,
    comment_count: 9,
    created_at: '5 hours ago'
  },
  {
    id: 'post_3',
    user_name: 'Sourav Pattnaik',
    user_level: 8,
    content: 'Week 4 of unbroken cold immersion challenge completed. The clarity and dopamine boost from the cold shower practice is unmatched. Stay consistent, brothers and sisters.',
    category: 'wins',
    like_count: 42,
    liked_by_me: true,
    comment_count: 11,
    created_at: '1 day ago'
  },
  {
    id: 'post_4',
    user_name: 'Ananya Ray',
    user_level: 4,
    content: 'Sharing a quote that helped me get through a difficult week: "No tree, it is said, can grow to heaven unless its roots reach down to hell." - C.G. Jung',
    category: 'general',
    like_count: 31,
    liked_by_me: false,
    comment_count: 4,
    created_at: '2 days ago'
  }
];

export const INITIAL_LEADERBOARD = [
  { id: 'u1', name: 'Vikramaditya Rout', xp: 4850, level: 10, streak: 34, rank: 1, is_me: false },
  { id: 'u2', name: 'Chinmay Sahoo', xp: 4200, level: 9, streak: 28, rank: 2, is_me: true },
  { id: 'u3', name: 'Meera Sengupta', xp: 3950, level: 8, streak: 21, rank: 3, is_me: false },
  { id: 'u4', name: 'Rohan Jena', xp: 3420, level: 7, streak: 19, rank: 4, is_me: false },
  { id: 'u5', name: 'Debashish Mishra', xp: 3100, level: 7, streak: 16, rank: 5, is_me: false },
  { id: 'u6', name: 'Swati Panigrahi', xp: 2890, level: 6, streak: 14, rank: 6, is_me: false },
  { id: 'u7', name: 'Tanmay Barik', xp: 2650, level: 6, streak: 12, rank: 7, is_me: false },
  { id: 'u8', name: 'Lipsa Tripathy', xp: 2310, level: 5, streak: 9, rank: 8, is_me: false },
];
