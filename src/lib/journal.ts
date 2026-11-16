import 'server-only';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

// Journal (blog) posts live in src/content/journal/<slug>.md.
// The body can be Markdown or HTML (posts migrated from WordPress are HTML).

export type JournalPost = {
  slug: string;
  title: string;
  date: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  imageSrcSet?: string;
  imageSizes?: string;
  html: string;
};

const DIR = path.join(process.cwd(), 'src/content/journal');

export function getJournalSlugs(): string[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getJournalPost(slug: string): JournalPost | null {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const file = path.join(DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, 'utf8'));
  return {
    slug,
    title: String(data.title),
    date: String(data.date),
    image: String(data.image),
    imageWidth: data.imageWidth,
    imageHeight: data.imageHeight,
    imageSrcSet: data.imageSrcSet,
    imageSizes: data.imageSizes,
    html: marked.parse(content, { async: false }),
  };
}
