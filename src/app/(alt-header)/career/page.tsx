import CareerPage from '@/components/pages/CareerPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/career/');

export default function Page() {
  return <CareerPage />;
}
