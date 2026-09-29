import { OdiaApp, LocationNode, EcosystemMetrics, EcosystemAnnouncement } from './types';

export const INITIAL_APPS: OdiaApp[] = [
  {
    id: 'atma',
    name: 'ATMA',
    slug: 'atma',
    tagline: 'Intelligent Transit & Urban Mobility for Odisha',
    category: 'Mobility & Urban Tech',
    description: 'Next-generation intelligent transit navigation, real-time public transit tracking, and community mobility platform designed for urban and suburban Odisha.',
    longDescription: 'ATMA redefines how citizens and commuters traverse Odisha’s growing urban corridors. Powered by real-time telemetry, predictive route intelligence, and emergency civic assist, ATMA unifies multi-modal mobility across buses, shared transit, and local connectivity in a clean, high-speed experience.',
    logoBadge: 'ATMA',
    heroVisualType: '3d-phone-atma',
    accentColor: '#050505', // True Black Luxe
    secondaryColor: '#D4AF37', // Royal Gold
    glowColor: 'rgba(212, 175, 55, 0.2)',
    status: 'live',
    statusText: 'Live Platform',
    websiteUrl: '/atma',
    appUrl: '/atma',
    technologies: ['React Native Web', 'Next.js', 'FastAPI', 'Expo Router', 'Python', 'TailwindCSS'],
    culturalNote: 'Inspired by the sacred discipline and transformation wisdom of ancient Odishan philosophy and Stoic mastery.',
    highlights: [
      '21-Day Transformation Master Course',
      'Daily Ritual Progress Ring & Streaks',
      'Skool-Style Community Tribe & Feed',
      'ATMA AI Transformation Coach'
    ],
    features: [
      {
        id: 'f1',
        title: 'Daily Ritual Progress Ring',
        description: 'Gamified circular habit tracker calculating daily momentum, XP milestones, and unbroken streak rewards.',
        iconName: 'Activity',
        highlight: 'Habit Mastery'
      },
      {
        id: 'f2',
        title: '21-Day Transformation Path',
        description: 'Structured daily curriculum with high-fidelity video wisdom transmissions, guided audio meditations, and reflection journals.',
        iconName: 'Compass',
        highlight: 'Curriculum'
      },
      {
        id: 'f3',
        title: 'The Tribe Community',
        description: 'Clean peer accountability feed with post categories (Wins, Q&A, General), user level badges, and reflections.',
        iconName: 'Users',
        highlight: 'Peer Support'
      },
      {
        id: 'f4',
        title: 'ATMA AI Coach',
        description: '24/7 personal transformation coaching grounded in Stoic philosophy, conscious presence, and somatic awareness.',
        iconName: 'Bot',
        highlight: 'AI Guided'
      }
    ],
    screenshots: [
      {
        id: 's1',
        title: 'Daily Sanctuary Dashboard',
        caption: 'Circular progress ring and interactive daily rituals tracking physical and mental discipline.',
        tag: 'Sanctuary',
        accent: '#D4AF37'
      },
      {
        id: 's2',
        title: '21-Day Course Room',
        caption: 'Cinematic video transmissions and guided audio meditations for deep personal mastery.',
        tag: 'Wisdom Path',
        accent: '#115E41'
      }
    ],
    metrics: [
      { label: 'Pillars', value: '4 Core', unit: 'disciplines' },
      { label: 'Course', value: '21 Days', unit: 'curriculum' },
      { label: 'Status', value: 'Live', isComingSoon: false },
      { label: 'Ecosystem', value: 'OdiaNXT', isComingSoon: false }
    ],
    order: 1,
    isActive: true,
    launchDate: 'Live Now',
    version: '1.4.0'
  },
  {
    id: 'mahalaxmi',
    name: 'MAHALAXMI',
    slug: 'mahalaxmi',
    tagline: 'GENUINE SPARES — Industrial & Automotive Component Ecosystem',
    category: 'Automotive & Spares',
    description: 'The definitive digital catalog, vehicle compatibility engine, and certified spare parts procurement network for workshops, mechanics, and vehicle owners across Odisha.',
    longDescription: 'MAHALAXMI bridges the gap between verified original equipment manufacturers (OEM) and automotive repair hubs across Odisha. Featuring precision parts cross-referencing, digital QR authenticity verification, and inventory transparency for two-wheelers, four-wheelers, and commercial transport.',
    logoBadge: 'GENUINE SPARES',
    heroVisualType: '3d-gears-mahalaxmi',
    accentColor: '#B85C38', // Terracotta
    secondaryColor: '#C49A5A', // Muted Gold
    glowColor: 'rgba(184, 92, 56, 0.15)',
    status: 'coming_soon',
    statusText: 'Coming Soon',
    technologies: ['PostgreSQL', 'TypeScript', 'Vector Search', 'Barcode / QR SDK', 'Edge Caching'],
    culturalNote: 'Built on the timeless craftsmanship and industrial heritage of Odisha’s mineral, engineering, and transport corridors.',
    highlights: [
      'OEM Part Number Cross-Referencing',
      'Vehicle Chassis & Model Compatibility',
      'Anti-Counterfeit QR Tag Verification',
      'Direct Workshop Fulfillment Network'
    ],
    features: [
      {
        id: 'mf1',
        title: 'Precision Vehicle Fitment',
        description: 'Input vehicle make, model, and year to instantly filter 100% compatible OEM and OES certified spare parts.',
        iconName: 'Wrench',
        highlight: 'Zero Mismatch'
      },
      {
        id: 'mf2',
        title: 'Anti-Counterfeit Authentication',
        description: 'Scan holographic QR tags on packaged parts to verify authenticity directly against manufacturer cryptographic ledgers.',
        iconName: 'ShieldCheck',
        highlight: 'Certified Authentic'
      },
      {
        id: 'mf3',
        title: 'Workshop Express Dispatch',
        description: 'Integration with local regional stockists for same-day delivery to authorized garages and independent mechanics.',
        iconName: 'Truck',
        highlight: 'Same-Day Dispatch'
      },
      {
        id: 'mf4',
        title: 'Component Schematics',
        description: 'Interactive mechanical schematics with verified part numbers for transmission, engine, and braking assemblies.',
        iconName: 'Cpu',
        highlight: 'Interactive Schematics'
      }
    ],
    screenshots: [
      {
        id: 'ms1',
        title: 'Interactive Engine Schematics',
        caption: 'Pinpointing exact part numbers inside engine blocks and braking assemblies.',
        tag: 'Part Discovery',
        accent: '#B85C38'
      }
    ],
    metrics: [
      { label: 'Catalog SKU', value: '15,000+', unit: 'verified parts' },
      { label: 'OEM Partners', value: '40+', unit: 'certified' },
      { label: 'Verification', value: '100%', unit: 'tamper-proof' },
      { label: 'Access', value: 'Private Preview', isComingSoon: true }
    ],
    order: 2,
    isActive: true,
    launchDate: 'Q4 2026',
    version: '0.8.0-pre'
  },
  {
    id: 'pet-app',
    name: 'PET APP',
    slug: 'pet-app',
    tagline: 'Compassionate Pet Care, Veterinary Telehealth & Community Rescue',
    category: 'Pet Care & Community',
    description: 'An all-in-one companion animal ecosystem for Odisha, connecting pet parents, veterinary doctors, foster networks, and community stray welfare initiatives.',
    longDescription: 'PET APP brings modern digital care to companion animals and community strays throughout Odisha. From computerized vaccination passports and on-demand veterinary telehealth to community-driven lost pet alerts and animal rescue coordination, PET APP empowers compassionate living.',
    logoBadge: 'CARE & COMPANION',
    heroVisualType: '3d-pets-paw',
    accentColor: '#A8B7A1', // Soft Sage
    secondaryColor: '#B85C38', // Terracotta
    glowColor: 'rgba(168, 183, 161, 0.2)',
    status: 'in_development',
    statusText: 'In Active Development',
    technologies: ['React Native', 'Node.js', 'Supabase', 'WebRTC', 'Cloudflare Workers'],
    culturalNote: 'Honoring Odisha’s timeless ecological tradition of coexistence with animals, flora, and village fauna.',
    highlights: [
      'Digital Pet Health & Vaccine Passport',
      'Verified Vet Consultations & Clinics',
      'Geo-Tagged Stray Animal Rescue Grid',
      'Community Foster & Adoption Portal'
    ],
    features: [
      {
        id: 'pf1',
        title: 'Digital Health Passport',
        description: 'Keep all deworming records, rabies vaccination certificates, and medical history synced in one secure profile.',
        iconName: 'HeartPulse',
        highlight: 'Secure Records'
      },
      {
        id: 'pf2',
        title: 'Emergency Stray Alert Grid',
        description: 'Geo-tag injured community animals with photo and coordinates to immediately notify nearby volunteer rescuers.',
        iconName: 'MapPin',
        highlight: 'Rescue Coordination'
      },
      {
        id: 'pf3',
        title: 'Verified Tele-Veterinary',
        description: 'Direct audio/video consultations with registered veterinarians for non-emergency triage, diet, and post-op advice.',
        iconName: 'Video',
        highlight: 'Telehealth'
      },
      {
        id: 'pf4',
        title: 'Ethical Adoption Network',
        description: 'Connect with verified shelters and foster homes across Odisha to adopt vaccinated, healthy rescued pets.',
        iconName: 'Sparkles',
        highlight: 'Adoption First'
      }
    ],
    screenshots: [
      {
        id: 'ps1',
        title: 'Pet Health Dashboard',
        caption: 'Track booster shots, dietary schedules, and growth curves in an approachable interface.',
        tag: 'Health Profile',
        accent: '#A8B7A1'
      }
    ],
    metrics: [
      { label: 'Vet Clinics Mapped', value: '50+', unit: 'Odisha' },
      { label: 'Rescue Target SLA', value: '< 2 hrs', unit: 'response' },
      { label: 'Adoptions Grid', value: 'Coming Soon', isComingSoon: true },
      { label: 'Platform Status', value: 'Internal Alpha', isComingSoon: false }
    ],
    order: 3,
    isActive: true,
    launchDate: 'Q3 2026',
    version: '0.7.5-dev'
  },
  {
    id: 'temple-app',
    name: 'TEMPLE APP',
    slug: 'temple-app',
    tagline: 'Experience Odisha’s Divine Temples & Sacred Heritage Digitally',
    category: 'Culture & Heritage',
    description: 'A serene, respectful digital gateway to Odisha’s magnificent temples, sacred architectural heritage, darshan schedules, festival rituals, and cultural encyclopedia.',
    longDescription: 'From the sacred Grand Temple of Puri Jagannath and the architectural marvel of Lingaraj to the historic shrines of Sambalpur, Konark, and southern Odisha, TEMPLE APP brings authentic spiritual information, temple histories, architectural documentation, and verified festival timings into a peaceful, refined interface.',
    logoBadge: 'SACRED ODISHA',
    heroVisualType: '3d-temple-shikhara',
    accentColor: '#C49A5A', // Muted Gold
    secondaryColor: '#173C35', // Deep Forest
    glowColor: 'rgba(196, 154, 90, 0.2)',
    status: 'in_development',
    statusText: 'In Active Development',
    technologies: ['Next.js', 'WebGL', 'Audio Synthesis', 'GraphQL', 'Digital Archive'],
    culturalNote: 'Handcrafted with reverence to classical Kalinga architectural canons (Rekha Deula, Pidha Deula & Khakhara Deula).',
    highlights: [
      'Comprehensive Odisha Temple Directory',
      'Daily Darshan, Aarti & Niti Timings',
      'Kalinga Temple Architecture Documentation',
      'Sacred Odia Festival Ritual Guides'
    ],
    features: [
      {
        id: 'tf1',
        title: 'Sacred Temple Directory',
        description: 'Curated directory of over 500+ historic temples across all 30 districts of Odisha with verified historical background.',
        iconName: 'Building2',
        highlight: '30 Districts'
      },
      {
        id: 'tf2',
        title: 'Rituals & Niti Timings',
        description: 'Accurate daily schedules for Mangala Aarti, Bhog distributions, Sandhya Aarti, and special festival ceremonial sequences.',
        iconName: 'Clock',
        highlight: 'Live Timings'
      },
      {
        id: 'tf3',
        title: 'Architectural Heritage Visualizer',
        description: 'Explore the intricate Kalinga shikhara structures, Konark wheels, and traditional temple sculpture iconography in high fidelity.',
        iconName: 'Compass',
        highlight: 'Kalinga Architecture'
      },
      {
        id: 'tf4',
        title: 'Festival Calendar & Mahatmya',
        description: 'Comprehensive guides for Ratha Yatra, Maha Shivaratri, Durga Puja, and local village festivals with authentic cultural lore.',
        iconName: 'CalendarDays',
        highlight: 'Cultural Lore'
      }
    ],
    screenshots: [
      {
        id: 'ts1',
        title: 'Virtual Darshan & Timings',
        caption: 'Verified daily ritual schedule for Jagannath Temple, Lingaraj, and Biraja Temple.',
        tag: 'Rituals & Niti',
        accent: '#C49A5A'
      }
    ],
    metrics: [
      { label: 'Temples Documented', value: '120+', unit: 'verified' },
      { label: 'Districts Included', value: '30/30', unit: 'Odisha' },
      { label: 'Virtual Guides', value: 'In Pipeline', isComingSoon: true },
      { label: 'Languages', value: 'Odia / English', isComingSoon: false }
    ],
    order: 4,
    isActive: true,
    launchDate: 'Q4 2026',
    version: '0.8.2-dev'
  }
];

