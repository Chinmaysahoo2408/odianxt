'use client';

import React, { useState } from 'react';
import { useEcosystem } from '@/lib/store';
import { OdiaApp, AppStatus } from '@/lib/types';
import {
  X,
  Plus,
  Trash2,
  Edit2,
  RotateCcw,
  Sparkles,
  Download,
  Settings,
  Save,
  CheckCircle2
} from 'lucide-react';

export const AdminDashboardModal: React.FC = () => {
  const {
    apps,
    metrics,
    isAdminOpen,
    setIsAdminOpen,
    addApp,
    updateApp,
    deleteApp,
    toggleAppActive,
    updateMetrics,
    resetToDefaults,
    playSound
  } = useEcosystem();

  const [activeTab, setActiveTab] = useState<'apps' | 'add' | 'metrics' | 'export'>('apps');
  const [editingAppId, setEditingAppId] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState<Partial<OdiaApp>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // New App Form State
  const [newAppForm, setNewAppForm] = useState<Partial<OdiaApp>>({
    name: '',
    slug: '',
    tagline: '',
    category: 'Civic & Agritech',
    description: '',
    longDescription: '',
    accentColor: '#173C35',
    secondaryColor: '#A8B7A1',
    glowColor: 'rgba(23, 60, 53, 0.15)',
    status: 'in_development',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    highlights: ['Next-Gen Architecture', 'Scalable Ecosystem Node'],
    features: [
      {
        id: 'f-1',
        title: 'Primary Core Engine',
        description: 'High-speed distributed service node for citizen access.',
        iconName: 'Sparkles',
        highlight: 'High Performance'
      }
    ],
    screenshots: [],
    isActive: true,
    order: apps.length + 1
  });

  if (!isAdminOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleStartEdit = (app: OdiaApp) => {
    setEditingAppId(app.id);
    setEditFormData({ ...app });
  };

  const handleSaveEdit = (id: string) => {
    playSound('click');
    updateApp(id, editFormData);
    setEditingAppId(null);
    showToast('Application updated successfully!');
  };

  const handleCreateNewApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAppForm.name || !newAppForm.slug) {
      alert('Please provide at least an Application Name and Slug');
      return;
    }
    playSound('ecosystem');
    const created: OdiaApp = {
      id: newAppForm.slug.toLowerCase().replace(/\s+/g, '-'),
      name: newAppForm.name,
      slug: newAppForm.slug.toLowerCase().replace(/\s+/g, '-'),
      tagline: newAppForm.tagline || 'Next-Gen Ecosystem Service for Odisha',
      category: newAppForm.category || 'Civic & Tech',
      description: newAppForm.description || 'Modern digital application connected to the OdiaNXT ecosystem.',
      longDescription: newAppForm.longDescription || newAppForm.description || 'Scalable application built under the OdiaNXT architecture.',
      logoBadge: newAppForm.name.toUpperCase().slice(0, 8),
      heroVisualType: 'generic-card',
      accentColor: newAppForm.accentColor || '#173C35',
      secondaryColor: newAppForm.secondaryColor || '#A8B7A1',
      glowColor: 'rgba(23, 60, 53, 0.15)',
      status: (newAppForm.status as AppStatus) || 'in_development',
      technologies: newAppForm.technologies || ['Next.js', 'TypeScript'],
      features: newAppForm.features || [],
      screenshots: [],
      highlights: newAppForm.highlights || ['Verified OdiaNXT Component'],
      order: apps.length + 1,
      isActive: true,
      appUrl: newAppForm.appUrl,
      websiteUrl: newAppForm.websiteUrl,
      version: '1.0.0-alpha'
    };

    addApp(created);
    setActiveTab('apps');
    showToast(`App "${created.name}" created and synced to ecosystem!`);
  };

  const handleExportJSON = () => {
    const data = JSON.stringify({ apps, metrics }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `odianxt-ecosystem-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    showToast('Exported ecosystem state JSON');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#242522]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[92vh] rounded-3xl bg-[#FFFFFF] border border-[#173C35]/20 shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#173C35]/10 flex items-center justify-between bg-[#F7F3EA]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#B85C38]/10 border border-[#B85C38]/25 flex items-center justify-center text-[#B85C38]">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-serif font-bold text-[#173C35] flex items-center gap-2">
                <span>OdiaNXT Content & Architecture Studio</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#173C35]/10 text-[#173C35] border border-[#173C35]/20">
                  CMS v2.0
                </span>
              </h2>
              <p className="text-xs text-[#565851]">
                Dynamic ecosystem configuration — changes take effect immediately across all nodes.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playSound('click');
              setIsAdminOpen(false);
            }}
            className="p-2 rounded-full bg-[#FFFFFF] hover:bg-[#E4EBE0] text-[#242522] border border-[#173C35]/15 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 pt-3 border-b border-[#173C35]/10 flex items-center justify-between bg-[#F7F3EA]/70">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                playSound('click');
                setActiveTab('apps');
              }}
              className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer ${
                activeTab === 'apps'
                  ? 'border-[#173C35] text-[#173C35]'
                  : 'border-transparent text-[#565851] hover:text-[#242522]'
              }`}
            >
              Manage Apps ({apps.length})
            </button>
            <button
              onClick={() => {
                playSound('click');
                setActiveTab('add');
              }}
              className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'add'
                  ? 'border-[#173C35] text-[#173C35]'
                  : 'border-transparent text-[#565851] hover:text-[#242522]'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add New App</span>
            </button>
            <button
              onClick={() => {
                playSound('click');
                setActiveTab('metrics');
              }}
              className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer ${
                activeTab === 'metrics'
                  ? 'border-[#173C35] text-[#173C35]'
                  : 'border-transparent text-[#565851] hover:text-[#242522]'
              }`}
            >
              Metrics & Telemetry
            </button>
            <button
              onClick={() => {
                playSound('click');
                setActiveTab('export');
              }}
              className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer ${
                activeTab === 'export'
                  ? 'border-[#173C35] text-[#173C35]'
                  : 'border-transparent text-[#565851] hover:text-[#242522]'
              }`}
            >
              Backup / JSON
            </button>
          </div>

          <button
            onClick={() => {
              if (confirm('Reset ecosystem applications and metrics to initial defaults?')) {
                resetToDefaults();
                showToast('Reset to defaults');
              }
            }}
            className="text-[11px] text-[#565851] hover:text-[#B85C38] flex items-center gap-1 mb-2 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Defaults</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 bg-[#FFFFFF]">
          {toastMessage && (
            <div className="p-3 rounded-xl bg-[#E4EBE0] border border-[#173C35]/20 text-[#173C35] text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* TAB 1: MANAGE APPS */}
          {activeTab === 'apps' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#565851]">
                  Total Active Applications: {apps.filter(a => a.isActive).length} / {apps.length}
                </span>
                <span className="text-xs text-[#565851]">
                  Click Edit on any application to update live attributes.
                </span>
              </div>

              <div className="space-y-3">
                {apps.map(app => {
                  const isEditing = editingAppId === app.id;

                  return (
                    <div
                      key={app.id}
                      className="p-4 rounded-2xl bg-[#F7F3EA] border border-[#173C35]/12 space-y-3"
                    >
                      {isEditing ? (
                        /* Edit Form Inline */
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div>
                              <label className="text-[10px] font-mono uppercase text-[#565851]">
                                App Name
                              </label>
                              <input
                                type="text"
                                value={editFormData.name || ''}
                                onChange={e => setEditFormData({ ...editFormData, name: e.target.value })}
                                className="w-full mt-1 p-2 rounded-lg bg-[#FFFFFF] border border-[#173C35]/20 text-xs text-[#242522]"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-mono uppercase text-[#565851]">
                                Category
                              </label>
                              <input
                                type="text"
                                value={editFormData.category || ''}
                                onChange={e => setEditFormData({ ...editFormData, category: e.target.value })}
                                className="w-full mt-1 p-2 rounded-lg bg-[#FFFFFF] border border-[#173C35]/20 text-xs text-[#242522]"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-mono uppercase text-[#565851]">
                                Status
                              </label>
                              <select
                                value={editFormData.status || 'in_development'}
                                onChange={e => setEditFormData({ ...editFormData, status: e.target.value as AppStatus })}
                                className="w-full mt-1 p-2 rounded-lg bg-[#FFFFFF] border border-[#173C35]/20 text-xs text-[#242522]"
                              >
                                <option value="live">Live in Production</option>
                                <option value="beta">Public Beta</option>
                                <option value="in_development">In Active Development</option>
                                <option value="coming_soon">Coming Soon</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="text-[10px] font-mono uppercase text-[#565851]">
                              Tagline
                            </label>
                            <input
                              type="text"
                              value={editFormData.tagline || ''}
                              onChange={e => setEditFormData({ ...editFormData, tagline: e.target.value })}
                              className="w-full mt-1 p-2 rounded-lg bg-[#FFFFFF] border border-[#173C35]/20 text-xs text-[#242522]"
                            />
                          </div>

                          <div>
                            <label className="text-[10px] font-mono uppercase text-[#565851]">
                              Short Description
                            </label>
                            <textarea
                              rows={2}
                              value={editFormData.description || ''}
                              onChange={e => setEditFormData({ ...editFormData, description: e.target.value })}
                              className="w-full mt-1 p-2 rounded-lg bg-[#FFFFFF] border border-[#173C35]/20 text-xs text-[#242522]"
                            />
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="text-[10px] font-mono uppercase text-[#565851]">
                                Web App URL (Optional)
                              </label>
                              <input
                                type="text"
                                placeholder="https://..."
                                value={editFormData.appUrl || ''}
                                onChange={e => setEditFormData({ ...editFormData, appUrl: e.target.value })}
                                className="w-full mt-1 p-2 rounded-lg bg-[#FFFFFF] border border-[#173C35]/20 text-xs text-[#242522]"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-mono uppercase text-[#565851]">
                                Accent Color
                              </label>
                              <input
                                type="text"
                                value={editFormData.accentColor || '#173C35'}
                                onChange={e => setEditFormData({ ...editFormData, accentColor: e.target.value })}
                                className="w-full mt-1 p-2 rounded-lg bg-[#FFFFFF] border border-[#173C35]/20 text-xs text-[#242522]"
                              />
                            </div>
                          </div>

                          <div className="flex justify-end gap-2 pt-2 border-t border-[#173C35]/10">
                            <button
                              onClick={() => setEditingAppId(null)}
                              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FFFFFF] text-[#242522] border border-[#173C35]/15"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => handleSaveEdit(app.id)}
                              className="px-4 py-1.5 rounded-lg text-xs font-bold bg-[#173C35] text-[#F7F3EA] hover:bg-[#0F2722] flex items-center gap-1.5"
                            >
                              <Save className="w-3.5 h-3.5" />
                              <span>Save Changes</span>
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* Row Display */
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span
                              className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: app.accentColor }}
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-sm font-bold text-[#173C35]">{app.name}</h3>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#173C35]/15 text-[#565851]">
                                  {app.category}
                                </span>
                                <span
                                  className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-[#173C35]/10 text-[#173C35]"
                                >
                                  {app.status.replace('_', ' ')}
                                </span>
                              </div>
                              <p className="text-xs text-[#565851] line-clamp-1 mt-0.5">
                                {app.tagline}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => toggleAppActive(app.id)}
                              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                                app.isActive
                                  ? 'bg-[#173C35] text-[#F7F3EA]'
                                  : 'bg-[#565851]/20 text-[#565851]'
                              }`}
                            >
                              {app.isActive ? 'Active' : 'Disabled'}
                            </button>

                            <button
                              onClick={() => handleStartEdit(app)}
                              className="p-1.5 rounded-lg bg-[#FFFFFF] hover:bg-[#E4EBE0] text-[#173C35] border border-[#173C35]/15 cursor-pointer"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => {
                                if (confirm(`Delete ${app.name}?`)) {
                                  deleteApp(app.id);
                                  showToast(`Deleted ${app.name}`);
                                }
                              }}
                              className="p-1.5 rounded-lg bg-[#B85C38]/10 hover:bg-[#B85C38]/20 text-[#B85C38] cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: ADD NEW APPLICATION */}
          {activeTab === 'add' && (
            <form onSubmit={handleCreateNewApp} className="space-y-4 max-w-2xl mx-auto">
              <div className="p-4 rounded-2xl bg-[#E4EBE0] border border-[#173C35]/20">
                <h3 className="text-sm font-bold text-[#173C35] flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-[#B85C38]" />
                  <span>Dynamic Application Generator</span>
                </h3>
                <p className="text-xs text-[#173C35]">
                  Adding an application updates the central schema and automatically integrates it into the Ecosystem Graph, Showcase Grid, and Navbar.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase text-[#565851] font-semibold">
                    Application Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. KRISHI NXT"
                    value={newAppForm.name}
                    onChange={e =>
                      setNewAppForm({
                        ...newAppForm,
                        name: e.target.value,
                        slug: e.target.value.toLowerCase().replace(/\s+/g, '-'),
                      })
                    }
                    className="w-full mt-1 p-2.5 rounded-xl bg-[#F7F3EA] border border-[#173C35]/20 text-sm text-[#242522]"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-[#565851] font-semibold">
                    Category *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Agritech & Farmers"
                    value={newAppForm.category}
                    onChange={e => setNewAppForm({ ...newAppForm, category: e.target.value })}
                    className="w-full mt-1 p-2.5 rounded-xl bg-[#F7F3EA] border border-[#173C35]/20 text-sm text-[#242522]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-[#565851] font-semibold">
                  Tagline *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Smart agritech and predictive telemetry for farmers"
                  value={newAppForm.tagline}
                  onChange={e => setNewAppForm({ ...newAppForm, tagline: e.target.value })}
                  className="w-full mt-1 p-2.5 rounded-xl bg-[#F7F3EA] border border-[#173C35]/20 text-sm text-[#242522]"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-[#565851] font-semibold">
                  Description *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Explain the application purpose and real-world value for Odisha..."
                  value={newAppForm.description}
                  onChange={e => setNewAppForm({ ...newAppForm, description: e.target.value })}
                  className="w-full mt-1 p-2.5 rounded-xl bg-[#F7F3EA] border border-[#173C35]/20 text-sm text-[#242522]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase text-[#565851] font-semibold">
                    Status
                  </label>
                  <select
                    value={newAppForm.status}
                    onChange={e => setNewAppForm({ ...newAppForm, status: e.target.value as AppStatus })}
                    className="w-full mt-1 p-2.5 rounded-xl bg-[#F7F3EA] border border-[#173C35]/20 text-sm text-[#242522]"
                  >
                    <option value="in_development">In Active Development</option>
                    <option value="beta">Public Beta</option>
                    <option value="coming_soon">Coming Soon</option>
                    <option value="live">Live in Production</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-[#565851] font-semibold">
                    Accent Color
                  </label>
                  <input
                    type="text"
                    value={newAppForm.accentColor}
                    onChange={e => setNewAppForm({ ...newAppForm, accentColor: e.target.value })}
                    className="w-full mt-1 p-2.5 rounded-xl bg-[#F7F3EA] border border-[#173C35]/20 text-sm text-[#242522]"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold text-sm bg-[#173C35] hover:bg-[#0F2722] text-[#F7F3EA] shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Deploy to OdiaNXT Ecosystem</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 3: METRICS */}
          {activeTab === 'metrics' && (
            <div className="space-y-4 max-w-xl mx-auto">
              <div className="p-5 rounded-2xl bg-[#F7F3EA] border border-[#173C35]/15 space-y-4">
                <h3 className="text-sm font-serif font-bold text-[#173C35]">Update Live Telemetry Metrics</h3>
                <div>
                  <label className="text-xs font-mono uppercase text-[#565851] font-semibold">
                    Active Projects / Modules Count
                  </label>
                  <input
                    type="number"
                    value={metrics.activeProjects}
                    onChange={e => updateMetrics({ activeProjects: parseInt(e.target.value) || 0 })}
                    className="w-full mt-1 p-2.5 rounded-xl bg-[#FFFFFF] border border-[#173C35]/20 text-sm text-[#242522]"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase text-[#565851] font-semibold">
                    Core Platform Uptime
                  </label>
                  <input
                    type="text"
                    value={metrics.platformUptime}
                    onChange={e => updateMetrics({ platformUptime: e.target.value })}
                    className="w-full mt-1 p-2.5 rounded-xl bg-[#FFFFFF] border border-[#173C35]/20 text-sm text-[#242522]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: EXPORT / IMPORT */}
          {activeTab === 'export' && (
            <div className="space-y-4 text-center py-6">
              <p className="text-xs text-[#565851] max-w-md mx-auto">
                Export the current ecosystem state (including configured apps, locations, and telemetry) as a JSON backup file.
              </p>
              <button
                onClick={handleExportJSON}
                className="px-6 py-3 rounded-xl text-xs font-semibold bg-[#173C35] text-[#F7F3EA] hover:bg-[#0F2722] transition-all inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Export State JSON</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
