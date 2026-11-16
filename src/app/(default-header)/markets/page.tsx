import MarketsPage from '@/components/pages/MarketsPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/markets/');

export default function Page() {
  return <MarketsPage />;
}
