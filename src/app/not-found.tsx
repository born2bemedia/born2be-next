import HeaderDefaultMarkup from '@/components/layout/markup/HeaderDefaultMarkup';
import FooterMarkup from '@/components/layout/markup/FooterMarkup';
import NotFoundPage from '@/components/pages/NotFoundPage';

export const metadata = { title: { absolute: 'Page not found - Born2be Media' } };

export default function NotFound() {
  return (
    <div id="page" className="site wrapper">
      <HeaderDefaultMarkup />
      <NotFoundPage />
      <FooterMarkup />
    </div>
  );
}
