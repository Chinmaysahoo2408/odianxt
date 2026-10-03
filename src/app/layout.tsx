import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { EcosystemProvider } from '@/lib/store';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ODIANXT — Digital Ecosystem Studio | Post-Grade Next-Gen Platforms',
  description:
    'Where technology and heritage become unforgettable. One connected studio ecosystem uniting urban mobility (ATMA), automotive commerce (MAHALAXMI), handcrafted luxury fashion (IRAYA), animal welfare (PET APP), and sacred temple culture (TEMPLE APP).',
  keywords: [
    'OdiaNXT',
    'HuesPost Style Ecosystem',
    'Digital Odisha',
    'ATMA Mobility',
    'Mahalaxmi Genuine Spares',
    'IRAYA Handcrafted Bags & Footwear',
    'Pet App Odisha',
    'Temple App Odisha',
    'Bhubaneswar Startup',
    'Next-Gen Tech Studio'
  ],
  authors: [{ name: 'OdiaNXT Studio' }],
  creator: 'OdiaNXT',
  openGraph: {
    title: 'ODIANXT — Digital Ecosystem Studio',
    description: 'Where technology and heritage become unforgettable. Urban mobility, parts commerce, luxury fashion crafts, pet welfare and temple heritage.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'ODIANXT Ecosystem Studio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${space.variable} ${inter.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#09090b] text-[#f4f4f5] font-sans antialiased selection:bg-[#ff6b4a] selection:text-white bg-film-grain">
        <EcosystemProvider>
          {children}
        </EcosystemProvider>
      </body>
    </html>
  );
}

