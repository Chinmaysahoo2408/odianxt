export type AppStatus = 'live' | 'coming_soon' | 'in_development' | 'beta';

export interface AppFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: string;
  category?: string;
}

export interface AppScreenshot {
  id: string;
  title: string;
  caption: string;
  tag: string;
  accent: string;
  mockupContent?: string;
}

export interface AppMetric {
  label: string;
  value: string;
  unit?: string;
  isComingSoon?: boolean;
}

export interface OdiaApp {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  category: string;
  description: string;
  longDescription: string;
  logoBadge: string;
  heroVisualType: '3d-phone-atma' | '3d-gears-mahalaxmi' | '3d-pets-paw' | '3d-temple-shikhara' | 'generic-card';
  accentColor: string;
  secondaryColor: string;
  glowColor: string;
  status: AppStatus;
  statusText?: string;
  appUrl?: string; // Only show 'Open App' if real link exists (Do not fabricate)
  websiteUrl?: string; // Only show 'Visit Website' if real link exists
  playStoreUrl?: string;
  appStoreUrl?: string;
  technologies: string[];
  features: AppFeature[];
  screenshots: AppScreenshot[];
  metrics?: AppMetric[];
  launchDate?: string;
  version?: string;
  order: number;
  isActive: boolean;
  culturalNote?: string;
  highlights: string[];
  specs?: Record<string, string>;
}

export interface LocationNode {
  id: string;
  name: string;
  odiaName: string;
  district: string;
  region: 'Coastal Odisha' | 'Central Odisha' | 'Western Odisha' | 'Southern Odisha' | 'Northern Odisha';
  coordinates: { x: number; y: number }; // percentage 0-100 on the Odisha SVG map
  activeApps: string[]; // array of app slugs
  description: string;
  status: 'Active Hub' | 'Pilot Deployment' | 'Planned Expansion';
  initiativesCount: number;
}

export interface EcosystemMetrics {
  totalApps: number;
  activeProjects: number;
  districtsCovered: string; // e.g. "30/30 In Progress"
  registeredUsers: string; // "Coming Soon" (Adheres to Rule #23: No fake user numbers)
  activeServices: string; // "18 Core Services"
  platformUptime: string; // "99.98%"
  systemStatus: 'Operational' | 'Scaling' | 'Optimal';
  lastUpdated: string;
}

export interface EcosystemAnnouncement {
  id: string;
  title: string;
  date: string;
  category: 'Launch' | 'Architecture' | 'Ecosystem Update' | 'Milestone';
  summary: string;
  appSlug?: string;
}
