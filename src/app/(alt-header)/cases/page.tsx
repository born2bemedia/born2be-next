import CasesPage from '@/components/pages/CasesPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/cases/');

export default function Page() {
  return <CasesPage />;
}
