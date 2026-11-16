import HeaderAltMarkup from '@/components/layout/markup/HeaderAltMarkup';
import FooterMarkup from '@/components/layout/markup/FooterMarkup';

// Pages in this group use the black-logo header (header-two.php).
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="page" className="site wrapper">
      <a className="skip-link screen-reader-text" href="#primary">
        Skip to content
      </a>
      <HeaderAltMarkup />
      {children}
      <FooterMarkup />
    </div>
  );
}
