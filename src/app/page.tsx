'use client';

import React from 'react';
import { DynamicNavbar } from '@/components/layout/DynamicNavbar';
import { CinematicHero } from '@/components/hero/CinematicHero';
import { ShowreelsSection } from '@/components/showreels/ShowreelsSection';
import { EcosystemShowcase } from '@/components/ecosystem/EcosystemShowcase';
import { AtmaSection } from '@/components/apps/AtmaSection';
import { MahalaxmiSection } from '@/components/apps/MahalaxmiSection';
import { PetAppSection } from '@/components/apps/PetAppSection';
import { TempleAppSection } from '@/components/apps/TempleAppSection';
import { ProcessSection } from '@/components/process/ProcessSection';
import { InteractiveOdishaMap } from '@/components/map/InteractiveOdishaMap';
import { LiveDashboard } from '@/components/dashboard/LiveDashboard';
import { ContactSection } from '@/components/contact/ContactSection';
import { DynamicFooter } from '@/components/layout/DynamicFooter';
import { AppDetailModal } from '@/components/modals/AppDetailModal';
import { AdminDashboardModal } from '@/components/admin/AdminDashboardModal';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-[#ff6b4a] selection:text-white">
      {/* Dynamic Sticky Glassmorphic Navbar */}
      <DynamicNavbar />

      {/* Cinematic Hero with Ambient Ember Glow & Ecosystem Centerpiece */}
      <CinematicHero />

      {/* Signature HuesPost Showreels Showcase & 4K Video Player Modal */}
      <ShowreelsSection />

      {/* Centralized Application Architecture & Filter Grid */}
      <EcosystemShowcase />

      {/* Dedicated Immersive Section: ATMA (Urban Mobility & Navigation) */}
      <AtmaSection />

      {/* Dedicated Immersive Section: MAHALAXMI (Genuine Spares & Industrial Fitment) */}
      <MahalaxmiSection />

      {/* Dedicated Immersive Section: PET APP (Companion Animal & Stray Welfare) */}
      <PetAppSection />

      {/* Dedicated Immersive Section: TEMPLE APP (Sacred Kalinga Heritage & Darshan Guide) */}
      <TempleAppSection />

      {/* HuesPost Signature 4-Step Process Section with Huge Numbers */}
      <ProcessSection />

      {/* Interactive Regional Odisha & India Map */}
      <InteractiveOdishaMap />

      {/* Live Ecosystem Dashboard & System Telemetry */}
      <LiveDashboard />

      {/* HuesPost Signature Split Contact Section (Coral Panel + Dark Form) */}
      <ContactSection />

      {/* Comprehensive Studio Footer */}
      <DynamicFooter />

      {/* Deep-Dive App Specification Modal */}
      <AppDetailModal />

      {/* Content Management / Architecture Studio Modal */}
      <AdminDashboardModal />
    </main>
  );
}

