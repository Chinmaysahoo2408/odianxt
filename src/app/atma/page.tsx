'use client';

import React, { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { AtmaProvider, useAtma } from '@/lib/atma/store';
import { AtmaWebShell } from '@/components/atma/AtmaWebShell';

function AtmaRouteInitializer() {
  const searchParams = useSearchParams();
  const { setActiveTab, setIsAuthModalOpen, setIsPremiumModalOpen } = useAtma();

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      setActiveTab(tabParam);
    }
    if (searchParams.get('auth') === 'true') {
      setIsAuthModalOpen(true);
    }
    if (searchParams.get('premium') === 'true') {
      setIsPremiumModalOpen(true);
    }
  }, [searchParams, setActiveTab, setIsAuthModalOpen, setIsPremiumModalOpen]);

  return <AtmaWebShell />;
}

export default function AtmaPage() {
  return (
    <AtmaProvider>
      <Suspense fallback={<div className="min-h-screen bg-[#050505] flex items-center justify-center text-[#D4AF37]">Loading ATMA...</div>}>
        <AtmaRouteInitializer />
      </Suspense>
    </AtmaProvider>
  );
}
