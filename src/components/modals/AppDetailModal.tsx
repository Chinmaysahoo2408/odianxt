'use client';

import React, { useState } from 'react';
import { useEcosystem } from '@/lib/store';
import { getStatusBadgeStyle, formatStatusLabel } from '@/lib/utils';
import {
  X,
  Sparkles,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

export const AppDetailModal: React.FC = () => {
  const { activeAppModal, setActiveAppModal, playSound } = useEcosystem();
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'tech'>('overview');

  if (!activeAppModal) return null;

  const app = activeAppModal;
  const statusStyle = getStatusBadgeStyle(app.status);

  const handleClose = () => {
    playSound('click');
    setActiveAppModal(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#242522]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] rounded-3xl bg-[#FFFFFF] border border-[#173C35]/20 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="relative z-10 px-6 sm:px-8 py-5 border-b border-[#173C35]/10 flex items-center justify-between bg-[#F7F3EA]">
          <div className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: app.accentColor }}
            />
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#565851]">
                {app.category}
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#173C35] flex items-center gap-2">
                <span>{app.name}</span>
                {app.logoBadge && (
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#173C35]/10 text-[#173C35] border border-[#173C35]/20">
                    {app.logoBadge}
                  </span>
                )}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div
              className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}
            >
              {app.statusText || formatStatusLabel(app.status)}
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-full bg-[#FFFFFF] hover:bg-[#E4EBE0] text-[#242522] border border-[#173C35]/15 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="relative z-10 px-6 sm:px-8 pt-3 border-b border-[#173C35]/10 flex items-center gap-2 bg-[#F7F3EA]/50">
          <button
            onClick={() => {
              playSound('click');
              setActiveTab('overview');
            }}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'border-[#173C35] text-[#173C35]'
                : 'border-transparent text-[#565851] hover:text-[#242522]'
            }`}
          >
            Overview & Scope
          </button>
          <button
            onClick={() => {
              playSound('click');
              setActiveTab('features');
            }}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'features'
                ? 'border-[#173C35] text-[#173C35]'
                : 'border-transparent text-[#565851] hover:text-[#242522]'
            }`}
          >
            Features & Modules ({app.features.length})
          </button>
          <button
            onClick={() => {
              playSound('click');
              setActiveTab('tech');
            }}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'tech'
                ? 'border-[#173C35] text-[#173C35]'
                : 'border-transparent text-[#565851] hover:text-[#242522]'
            }`}
          >
            Tech Architecture ({app.technologies.length})
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="relative z-10 p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 bg-[#FFFFFF]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif text-[#173C35] font-bold mb-2">{app.tagline}</h3>
                <p className="text-sm text-[#565851] leading-relaxed">{app.longDescription}</p>
              </div>

              {app.culturalNote && (
                <div className="p-4 rounded-2xl bg-[#E4EBE0] border border-[#173C35]/15 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#173C35] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#173C35] mb-0.5">Cultural Root & Philosophy</div>
                    <div className="text-xs text-[#173C35] leading-relaxed italic">{app.culturalNote}</div>
                  </div>
                </div>
              )}

              {/* Highlights List */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#565851] font-semibold block">
                  Core Highlights:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {app.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#F7F3EA] border border-[#173C35]/10 flex items-center gap-2.5 text-xs text-[#242522]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#173C35] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {app.features.map(feat => (
                <div
                  key={feat.id}
                  className="p-4 rounded-2xl bg-[#F7F3EA] border border-[#173C35]/10 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-[#173C35]">{feat.title}</h4>
                    {feat.highlight && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#173C35]/10 text-[#173C35] border border-[#173C35]/20 font-semibold">
                        {feat.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#565851] leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="space-y-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#565851] font-semibold block mb-2">
                  Engineered With:
                </span>
                <div className="flex flex-wrap gap-2">
                  {app.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono bg-[#E4EBE0] text-[#173C35] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F3EA] border border-[#173C35]/10 space-y-2">
                <div className="text-xs font-bold text-[#242522]">Release Information</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono text-[#565851]">
                  <div>
                    <span className="text-[#565851] block">Version</span>
                    <span className="text-[#242522] font-semibold">{app.version || 'v1.0.0-alpha'}</span>
                  </div>
                  <div>
                    <span className="text-[#565851] block">Target Release</span>
                    <span className="text-[#242522] font-semibold">{app.launchDate || 'Q3 2026'}</span>
                  </div>
                  <div>
                    <span className="text-[#565851] block">Ecosystem Status</span>
                    <span className="text-[#173C35] font-semibold">Connected</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="relative z-10 px-6 sm:px-8 py-4 border-t border-[#173C35]/10 flex flex-wrap items-center justify-between gap-3 bg-[#F7F3EA]">
          <div className="text-xs text-[#565851] font-mono">
            App ID: <span className="text-[#173C35] font-bold">{app.slug}</span>
          </div>

          <div className="flex items-center gap-2">
            {(app.appUrl || app.websiteUrl) ? (
              <a
                href={app.appUrl || app.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-[#173C35] text-[#F7F3EA] hover:bg-[#0F2722] transition-all flex items-center gap-1.5"
              >
                <span>Launch App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="px-4 py-2 rounded-xl text-xs font-medium text-[#565851] bg-[#FFFFFF] border border-[#173C35]/15">
                URL available upon production deployment
              </span>
            )}
            <button
              onClick={handleClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#FFFFFF] hover:bg-[#E4EBE0] text-[#242522] border border-[#173C35]/20 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
