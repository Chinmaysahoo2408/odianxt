'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { OdiaApp, LocationNode, EcosystemMetrics, EcosystemAnnouncement } from './types';
import { INITIAL_APPS, INITIAL_LOCATIONS, INITIAL_METRICS, INITIAL_ANNOUNCEMENTS } from './initialData';
import { sound } from './sound';

interface EcosystemContextType {
  apps: OdiaApp[];
  locations: LocationNode[];
  metrics: EcosystemMetrics;
  announcements: EcosystemAnnouncement[];
  soundMuted: boolean;
  activeAppModal: OdiaApp | null;
  activeLocation: LocationNode | null;
  selectedCategory: string;
  searchQuery: string;
  isAdminOpen: boolean;
  
  // Actions
  setSoundMuted: (muted: boolean) => void;
  toggleSound: () => void;
  playSound: (type: 'click' | 'hover' | 'atma' | 'mahalaxmi' | 'pet' | 'temple' | 'iraya' | 'ecosystem') => void;
  setActiveAppModal: (app: OdiaApp | null) => void;
  setActiveLocation: (loc: LocationNode | null) => void;
  setSelectedCategory: (cat: string) => void;
  setSearchQuery: (query: string) => void;
  setIsAdminOpen: (open: boolean) => void;
  
  // Admin App CRUD
  addApp: (app: OdiaApp) => void;
  updateApp: (id: string, partial: Partial<OdiaApp>) => void;
  deleteApp: (id: string) => void;
  toggleAppActive: (id: string) => void;
  reorderApps: (reordered: OdiaApp[]) => void;
  
  // Admin Map & Metrics
  addLocation: (loc: LocationNode) => void;
  updateLocation: (id: string, partial: Partial<LocationNode>) => void;
  updateMetrics: (partial: Partial<EcosystemMetrics>) => void;
  resetToDefaults: () => void;
}

const EcosystemContext = createContext<EcosystemContextType | null>(null);

const STORAGE_KEYS = {
  APPS: 'odianxt_apps_v3',
  LOCATIONS: 'odianxt_locations_v3',
  METRICS: 'odianxt_metrics_v3',
  SOUND: 'odianxt_sound_muted_v3'
};

