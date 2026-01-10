import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Zakat Calculator for Canadians | Free Private Spreadsheet',
  description:
    'Calculate your annual Zakat obligation with our free, private Google Sheets calculator. Designed for Canadian Muslims with support for TFSA, RRSP, RESP, and accurate nisab thresholds. Your data stays in your Google Drive.',
  keywords: [
    'zakat calculator',
    'zakat calculator canada',
    'canadian zakat calculator',
    'islamic zakat calculator',
    'zakat spreadsheet',
    'nisab calculator',
    'tfsa zakat',
    'rrsp zakat',
    'resp zakat',
    'muslim charity calculator',
  ],
  authors: [{ name: 'Qutoof Academy' }],
  creator: 'Qutoof Academy',
  publisher: 'Qutoof Academy',
  metadataBase: new URL('https://zakatbot.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zakat Calculator for Canadians',
    description:
      'Free, private zakat calculator for Canadian Muslims. Calculate your obligations with support for TFSA, RRSP, RESP, and accurate nisab thresholds.',
    url: 'https://zakatbot.com',
    siteName: 'Zakat Calculator',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zakat Calculator for Canadians',
    description:
      'Free, private zakat calculator for Canadian Muslims. Your data stays in your Google Drive.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
