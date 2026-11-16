import WebsiteDevelopmentPage from '@/components/pages/WebsiteDevelopmentPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/website-development/');

export default function Page() {
  return <WebsiteDevelopmentPage />;
}
