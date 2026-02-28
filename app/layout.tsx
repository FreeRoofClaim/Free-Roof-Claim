import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GTM from '@/components/layout/GTM';
import { Header, Footer } from '@/components/sections/index';

const inter = localFont({
  src: [
    {
      path: '../public/fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Free Roof Inspection | Storm Damage Claims | FreeRoofPros',
  description: 'Get a FREE roof inspection & see if insurance covers 100% of your replacement. 99.7% claim success rate. Licensed in all 50 states. Call 541-337-5734.',
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.freeroofpros.com/',
  },

  openGraph: {
    title: 'Free Roof Inspection | FreeRoofPros',
    description:
      'Get a FREE roof inspection & see if insurance covers 100% of your replacement.',
    url: 'https://www.freeroofpros.com/',
    siteName: 'Free Roof Pros',
    images: [
      {
        url: 'https://www.freeroofpros.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Free Roof Pros - Roofing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Roof Inspection | FreeRoofPros',
    description:
      'Get a FREE roof inspection & see if insurance covers 100% of your replacement.',
    images: ['https://www.freeroofpros.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-inter antialiased">
        <GTM gtmId="GTM-KN4P5NHD" />
        <Header />
        <main>{children}</main>
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
