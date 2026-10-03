'use client';

import React, { useState, useMemo } from 'react';
import { useEcosystem } from '@/lib/store';
import { AppCard } from './AppCard';
import { Search, PlusCircle, Sparkles, Layers } from 'lucide-react';

export const EcosystemShowcase: React.FC = () => {
  const { apps, playSound, setIsAdminOpen } = useEcosystem();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const set = new Set(apps.map(a => a.category));
    return ['All', ...Array.from(set)];
  }, [apps]);

  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const matchActive = app.isActive;
      const matchCat = selectedCategory === 'All' || app.category === selectedCategory;
      const matchStatus = selectedStatus === 'All' || app.status === selectedStatus;
      const matchSearch =
        searchQuery.trim() === '' ||
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchActive && matchCat && matchStatus && matchSearch;
    });
  }, [apps, selectedCategory, selectedStatus, searchQuery]);

  return (
    <section id="ecosystem" className="py-24 relative bg-[#09090b] border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="hues-eyebrow mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>— CENTRALIZED ECOSYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
              One Unified Studio.{' '}
              <span className="text-[#ff6b4a] italic font-black">
                {apps.length === 5 ? 'Five' : apps.length === 4 ? 'Four' : apps.length} Flagships.
              </span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-stone-400 max-w-xl font-normal">
              High-throughput digital applications engineered with studio precision, connecting mobility, industrial commerce, luxury crafts & fashion, stray welfare, and temple heritage.
            </p>
          </div>

          {/* CMS Admin Studio Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                playSound('click');
                setIsAdminOpen(true);
              }}
              onMouseEnter={() => playSound('hover')}
              className="px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#111114] hover:bg-[#18181c] text-stone-300 hover:text-white border border-white/15 transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <PlusCircle className="w-4 h-4 text-[#ff6b4a]" />
              <span>MANAGE PLATFORMS & SCHEMA</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Toolbar */}
        <div className="mb-10 p-4 rounded-xl bg-[#111114] border border-white/10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search apps, modules, tech..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#18181c] border border-white/10 text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:border-[#ff6b4a] transition-all"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  playSound('click');
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#ff6b4a] text-white font-bold shadow-[0_0_15px_rgba(255,107,74,0.4)]'
                    : 'bg-[#18181c] text-stone-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <span className="text-xs uppercase tracking-wider text-stone-400 hidden sm:inline">Status:</span>
            <select
              value={selectedStatus}
              onChange={e => {
                playSound('click');
                setSelectedStatus(e.target.value);
              }}
              className="px-3 py-1.5 rounded-lg bg-[#18181c] border border-white/10 text-xs text-white uppercase focus:outline-none focus:border-[#ff6b4a]"
            >
              <option value="All" className="bg-[#111114]">All Statuses</option>
              <option value="live" className="bg-[#111114]">Live</option>
              <option value="beta" className="bg-[#111114]">Beta</option>
              <option value="in_development" className="bg-[#111114]">In Development</option>
              <option value="coming_soon" className="bg-[#111114]">Coming Soon</option>
            </select>
          </div>
        </div>

        {/* Dynamic Applications Grid */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {filteredApps.map((app, index) => (
              <AppCard key={app.id} app={app} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-2xl bg-[#111114] border border-dashed border-white/15">
            <Sparkles className="w-8 h-8 text-[#ff6b4a] mx-auto mb-3" />
            <p className="text-base text-white font-bold">No applications match your filter</p>
            <p className="text-xs text-stone-400 mt-1">Try resetting the category filter or search query</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedStatus('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#ff6b4a] text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

