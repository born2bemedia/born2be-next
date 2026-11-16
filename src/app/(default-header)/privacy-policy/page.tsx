import PrivacyPolicyPage from '@/components/pages/PrivacyPolicyPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/privacy-policy/');

export default function Page() {
  return <PrivacyPolicyPage />;
}
