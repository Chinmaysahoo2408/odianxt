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
    <section id="ecosystem" className="py-24 relative bg-[#F7F3EA] border-t border-b border-[#173C35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#173C35]/8 border border-[#173C35]/15 text-[#173C35] text-xs font-mono font-semibold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>CENTRALIZED APPLICATION ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#173C35]">
              One Ecosystem.{' '}
              <span className="text-[#B85C38] italic">
                {apps.length === 4 ? 'Four' : apps.length} Experiences.
              </span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#565851] max-w-xl font-normal">
              Technology designed around real-world needs. Scalable, modular, and deeply integrated into Odisha’s digital infrastructure.
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
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#FFFFFF] hover:bg-[#F7F3EA] text-[#173C35] border border-[#173C35]/20 shadow-2xs hover:shadow-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 text-[#B85C38]" />
              <span>Manage Apps & Schema</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Toolbar */}
        <div className="mb-10 p-4 rounded-2xl bg-[#FFFFFF] border border-[#173C35]/12 shadow-2xs flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-[#565851] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search apps, modules, tech..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#F7F3EA] border border-[#173C35]/15 text-xs sm:text-sm text-[#242522] placeholder-[#565851] focus:outline-none focus:border-[#173C35] transition-all"
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
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#173C35] text-[#F7F3EA] font-bold shadow-2xs'
                    : 'bg-[#F7F3EA] text-[#565851] hover:text-[#173C35] hover:bg-[#E4EBE0] border border-[#173C35]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <span className="text-xs text-[#565851] hidden sm:inline">Status:</span>
            <select
              value={selectedStatus}
              onChange={e => {
                playSound('click');
                setSelectedStatus(e.target.value);
              }}
              className="px-3 py-1.5 rounded-xl bg-[#F7F3EA] border border-[#173C35]/15 text-xs text-[#242522] focus:outline-none focus:border-[#173C35]"
            >
              <option value="All">All Statuses</option>
              <option value="live">Live</option>
              <option value="beta">Beta</option>
              <option value="in_development">In Development</option>
              <option value="coming_soon">Coming Soon</option>
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
          <div className="text-center py-16 px-4 rounded-2xl bg-[#FFFFFF] border border-dashed border-[#173C35]/20">
            <Sparkles className="w-8 h-8 text-[#B85C38] mx-auto mb-3" />
            <p className="text-base text-[#242522] font-semibold">No applications match your filter</p>
            <p className="text-xs text-[#565851] mt-1">Try resetting the category filter or search query</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedStatus('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-[#173C35] text-[#F7F3EA]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
