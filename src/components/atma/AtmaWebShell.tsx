'use client';

import React from 'react';
import { useAtma } from '@/lib/atma/store';
import { OdiaNxtTopBar } from './OdiaNxtTopBar';
import { DesktopSidebar } from './DesktopSidebar';
import { MobileBottomNav } from './MobileBottomNav';
import { FloatingCoachFAB } from './FloatingCoachFAB';
import { HomeDashboard } from './HomeDashboard';
import { CourseSection } from './CourseSection';
import { CommunitySection } from './CommunitySection';
import { WeeklySection } from './WeeklySection';
import { LeaderboardSection } from './LeaderboardSection';
import { ProfileSection } from './ProfileSection';
import { CoachSection, CoachModal } from './CoachModal';
import { PremiumSection, PremiumModal } from './PremiumModal';
import { AuthModal } from './AuthModal';

export const AtmaWebShell: React.FC = () => {
  const { activeTab } = useAtma();

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <HomeDashboard />;
      case 'course':
        return <CourseSection />;
      case 'community':
        return <CommunitySection />;
      case 'weekly':
        return <WeeklySection />;
      case 'leaderboard':
        return <LeaderboardSection />;
      case 'coach':
        return <CoachSection />;
      case 'profile':
        return <ProfileSection />;
      case 'premium':
        return <PremiumSection />;
      default:
        return <HomeDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F7F7F7] font-geist selection:bg-[#D4AF37] selection:text-[#050505] relative overflow-x-hidden">
      {/* Top Bar with OdiaNXT ecosystem link */}
      <OdiaNxtTopBar />

      <div className="flex">
        {/* Desktop Left Sidebar */}
        <DesktopSidebar />

        {/* Main Application Content Area */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto">
          {renderActiveTabContent()}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />

      {/* Floating Action Button for AI Coach */}
      <FloatingCoachFAB />

      {/* Global Modals */}
      <CoachModal />
      <PremiumModal />
      <AuthModal />
    </div>
  );
};
