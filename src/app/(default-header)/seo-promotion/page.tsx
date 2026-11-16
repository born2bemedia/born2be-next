import SeoPage from '@/components/pages/SeoPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/seo-promotion/');

export default function Page() {
  return <SeoPage />;
}
