'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DynamicNavbar } from '@/components/layout/DynamicNavbar';
import { DynamicFooter } from '@/components/layout/DynamicFooter';
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Clock,
  Mail,
  MapPin,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  Navigation,
  Wrench,
  HeartPulse,
  Building2,
  Server,
  UserCheck,
  HelpCircle
} from 'lucide-react';

const sections = [
  { id: 'overview', title: '1. Ecosystem Overview' },
  { id: 'data-collected', title: '2. Information We Collect' },
  { id: 'platform-specific', title: '3. Platform-Specific Policies' },
  { id: 'data-usage', title: '4. How We Use Information' },
  { id: 'data-security', title: '5. Security & Encryption' },
  { id: 'third-party', title: '6. Third-Party Disclosures' },
  { id: 'user-rights', title: '7. Your Rights (DPDPA 2023)' },
  { id: 'retention-deletion', title: '8. Data Retention & Deletion' },
  { id: 'cookies', title: '9. Cookies & Telemetry' },
  { id: 'contact-dpo', title: '10. Grievance & DPO Contact' },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-[#ff6b4a] selection:text-white">
      <DynamicNavbar />

      {/* Hero Header with HuesPost Ember Radial Glow */}
      <section className="relative pt-36 pb-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 hues-ember-radial pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ff6b4a]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Studio Home</span>
            </Link>
            <span>/</span>
            <span className="text-[#ff6b4a]">Legal & Privacy</span>
          </div>

          <div className="hues-eyebrow mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ff6b4a]" />
            <span>— DATA PRIVACY & USER TRUST FRAMEWORK</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
            Privacy <span className="text-[#ff6b4a] italic font-black">Policy.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-stone-400 max-w-2xl leading-relaxed">
            Your trust is our foundational architecture. Learn how OdiaNXT Studio and our unified platforms collect, process, protect, and empower your personal data.
          </p>

          {/* Policy Meta Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-mono text-stone-300">
            <span className="px-3 py-1.5 rounded-lg bg-[#111114] border border-white/10 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#ff6b4a]" />
              <span>Last Revised: October 2026</span>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#111114] border border-white/10 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Compliant with DPDPA 2023 (India)</span>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#ff6b4a]/15 text-[#ff6b4a] border border-[#ff6b4a]/30 font-bold">
              Version 2.4
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Table of Contents */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Sticky Table of Contents */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-28 p-6 rounded-2xl bg-[#111114] border border-white/10 shadow-xl">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#ff6b4a] block mb-4">
                  TABLE OF CONTENTS
                </span>
                <nav className="flex flex-col gap-1.5">
                  {sections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                        activeSection === sec.id
                          ? 'bg-[#ff6b4a] text-white font-bold shadow-[0_0_15px_rgba(255,107,74,0.35)]'
                          : 'text-stone-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="truncate">{sec.title}</span>
                      <ChevronRight className={`w-3.5 h-3.5 ${activeSection === sec.id ? 'text-white' : 'text-stone-400'}`} />
                    </button>
                  ))}
                </nav>

                {/* Direct Contact Card */}
                <div className="mt-8 pt-6 border-t border-white/10 text-xs">
                  <span className="font-bold text-white block mb-1">Need Clarification?</span>
                  <p className="text-stone-400 text-[11px] leading-relaxed mb-3">
                    Contact our Data Protection Officer directly for data access or erasure requests.
                  </p>
                  <a
                    href="mailto:privacy@odianxt.com"
                    className="inline-flex items-center gap-1.5 text-[#ff6b4a] font-bold hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>privacy@odianxt.com</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Right Column: Policy Document Body */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              {/* Section 1 */}
              <div id="overview" className="p-8 rounded-2xl bg-[#111114] border border-white/10 scroll-mt-28">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-[#ff6b4a]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff6b4a]">
                    SECTION 01
                  </span>
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">
                  1. Ecosystem Overview & Scope
                </h2>
                <div className="space-y-4 text-sm text-stone-300 leading-relaxed">
                  <p>
                    This Privacy Policy applies to all digital applications, web portals, APIs, and connected services operated by <strong>OdiaNXT Digital Studio</strong> (referred to as "OdiaNXT", "we", "our", or "us").
                  </p>
                  <p>
                    Our ecosystem operates four core flagship platforms designed for the citizens, tourists, and enterprises of Odisha:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <li className="p-3 rounded-xl bg-[#18181c] border border-white/5 flex items-center gap-2.5">
                      <Navigation className="w-4 h-4 text-[#ff6b4a]" />
                      <span className="font-semibold text-xs">ATMA (Mobility & Auto Dispatch)</span>
                    </li>
                    <li className="p-3 rounded-xl bg-[#18181c] border border-white/5 flex items-center gap-2.5">
                      <Wrench className="w-4 h-4 text-[#06b6d4]" />
                      <span className="font-semibold text-xs">MAHALAXMI (Spares & Fitment)</span>
                    </li>
                    <li className="p-3 rounded-xl bg-[#18181c] border border-white/5 flex items-center gap-2.5">
                      <HeartPulse className="w-4 h-4 text-[#14b8a6]" />
                      <span className="font-semibold text-xs">PET APP (Stray & Animal Care)</span>
                    </li>
                    <li className="p-3 rounded-xl bg-[#18181c] border border-white/5 flex items-center gap-2.5">
                      <Building2 className="w-4 h-4 text-[#f59e0b]" />
                      <span className="font-semibold text-xs">TEMPLE APP (Darshan & Heritage)</span>
                    </li>
                  </ul>
                  <p className="pt-2">
                    By downloading, accessing, or using any of our applications or web portals, you consent to the data collection and handling practices described in this policy.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div id="data-collected" className="p-8 rounded-2xl bg-[#111114] border border-white/10 scroll-mt-28">
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="w-4 h-4 text-[#ff6b4a]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff6b4a]">
                    SECTION 02
                  </span>
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">
                  2. Information We Collect
                </h2>
                <div className="space-y-4 text-sm text-stone-300 leading-relaxed">
                  <p>
                    We collect only the minimum data required to provide seamless, high-performance services across our ecosystem:
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-[#18181c] border border-white/5">
                      <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1">
                        A. Account & Profile Information
                      </h4>
                      <p className="text-xs text-stone-400">
                        Full Name, Mobile Number (for OTP verification), Email Address, Language Preferences (Odia / English), and optional profile photo.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#18181c] border border-white/5">
                      <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1">
                        B. Precise Geographic Location Data
                      </h4>
                      <p className="text-xs text-stone-400">
                        Real-time GPS coordinates collected when booking ATMA rides or reporting emergency animal rescues. Location is only tracked while the app is active or when ride tracking is enabled.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#18181c] border border-white/5">
                      <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1">
                        C. Payment & Transaction Metadata
                      </h4>
                      <p className="text-xs text-stone-400">
                        Transaction IDs, UPI VPA handles, invoice details, and booking logs. We do <strong>NOT</strong> store card numbers or banking passwords; all payments are processed through RBI-authorized payment gateways.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#18181c] border border-white/5">
                      <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1">
                        D. Device & Technical Telemetry
                      </h4>
                      <p className="text-xs text-stone-400">
                        Device model, OS version, IP address, network carrier, latency statistics, and crash diagnostics to maintain system uptime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div id="platform-specific" className="p-8 rounded-2xl bg-[#111114] border border-white/10 scroll-mt-28">
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="w-4 h-4 text-[#ff6b4a]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff6b4a]">
                    SECTION 03
                  </span>
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">
                  3. Platform-Specific Policies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-[#18181c] border border-[#ff6b4a]/20">
                    <div className="flex items-center gap-2 text-[#ff6b4a] font-bold text-xs uppercase mb-2">
                      <Navigation className="w-4 h-4" />
                      <span>ATMA Mobility</span>
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      Driver and passenger phone numbers are masked using cloud telephony during active trips. Ride history and telemetry logs are encrypted and archived for safety audits.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#18181c] border border-[#06b6d4]/20">
                    <div className="flex items-center gap-2 text-[#06b6d4] font-bold text-xs uppercase mb-2">
                      <Wrench className="w-4 h-4" />
                      <span>MAHALAXMI Spares</span>
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      Vehicle registration data and chassis serials submitted for OEM spare fitment verification are solely used for compatibility checks and warranty validation.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#18181c] border border-[#14b8a6]/20">
                    <div className="flex items-center gap-2 text-[#14b8a6] font-bold text-xs uppercase mb-2">
                      <HeartPulse className="w-4 h-4" />
                      <span>PET APP Animal Welfare</span>
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      Stray distress photos and rescue coordinates uploaded by citizens are routed directly to registered local veterinary ambulances and shelter NGOs.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#18181c] border border-[#f59e0b]/20">
                    <div className="flex items-center gap-2 text-[#f59e0b] font-bold text-xs uppercase mb-2">
                      <Building2 className="w-4 h-4" />
                      <span>TEMPLE APP Heritage</span>
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      Devotee puja bookings, sankalpa gotra details, and digital offerings are transmitted securely to authorized temple seva trusts with 100% receipt transparency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div id="data-usage" className="p-8 rounded-2xl bg-[#111114] border border-white/10 scroll-mt-28">
                <div className="flex items-center gap-2 mb-3">
                  <Server className="w-4 h-4 text-[#ff6b4a]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff6b4a]">
                    SECTION 04
                  </span>
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">
                  4. How We Use Information
                </h2>
                <div className="space-y-3 text-sm text-stone-300 leading-relaxed">
                  <p>Your information is used strictly to power and enhance ecosystem functionality:</p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6b4a] flex-shrink-0 mt-0.5" />
                      <span><strong>Service Fulfillment:</strong> Matching ride requests with nearby drivers, verifying genuine auto spare parts, and scheduling pet adoptions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6b4a] flex-shrink-0 mt-0.5" />
                      <span><strong>Emergency Safety:</strong> Enabling one-tap SOS alerts with live telemetry dispatch to local authorities and emergency contacts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6b4a] flex-shrink-0 mt-0.5" />
                      <span><strong>Algorithmic Improvements:</strong> Optimizing traffic routing models and inventory distribution across Odisha’s 30 districts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6b4a] flex-shrink-0 mt-0.5" />
                      <span><strong>Zero Data Selling:</strong> We NEVER sell, rent, or trade your personal data to advertisers or unauthorized data brokers.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div id="data-security" className="p-8 rounded-2xl bg-[#111114] border border-white/10 scroll-mt-28">
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="w-4 h-4 text-[#ff6b4a]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff6b4a]">
                    SECTION 05
                  </span>
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">
                  5. Security & Encryption Standards
                </h2>
                <div className="space-y-4 text-sm text-stone-300 leading-relaxed">
                  <p>
                    OdiaNXT implements bank-grade cybersecurity protocols across all infrastructure layers:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                    <div className="p-4 rounded-xl bg-[#18181c] border border-white/5">
                      <div className="text-lg font-bold text-white">TLS 1.3</div>
                      <div className="text-[11px] text-stone-400 mt-1">In-Transit Encryption</div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#18181c] border border-white/5">
                      <div className="text-lg font-bold text-[#ff6b4a]">AES-256</div>
                      <div className="text-[11px] text-stone-400 mt-1">At-Rest Database Encryption</div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#18181c] border border-white/5">
                      <div className="text-lg font-bold text-white">India-Based</div>
                      <div className="text-[11px] text-stone-400 mt-1">Local Data Sovereignty</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div id="third-party" className="p-8 rounded-2xl bg-[#111114] border border-white/10 scroll-mt-28">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-4 h-4 text-[#ff6b4a]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff6b4a]">
                    SECTION 06
                  </span>
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">
                  6. Third-Party Disclosures & Integrations
                </h2>
                <div className="space-y-4 text-sm text-stone-300 leading-relaxed">
                  <p>
                    Data is only shared with verified partners strictly on a need-to-know basis:
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="p-3 rounded-xl bg-[#18181c] border border-white/5">
                      <strong>Payment Gateways:</strong> Razorpay, Cashfree, and NPCI UPI for encrypted payment processing.
                    </li>
                    <li className="p-3 rounded-xl bg-[#18181c] border border-white/5">
                      <strong>Mapping & Routing APIs:</strong> Mapbox / OpenStreetMap for GPS waypoints (coordinates anonymized).
                    </li>
                    <li className="p-3 rounded-xl bg-[#18181c] border border-white/5">
                      <strong>Legal & Law Enforcement:</strong> Strictly when mandated under valid Indian court warrants or national emergency directives.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 7 */}
              <div id="user-rights" className="p-8 rounded-2xl bg-[#111114] border border-white/10 scroll-mt-28">
                <div className="flex items-center gap-2 mb-3">
                  <UserCheck className="w-4 h-4 text-[#ff6b4a]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff6b4a]">
                    SECTION 07
                  </span>
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">
                  7. Your Rights Under DPDPA 2023
                </h2>
                <div className="space-y-4 text-sm text-stone-300 leading-relaxed">
                  <p>
                    Under the <strong>Digital Personal Data Protection Act, 2023</strong> (India), you hold enforceable statutory rights regarding your personal data:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-[#18181c] border border-white/5">
                      <h4 className="font-bold text-white text-xs mb-1">Right to Access & Summary</h4>
                      <p className="text-xs text-stone-400">Request a complete copy of your stored personal profile and ride/order history.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#18181c] border border-white/5">
                      <h4 className="font-bold text-white text-xs mb-1">Right to Correction & Erasure</h4>
                      <p className="text-xs text-stone-400">Update inaccurate data or request permanent deletion of your ecosystem account.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#18181c] border border-white/5">
                      <h4 className="font-bold text-white text-xs mb-1">Right of Grievance Redressal</h4>
                      <p className="text-xs text-stone-400">Escalate data concerns directly to our Data Protection Officer with 48h turnaround.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#18181c] border border-white/5">
                      <h4 className="font-bold text-white text-xs mb-1">Right to Nominate</h4>
                      <p className="text-xs text-stone-400">Nominate an individual to manage your digital records in the event of incapacity.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div id="retention-deletion" className="p-8 rounded-2xl bg-[#111114] border border-white/10 scroll-mt-28">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#ff6b4a]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff6b4a]">
                    SECTION 08
                  </span>
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">
                  8. Data Retention & Account Deletion
                </h2>
                <div className="space-y-4 text-sm text-stone-300 leading-relaxed">
                  <p>
                    We retain personal data only as long as necessary for active account servicing and statutory tax/accounting compliance (typically up to 5 years for financial invoices as required by Indian law).
                  </p>
                  <p>
                    To permanently delete your account and all associated personal data from ATMA, Mahalaxmi, Pet App, or Temple App, email <span className="text-[#ff6b4a] font-mono font-bold">privacy@odianxt.com</span> with subject line <code>"Account Deletion Request"</code>.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div id="cookies" className="p-8 rounded-2xl bg-[#111114] border border-white/10 scroll-mt-28">
                <div className="flex items-center gap-2 mb-3">
                  <Server className="w-4 h-4 text-[#ff6b4a]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff6b4a]">
                    SECTION 09
                  </span>
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">
                  9. Cookies & Telemetry Policy
                </h2>
                <div className="space-y-3 text-sm text-stone-300 leading-relaxed">
                  <p>
                    Our web portals use essential cookies strictly for session authentication, theme persistence (dark mode), and sound FX toggles. We do NOT use third-party tracking pixels for cross-site behavioral advertising.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div id="contact-dpo" className="p-8 rounded-2xl bg-[#111114] border border-[#ff6b4a]/30 shadow-[0_0_35px_rgba(255,107,74,0.15)] scroll-mt-28">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-4 h-4 text-[#ff6b4a]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff6b4a]">
                    SECTION 10
                  </span>
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">
                  10. Data Protection Officer & Grievance Redressal
                </h2>
                <div className="space-y-4 text-sm text-stone-300 leading-relaxed">
                  <p>
                    For questions, feedback, or statutory grievance redressal regarding this policy, please reach out to our appointed Data Protection Officer:
                  </p>
                  <div className="p-5 rounded-xl bg-[#18181c] border border-white/10 space-y-2 text-xs">
                    <div className="font-bold text-white text-sm">Grievance Officer / DPO — OdiaNXT Studio</div>
                    <div className="flex items-center gap-2 text-stone-300">
                      <Mail className="w-3.5 h-3.5 text-[#ff6b4a]" />
                      <span className="font-mono">dpo@odianxt.com | privacy@odianxt.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-300">
                      <MapPin className="w-3.5 h-3.5 text-[#ff6b4a]" />
                      <span>OdiaNXT Digital Studio, Patia IT Corridor, Bhubaneswar 751024, Odisha, India</span>
                    </div>
                    <div className="text-[11px] text-stone-400 pt-1">
                      Response Timeline: Acknowledgment within 24 hours; resolution within 15 business days.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DynamicFooter />
    </main>
  );
}