export const INITIAL_LOCATIONS: LocationNode[] = [
  {
    id: 'bhubaneswar',
    name: 'Bhubaneswar',
    odiaName: 'ଭୁବନେଶ୍ୱର',
    district: 'Khurda',
    region: 'Coastal Odisha',
    coordinates: { x: 62, y: 56 },
    activeApps: ['atma', 'temple-app', 'pet-app', 'mahalaxmi'],
    description: 'Central OdiaNXT Innovation Core. Active deployment corridor for ATMA transit and Temple App architectural documentation.',
    status: 'Active Hub',
    initiativesCount: 4
  },
  {
    id: 'cuttack',
    name: 'Cuttack',
    odiaName: 'କଟକ',
    district: 'Cuttack',
    region: 'Coastal Odisha',
    coordinates: { x: 64, y: 52 },
    activeApps: ['atma', 'mahalaxmi', 'temple-app'],
    description: 'Historic Millennium City corridor. Automotive spare hubs for MAHALAXMI and twin-city transit telemetry with ATMA.',
    status: 'Active Hub',
    initiativesCount: 3
  },
  {
    id: 'puri',
    name: 'Puri',
    odiaName: 'ପୁରୀ',
    district: 'Puri',
    region: 'Coastal Odisha',
    coordinates: { x: 66, y: 66 },
    activeApps: ['temple-app', 'atma'],
    description: 'Spiritual epicenter of Odisha. High-priority zone for TEMPLE APP darshan guide, pilgrim transit, and coastal mobility.',
    status: 'Active Hub',
    initiativesCount: 2
  },
  {
    id: 'rourkela',
    name: 'Rourkela',
    odiaName: 'ରାଉରକେଲା',
    district: 'Sundargarh',
    region: 'Northern Odisha',
    coordinates: { x: 42, y: 22 },
    activeApps: ['mahalaxmi', 'atma'],
    description: 'Steel City & industrial engineering hub. Heavy machinery spare catalogs and urban transit testing.',
    status: 'Pilot Deployment',
    initiativesCount: 2
  },
  {
    id: 'sambalpur',
    name: 'Sambalpur',
    odiaName: 'ସମ୍ବଲପୁର',
    district: 'Sambalpur',
    region: 'Western Odisha',
    coordinates: { x: 30, y: 40 },
    activeApps: ['temple-app', 'mahalaxmi', 'pet-app'],
    description: 'Western Odisha cultural and logistics node. Samaleswari temple heritage archival and regional transport link.',
    status: 'Pilot Deployment',
    initiativesCount: 3
  },
  {
    id: 'berhampur',
    name: 'Berhampur',
    odiaName: 'ବ୍ରହ୍ମପୁର',
    district: 'Ganjam',
    region: 'Southern Odisha',
    coordinates: { x: 46, y: 78 },
    activeApps: ['mahalaxmi', 'pet-app'],
    description: 'Southern commercial trading gateway. Automotive distribution network and coastal animal rescue initiatives.',
    status: 'Planned Expansion',
    initiativesCount: 2
  },
  {
    id: 'balasore',
    name: 'Balasore',
    odiaName: 'ବାଲେଶ୍ୱର',
    district: 'Balasore',
    region: 'Northern Odisha',
    coordinates: { x: 74, y: 34 },
    activeApps: ['temple-app', 'atma'],
    description: 'Northern maritime and cultural node. Emami Jagannath & Chandaneswar documentation.',
    status: 'Planned Expansion',
    initiativesCount: 2
  },
  {
    id: 'koraput',
    name: 'Koraput',
    odiaName: 'କୋରାପୁଟ',
    district: 'Koraput',
    region: 'Southern Odisha',
    coordinates: { x: 20, y: 84 },
    activeApps: ['temple-app', 'pet-app'],
    description: 'Eastern Ghats biodiversity and indigenous heritage zone. Sabara Srikhetra documentation & animal welfare.',
    status: 'Planned Expansion',
    initiativesCount: 2
  }
];

