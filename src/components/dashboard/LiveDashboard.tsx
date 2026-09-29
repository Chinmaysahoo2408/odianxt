'use client';

import React from 'react';
import { useEcosystem } from '@/lib/store';
import {
  Activity,
  Layers,
  Cpu,
  ShieldCheck,
  Server,
  Zap,
  Globe,
  Radio
} from 'lucide-react';

export const LiveDashboard: React.FC = () => {
  const { metrics, apps, announcements } = useEcosystem();

  return (
    <section id="dashboard" className="py-28 relative bg-[#F7F3EA] border-b border-[#173C35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#173C35]/8 border border-[#173C35]/15 text-[#173C35] text-xs font-mono font-bold mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>REAL-TIME ECOSYSTEM TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#173C35]">
            OdiaNXT{' '}
            <span className="text-[#B85C38] italic">
              Live Core
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#565851] font-normal">
            Real-time status matrix and architectural telemetry driving the next generation of Odisha's digital products.
          </p>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {/* Total Apps Metric */}
          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#173C35]/12 shadow-2xs">
            <div className="flex items-center justify-between text-[#565851] mb-2">
              <span className="text-[11px] font-mono uppercase font-semibold">Connected Apps</span>
              <Layers className="w-4 h-4 text-[#173C35]" />
            </div>
            <div className="text-3xl sm:text-4xl font-serif text-[#173C35] font-bold">
              0{apps.length}
            </div>
            <div className="text-[10px] text-[#173C35] mt-1 font-mono font-semibold">
              Central Schema
            </div>
          </div>

          {/* Active Projects */}
          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#173C35]/12 shadow-2xs">
            <div className="flex items-center justify-between text-[#565851] mb-2">
              <span className="text-[11px] font-mono uppercase font-semibold">Core Modules</span>
              <Cpu className="w-4 h-4 text-[#B85C38]" />
            </div>
            <div className="text-3xl sm:text-4xl font-serif text-[#B85C38] font-bold">
              {metrics.activeProjects}+
            </div>
            <div className="text-[10px] text-[#B85C38] mt-1 font-mono font-semibold">
              Microservices
            </div>
          </div>

          {/* Districts Target */}
          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#173C35]/12 shadow-2xs">
            <div className="flex items-center justify-between text-[#565851] mb-2">
              <span className="text-[11px] font-mono uppercase font-semibold">Districts</span>
              <Globe className="w-4 h-4 text-[#173C35]" />
            </div>
            <div className="text-3xl sm:text-4xl font-serif text-[#173C35] font-bold">
              30/30
            </div>
            <div className="text-[10px] text-[#173C35] mt-1 font-mono font-semibold">
              State-wide Grid
            </div>
          </div>

          {/* User Status (Rule #23: No Fake Numbers) */}
          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#173C35]/12 shadow-2xs">
            <div className="flex items-center justify-between text-[#565851] mb-2">
              <span className="text-[11px] font-mono uppercase font-semibold">Public Users</span>
              <ShieldCheck className="w-4 h-4 text-[#8C6B32]" />
            </div>
            <div className="text-xl sm:text-2xl font-serif text-[#242522] font-bold pt-1">
              Coming Soon
            </div>
            <div className="text-[10px] text-[#8C6B32] mt-1 font-mono font-semibold">
              Private Alpha Access
            </div>
          </div>

          {/* Platform Uptime */}
          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#173C35]/12 shadow-2xs">
            <div className="flex items-center justify-between text-[#565851] mb-2">
              <span className="text-[11px] font-mono uppercase font-semibold">Core Uptime</span>
              <Server className="w-4 h-4 text-[#173C35]" />
            </div>
            <div className="text-3xl sm:text-4xl font-serif text-[#173C35] font-bold">
              {metrics.platformUptime}
            </div>
            <div className="text-[10px] text-[#173C35] mt-1 font-mono font-semibold">
              High Availability
            </div>
          </div>

          {/* System Health */}
          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#173C35]/12 shadow-2xs">
            <div className="flex items-center justify-between text-[#565851] mb-2">
              <span className="text-[11px] font-mono uppercase font-semibold">Health Matrix</span>
              <Zap className="w-4 h-4 text-[#B85C38]" />
            </div>
            <div className="text-xl sm:text-2xl font-serif text-[#173C35] font-bold pt-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#173C35]" />
              <span>Optimal</span>
            </div>
            <div className="text-[10px] text-[#565851] mt-1 font-mono">
              Synced {metrics.lastUpdated}
            </div>
          </div>
        </div>

        {/* Live Architecture Status & Announcements Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Architecture Status Matrix */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#173C35]/15 shadow-xs">
            <h3 className="text-lg font-serif text-[#173C35] font-bold mb-4 flex items-center gap-2">
              <Server className="w-5 h-5 text-[#173C35]" />
              <span>Ecosystem Application Matrix</span>
            </h3>

            <div className="space-y-3">
              {apps.map(app => (
                <div
                  key={app.id}
                  className="p-3.5 rounded-2xl bg-[#F7F3EA] border border-[#173C35]/10 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: app.accentColor }}
                    />
                    <div>
                      <div className="text-xs font-bold text-[#242522]">{app.name}</div>
                      <div className="text-[10px] text-[#565851] font-mono">
                        v{app.version || '1.0.0'} • {app.technologies.slice(0, 3).join(', ')}
                      </div>
                    </div>
                  </div>

                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold"
                    style={{
                      backgroundColor: `${app.accentColor}15`,
                      color: app.accentColor,
                      border: `1px solid ${app.accentColor}30`
                    }}
                  >
                    {app.status.replace('_', ' ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Announcements Feed */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#173C35]/15 shadow-xs">
            <h3 className="text-lg font-serif text-[#173C35] font-bold mb-4 flex items-center gap-2">
              <Radio className="w-5 h-5 text-[#B85C38]" />
              <span>Ecosystem Announcements & Changelog</span>
            </h3>

            <div className="space-y-3.5">
              {announcements.map(ann => (
                <div
                  key={ann.id}
                  className="p-4 rounded-2xl bg-[#F7F3EA] border border-[#173C35]/10 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#173C35]/10 text-[#173C35] border border-[#173C35]/20 font-semibold">
                      {ann.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#565851]">{ann.date}</span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-[#242522]">
                    {ann.title}
                  </h4>

                  <p className="text-xs text-[#565851] leading-relaxed">
                    {ann.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
