import { notFound } from 'next/navigation';

import ArticleLayout from '@/components/pages/ArticleLayout';
import { getJournalPost, getJournalSlugs } from '@/lib/journal';
import { pageMetadata } from '@/lib/seo';

// Journal posts keep their WordPress URLs: /<post-slug>/
export const dynamicParams = false;

export function generateStaticParams() {
  return getJournalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<'/[slug]'>) {
  const { slug } = await params;
  return pageMetadata(`/${slug}/`);
}

export default async function Page({ params }: PageProps<'/[slug]'>) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();
  return <ArticleLayout post={post} />;
}
