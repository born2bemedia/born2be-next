import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import Preloader from '@/components/layout/Preloader';
import ThemeScripts from '@/components/layout/ThemeScripts';
import { SITE_URL } from '@/lib/seo';
import '@/styles/global.scss';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Born2be Media', template: '%s - Born2be Media' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body>
        {children}
        <Preloader />
        <ThemeScripts />
      </body>
      <GoogleAnalytics gaId="G-78YVK6MCPY" />
    </html>
  );
}
