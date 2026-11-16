import HomePage from '@/components/pages/HomePage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/');

export default function Page() {
  return <HomePage />;
}
