import FaqPage from '@/components/pages/FaqPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/faq/');

export default function Page() {
  return <FaqPage />;
}
