import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    name: 'ATMA',
    slug: 'atma',
    tagline: 'AI-Powered Self-Transformation Platform',
    status: 'live',
    version: '1.4.0',
    description:
      'A cinematic, luxury wellness experience combining daily rituals, 21-day structured transformation courses, Skool-style community accountability, weekly quests, real rewards, and an AI-powered personal coach.',
    websiteUrl: '/atma',
    ecosystem: 'OdiaNXT',
    category: 'Wellness & Human Potential',
    pillars: [
      'Physical Discipline',
      'Mental Clarity',
      'Emotional Mastery',
      'Subconscious Rewiring'
    ],
    designPersonality: '6 Glass / Luxe DARK',
    colors: {
      primary: '#050505',
      accent: '#D4AF37',
      secondary: '#115E41',
      surface: '#121212'
    },
    features: [
      'Daily Ritual Progress Ring',
      '21-Day Transformation Course (Video + Audio)',
      'Community Tribe & Feed',
      'Weekly Discipline Quests',
      'Ranks & XP Leaderboards',
      'ATMA AI Transformation Coach',
      'Peer Referral System'
    ]
  });
}
