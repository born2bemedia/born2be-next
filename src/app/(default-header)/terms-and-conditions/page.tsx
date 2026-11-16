import TermsAndConditionsPage from '@/components/pages/TermsAndConditionsPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/terms-and-conditions/');

export default function Page() {
  return <TermsAndConditionsPage />;
}
