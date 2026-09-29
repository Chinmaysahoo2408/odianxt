import type { Metadata } from 'next';
import { DM_Serif_Display, Manrope } from 'next/font/google';
import './globals.css';
import { EcosystemProvider } from '@/lib/store';

const serif = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OdiaNXT — Building the Next Digital Odisha',
  description:
    'One connected digital ecosystem uniting mobility (ATMA), genuine automotive spares (MAHALAXMI), companion animal care (PET APP), and sacred temple heritage (TEMPLE APP) across Odisha.',
  keywords: [
    'OdiaNXT',
    'Digital Odisha',
    'Odisha Technology Ecosystem',
    'ATMA Mobility',
    'Mahalaxmi Genuine Spares',
    'Pet App Odisha',
    'Temple App Odisha',
    'Bhubaneswar Startup',
    'Indian Tech Craftsmanship'
  ],
  authors: [{ name: 'OdiaNXT Ecosystem' }],
  creator: 'OdiaNXT',
  openGraph: {
    title: 'OdiaNXT — Building the Next Digital Odisha',
    description: 'One ecosystem connecting technology, mobility, commerce, pets, culture and everyday life.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'OdiaNXT Ecosystem',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F7F3EA] text-[#242522] font-sans antialiased selection:bg-[#B85C38] selection:text-[#F7F3EA]">
        <EcosystemProvider>
          {children}
        </EcosystemProvider>
      </body>
    </html>
  );
}