export const EcosystemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [apps, setApps] = useState<OdiaApp[]>(INITIAL_APPS);
  const [locations, setLocations] = useState<LocationNode[]>(INITIAL_LOCATIONS);
  const [metrics, setMetrics] = useState<EcosystemMetrics>(INITIAL_METRICS);
  const [announcements] = useState<EcosystemAnnouncement[]>(INITIAL_ANNOUNCEMENTS);
  const [soundMuted, setSoundMutedState] = useState<boolean>(true);
  const [activeAppModal, setActiveAppModal] = useState<OdiaApp | null>(null);
  const [activeLocation, setActiveLocation] = useState<LocationNode | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const savedApps = localStorage.getItem(STORAGE_KEYS.APPS);
      if (savedApps) {
        const parsed: OdiaApp[] = JSON.parse(savedApps);
        const existingIds = new Set(parsed.map(a => a.id));
        const missingDefaults = INITIAL_APPS.filter(a => !existingIds.has(a.id));
        setApps([...parsed, ...missingDefaults]);
      } else {
        setApps(INITIAL_APPS);
      }

      const savedLocs = localStorage.getItem(STORAGE_KEYS.LOCATIONS);
      if (savedLocs) setLocations(JSON.parse(savedLocs));

      const savedMetrics = localStorage.getItem(STORAGE_KEYS.METRICS);
      if (savedMetrics) setMetrics(JSON.parse(savedMetrics));

      const savedSound = localStorage.getItem(STORAGE_KEYS.SOUND);
      if (savedSound !== null) {
        const isMuted = JSON.parse(savedSound);
        setSoundMutedState(isMuted);
        sound.setMuted(isMuted);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save to localStorage when state changes after initial hydration
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEYS.APPS, JSON.stringify(apps));
    } catch {}
  }, [apps, isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEYS.LOCATIONS, JSON.stringify(locations));
    } catch {}
  }, [locations, isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEYS.METRICS, JSON.stringify(metrics));
    } catch {}
  }, [metrics, isHydrated]);

  const setSoundMuted = (muted: boolean) => {
    setSoundMutedState(muted);
    sound.setMuted(muted);
    try {
      localStorage.setItem(STORAGE_KEYS.SOUND, JSON.stringify(muted));
    } catch {}
  };

  const toggleSound = () => {
    const nextState = !soundMuted;
    setSoundMuted(nextState);
  };

  const playSound = (type: 'click' | 'hover' | 'atma' | 'mahalaxmi' | 'pet' | 'temple' | 'iraya' | 'ecosystem') => {
    switch (type) {
      case 'click':
        sound.playClick();
        break;
      case 'hover':
        sound.playHover();
        break;
      case 'atma':
        sound.playAtma();
        break;
      case 'mahalaxmi':
        sound.playMahalaxmi();
        break;
      case 'pet':
        sound.playPet();
        break;
      case 'temple':
        sound.playTemple();
        break;
      case 'iraya':
        sound.playIraya();
        break;
      case 'ecosystem':
        sound.playEcosystemPulse();
        break;
    }
  };

  const addApp = (newApp: OdiaApp) => {
    setApps(prev => {
      const updated = [...prev, { ...newApp, order: prev.length + 1 }];
      return updated;
    });
    setMetrics(prev => ({ ...prev, totalApps: prev.totalApps + 1 }));
  };

  const updateApp = (id: string, partial: Partial<OdiaApp>) => {
    setApps(prev => prev.map(a => (a.id === id ? { ...a, ...partial } : a)));
    if (activeAppModal && activeAppModal.id === id) {
      setActiveAppModal(prev => (prev ? { ...prev, ...partial } : null));
    }
  };

  const deleteApp = (id: string) => {
    setApps(prev => prev.filter(a => a.id !== id));
    setMetrics(prev => ({ ...prev, totalApps: Math.max(0, prev.totalApps - 1) }));
    if (activeAppModal && activeAppModal.id === id) {
      setActiveAppModal(null);
    }
  };

  const toggleAppActive = (id: string) => {
    setApps(prev => prev.map(a => (a.id === id ? { ...a, isActive: !a.isActive } : a)));
  };

  const reorderApps = (reordered: OdiaApp[]) => {
    setApps(reordered.map((app, index) => ({ ...app, order: index + 1 })));
  };

  const addLocation = (loc: LocationNode) => {
    setLocations(prev => [...prev, loc]);
  };

  const updateLocation = (id: string, partial: Partial<LocationNode>) => {
    setLocations(prev => prev.map(l => (l.id === id ? { ...l, ...partial } : l)));
  };

  const updateMetrics = (partial: Partial<EcosystemMetrics>) => {
    setMetrics(prev => ({ ...prev, ...partial }));
  };

  const resetToDefaults = () => {
    setApps(INITIAL_APPS);
    setLocations(INITIAL_LOCATIONS);
    setMetrics(INITIAL_METRICS);
    try {
      localStorage.removeItem(STORAGE_KEYS.APPS);
      localStorage.removeItem(STORAGE_KEYS.LOCATIONS);
      localStorage.removeItem(STORAGE_KEYS.METRICS);
    } catch {}
  };

  return (
    <EcosystemContext.Provider
      value={{
        apps,
        locations,
        metrics,
        announcements,
        soundMuted,
        activeAppModal,
        activeLocation,
        selectedCategory,
        searchQuery,
        isAdminOpen,
        setSoundMuted,
        toggleSound,
        playSound,
        setActiveAppModal,
        setActiveLocation,
        setSelectedCategory,
        setSearchQuery,
        setIsAdminOpen,
        addApp,
        updateApp,
        deleteApp,
        toggleAppActive,
        reorderApps,
        addLocation,
        updateLocation,
        updateMetrics,
        resetToDefaults,
      }}
    >
      {children}
    </EcosystemContext.Provider>
  );
};

export const useEcosystem = () => {
  const context = useContext(EcosystemContext);
  if (!context) {
    throw new Error('useEcosystem must be used within an EcosystemProvider');
  }
  return context;
};
