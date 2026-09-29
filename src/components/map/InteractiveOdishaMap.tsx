'use client';

import React, { useState } from 'react';
import { useEcosystem } from '@/lib/store';
import { LocationNode } from '@/lib/types';
import {
  Compass,
  ChevronRight
} from 'lucide-react';

export const InteractiveOdishaMap: React.FC = () => {
  const { locations, apps, playSound, setActiveAppModal } = useEcosystem();
  const [selectedLocation, setSelectedLocation] = useState<LocationNode>(locations[0]);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = ['All', 'Coastal Odisha', 'Western Odisha', 'Northern Odisha', 'Southern Odisha'];

  const filteredLocations = locations.filter(
    loc => selectedRegion === 'All' || loc.region === selectedRegion
  );

  return (
    <section id="map" className="py-28 relative bg-[#F7F3EA] border-b border-[#173C35]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#173C35]/8 border border-[#173C35]/15 text-[#173C35] text-xs font-mono font-bold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>DISTRIBUTED REGIONAL GRID</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#173C35]">
            Built for Odisha.{' '}
            <span className="text-[#B85C38] italic">
              Ready for the World.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#565851] font-normal">
            Interactive spatial map connecting OdiaNXT ecosystem applications with districts, urban corridors, and cultural hubs across Odisha.
          </p>

          {/* Region Filters */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {regions.map(r => (
              <button
                key={r}
                onClick={() => {
                  playSound('click');
                  setSelectedRegion(r);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedRegion === r
                    ? 'bg-[#173C35] text-[#F7F3EA] shadow-2xs'
                    : 'bg-[#FFFFFF] text-[#565851] hover:text-[#173C35] border border-[#173C35]/10'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Map & Detail Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Stylized SVG Map of Odisha */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] rounded-3xl bg-[#FFFFFF] border border-[#173C35]/15 p-6 shadow-xs flex items-center justify-center overflow-hidden">
              {/* Subtle Grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(23,60,53,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,60,53,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

              {/* Bay of Bengal subtle wave label on bottom-right */}
              <div className="absolute bottom-8 right-8 text-right pointer-events-none select-none">
                <span className="text-[10px] font-mono tracking-widest text-[#173C35]/50 uppercase block font-bold">
                  Bay of Bengal
                </span>
                <span className="text-[10px] font-serif text-[#565851]">ବଙ୍ଗୋପସାଗର</span>
              </div>

              {/* Stylized Odisha Border Outline SVG */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full max-w-[480px] max-h-[480px] overflow-visible"
              >
                {/* Odisha Stylized Regional Polygon Path */}
                <path
                  d="M 28,18 L 48,15 L 75,28 L 82,38 L 78,55 L 68,72 L 48,88 L 22,86 L 15,70 L 20,45 Z"
                  fill="rgba(168, 183, 161, 0.15)"
                  stroke="#173C35"
                  strokeWidth="1.2"
                />

                {/* Coastal Line Accent */}
                <path
                  d="M 68,72 L 78,55 L 82,38 L 75,28"
                  fill="none"
                  stroke="#B85C38"
                  strokeWidth="1.8"
                />

                {/* Network connection lines from Bhubaneswar (Core) to other hubs */}
                {filteredLocations.map(loc => {
                  if (loc.id === 'bhubaneswar') return null;
                  return (
                    <line
                      key={`line-${loc.id}`}
                      x1="62"
                      y1="56"
                      x2={loc.coordinates.x}
                      y2={loc.coordinates.y}
                      stroke="#173C35"
                      strokeWidth="0.8"
                      strokeOpacity="0.25"
                      strokeDasharray="2 2"
                    />
                  );
                })}

                {/* Location Nodes */}
                {filteredLocations.map(loc => {
                  const isSelected = selectedLocation.id === loc.id;
                  const isHovered = hoveredNodeId === loc.id;

                  return (
                    <g
                      key={loc.id}
                      className="cursor-pointer transition-transform"
                      onClick={() => {
                        playSound('click');
                        setSelectedLocation(loc);
                      }}
                      onMouseEnter={() => {
                        setHoveredNodeId(loc.id);
                        playSound('hover');
                      }}
                      onMouseLeave={() => setHoveredNodeId(null)}
                    >
                      {/* Pulse Ring */}
                      {(isSelected || isHovered) && (
                        <circle
                          cx={loc.coordinates.x}
                          cy={loc.coordinates.y}
                          r="5.5"
                          fill="none"
                          stroke="#B85C38"
                          strokeWidth="1"
                          strokeOpacity="0.6"
                        />
                      )}

                      {/* Main Node Point */}
                      <circle
                        cx={loc.coordinates.x}
                        cy={loc.coordinates.y}
                        r={isSelected ? '3.5' : isHovered ? '3' : '2.2'}
                        fill={isSelected ? '#B85C38' : '#173C35'}
                        stroke="#FFFFFF"
                        strokeWidth="0.8"
                      />

                      {/* Location Text Label */}
                      <text
                        x={loc.coordinates.x + (loc.coordinates.x > 50 ? -4 : 4)}
                        y={loc.coordinates.y + 1}
                        textAnchor={loc.coordinates.x > 50 ? 'end' : 'start'}
                        fill={isSelected ? '#173C35' : '#565851'}
                        fontSize="3.2"
                        fontWeight={isSelected ? 'bold' : 'normal'}
                        className="select-none pointer-events-none font-sans"
                      >
                        {loc.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right Column: Selected Location Information Panel */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#173C35]/15 shadow-xs space-y-5">
              {/* Location Name & Odia Script Header */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#B85C38] font-bold">
                    {selectedLocation.region} • {selectedLocation.district} District
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#173C35] font-bold mt-1">
                    {selectedLocation.name}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-xl font-serif text-[#B85C38] font-bold">
                    {selectedLocation.odiaName}
                  </span>
                  <div className="mt-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#173C35]/10 text-[#173C35] border border-[#173C35]/20">
                      {selectedLocation.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#565851] leading-relaxed">
                {selectedLocation.description}
              </p>

              {/* Connected Ecosystem Applications */}
              <div className="pt-3 border-t border-[#173C35]/10 space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#565851] font-semibold block">
                  Active Projects in {selectedLocation.name}:
                </span>

                <div className="space-y-2">
                  {selectedLocation.activeApps.map(slug => {
                    const app = apps.find(a => a.slug === slug);
                    if (!app) return null;

                    return (
                      <div
                        key={slug}
                        onClick={() => {
                          playSound('click');
                          setActiveAppModal(app);
                        }}
                        className="p-3 rounded-2xl bg-[#F7F3EA] hover:bg-[#E4EBE0] border border-[#173C35]/10 transition-all flex items-center justify-between cursor-pointer group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: app.accentColor }}
                          />
                          <div>
                            <div className="text-xs font-bold text-[#242522] group-hover:text-[#173C35] transition-colors">
                              {app.name}
                            </div>
                            <div className="text-[10px] text-[#565851]">
                              {app.category}
                            </div>
                          </div>
                        </div>

                        <ChevronRight className="w-4 h-4 text-[#565851] group-hover:text-[#173C35] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Regional Grid Telemetry Footer */}
              <div className="pt-3 border-t border-[#173C35]/10 flex items-center justify-between text-xs text-[#565851]">
                <span>Hub ID: OD-{selectedLocation.id.toUpperCase().slice(0, 3)}</span>
                <span className="text-[#173C35] font-mono font-semibold">Synced Node</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
