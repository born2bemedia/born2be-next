import ContactsPage from '@/components/pages/ContactsPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/contacts/');

export default function Page() {
  return <ContactsPage />;
}
