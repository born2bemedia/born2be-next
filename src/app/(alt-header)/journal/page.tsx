import JournalPage from '@/components/pages/JournalPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/journal/');

export default function Page() {
  return <JournalPage />;
}