export const INITIAL_METRICS: EcosystemMetrics = {
  totalApps: 4,
  activeProjects: 12,
  districtsCovered: '30 Districts in Roadmap',
  registeredUsers: 'Private Beta (Invite-Only)',
  activeServices: '18 Core Service Modules',
  platformUptime: '99.98%',
  systemStatus: 'Optimal',
  lastUpdated: 'September 2026'
};

export const INITIAL_ANNOUNCEMENTS: EcosystemAnnouncement[] = [
  {
    id: 'ann-1',
    title: 'OdiaNXT Architecture 2.0 Released',
    date: 'Sep 2026',
    category: 'Architecture',
    summary: 'Centralized dynamic application schema launched, enabling effortless expansion from 4 apps to 50+ without redesign.'
  },
  {
    id: 'ann-2',
    title: 'ATMA Mobility Navigation Engine Alpha',
    date: 'Sep 2026',
    category: 'Launch',
    summary: 'Twin-city real-time transit telemetry testing begins across Bhubaneswar & Cuttack corridors.',
    appSlug: 'atma'
  },
  {
    id: 'ann-3',
    title: 'MAHALAXMI OEM Spare Parts Compatibility Engine',
    date: 'Aug 2026',
    category: 'Milestone',
    summary: '15,000+ certified spare part SKUs indexed with anti-counterfeit QR cryptographic verification.',
    appSlug: 'mahalaxmi'
  }
];
