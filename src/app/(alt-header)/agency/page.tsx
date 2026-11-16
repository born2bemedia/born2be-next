import AgencyPage from '@/components/pages/AgencyPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/agency/');

export default function Page() {
  return <AgencyPage />;
}
