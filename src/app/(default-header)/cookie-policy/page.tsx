import CookiePolicyPage from '@/components/pages/CookiePolicyPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/cookie-policy/');

export default function Page() {
  return <CookiePolicyPage />;
}
