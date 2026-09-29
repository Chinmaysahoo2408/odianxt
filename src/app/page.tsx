'use client';

import React from 'react';
import { DynamicNavbar } from '@/components/layout/DynamicNavbar';
import { CinematicHero } from '@/components/hero/CinematicHero';
import { EcosystemShowcase } from '@/components/ecosystem/EcosystemShowcase';
import { AtmaSection } from '@/components/apps/AtmaSection';
import { MahalaxmiSection } from '@/components/apps/MahalaxmiSection';
import { PetAppSection } from '@/components/apps/PetAppSection';
import { TempleAppSection } from '@/components/apps/TempleAppSection';
import { InteractiveOdishaMap } from '@/components/map/InteractiveOdishaMap';
import { LiveDashboard } from '@/components/dashboard/LiveDashboard';
import { DynamicFooter } from '@/components/layout/DynamicFooter';
import { AppDetailModal } from '@/components/modals/AppDetailModal';
import { AdminDashboardModal } from '@/components/admin/AdminDashboardModal';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#05070d] text-slate-100 selection:bg-cyan-400 selection:text-black">
      {/* Dynamic Sticky Glassmorphic Navbar */}
      <DynamicNavbar />

      {/* Cinematic Hero with Animated Interactive Ecosystem Centerpiece */}
      <CinematicHero />

      {/* Dynamic Application Ecosystem Showcase & Search/Filter Grid */}
      <EcosystemShowcase />

      {/* Dedicated Immersive Section: ATMA (Urban Mobility & Navigation) */}
      <AtmaSection />

      {/* Dedicated Immersive Section: MAHALAXMI (Genuine Spares & Industrial Fitment) */}
      <MahalaxmiSection />

      {/* Dedicated Immersive Section: PET APP (Companion Animal & Stray Welfare) */}
      <PetAppSection />

      {/* Dedicated Immersive Section: TEMPLE APP (Sacred Kalinga Heritage & Darshan Guide) */}
      <TempleAppSection />

      {/* Interactive Regional Odisha & India Map */}
      <InteractiveOdishaMap />

      {/* Live Ecosystem Dashboard & System Telemetry */}
      <LiveDashboard />

      {/* Comprehensive Ecosystem Footer */}
      <DynamicFooter />

      {/* Deep-Dive App Specification Modal */}
      <AppDetailModal />

      {/* Content Management / Architecture Studio Modal */}
      <AdminDashboardModal />
    </main>
  );
}
