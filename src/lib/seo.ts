import type { Metadata } from 'next';
import seo from '@/content/seo.json';

// Titles, descriptions and OG tags migrated from Yoast SEO (one entry per URL).
type Entry = {
  title?: string;
  description?: string;
  robots?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
};

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://born2be.media').replace(/\/$/, '');

export function pageMetadata(path: string): Metadata {
  const e = (seo as Record<string, Entry>)[path];
  if (!e) return {};
  const canonical = `${SITE_URL}${path}`;
  return {
    title: { absolute: e.title ?? 'Born2be Media' },
    description: e.description,
    alternates: { canonical },
    openGraph: {
      title: e.ogTitle ?? e.title,
      description: e.ogDescription ?? e.description,
      url: canonical,
      siteName: 'Born2be Media',
      locale: 'en_US',
      type: e.ogType === 'article' ? 'article' : 'website',
      ...(e.ogImage ? { images: [e.ogImage.replace(/^https?:\/\/(www\.)?born2be\.media/, SITE_URL)] } : {}),
      ...(e.ogType === 'article' ? { publishedTime: e.publishedTime, modifiedTime: e.modifiedTime } : {}),
    },
    twitter: { card: 'summary_large_image' },
  };
}
